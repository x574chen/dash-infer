/*!
 * Copyright (c) Alibaba, Inc. and its affiliates.
 * @file    moe_inefficient_op.cpp
 */

#include "moe_inefficient_op.h"  // NOLINT

#include <core/kernel/kernel.h>
#include <utility/datatype_dispatcher.h>
#ifdef ENABLE_CUDA
#include <cuda/cuda_context.h>
#endif
#include <cpu/cpu_context.h>

int64_t get_max_block(int input_token, int num_expert, int num_expert_pertoken,
                      int block_size) {
  int64_t max_token = (int64_t)input_token * num_expert_pertoken;
  if (max_token < num_expert) {
    // max_block = max_token
    return max_token;
  }
  int64_t max_block = num_expert + (max_token) / block_size;
  return max_block;
}
namespace allspark {
AsStatus MoeInefficientOp::Init(const OperatorProto& op_proto,
                                const DeviceContext& ctx,
                                const TensorMap& weights_map,
                                TensorMap* tensor_map) {
  AS_CHECK_STATUS(AsOperator::Init(op_proto, ctx, weights_map, tensor_map));
  // type inference
  dtype_ = tensor_map_->at(in_names_[0])->GetDataType();
  DeviceType backend = ctx.GetDeviceType();
  tensor_map_->at(out_names_[0])->SetDataType(dtype_);
  // attr
  auto& attr_map = op_proto.attr();
  if (attr_map.find("num_experts") == attr_map.end()) {
    LOG(ERROR) << "MoeInefficientOp : can't find num_expert attribute."
               << std::endl;
    return AsStatus::ALLSPARK_PARAM_ERROR;
  }
  num_expert_ = *(int*)(attr_map.at("num_experts").c_str());
  if (attr_map.find("num_experts_per_tok") == attr_map.end()) {
    LOG(ERROR) << "MoeInefficientOp : can't find num_expert_per_tok attribute."
               << std::endl;
    return AsStatus::ALLSPARK_PARAM_ERROR;
  }
  num_expert_pertoken_ = *(int*)(attr_map.at("num_experts_per_tok").c_str());

  block_size_ = 64;
  first_moe_ = true;
  // default
  float_gate_score_ = std::make_unique<AsTensor>(
      "topk_value_", backend, DataType::FLOAT32, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_});
  topk_value_ = std::make_unique<AsTensor>(
      "topk_value_", backend, DataType::FLOAT32, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_});
  experts_score_ = std::make_unique<AsTensor>(
      "experts_score_", backend, DataType::FLOAT32, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_pertoken_});
  topk_indice_ = std::make_unique<AsTensor>(
      "topk_indice_", backend, DataType::INT32, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_pertoken_});
  experts_idx_ = std::make_unique<AsTensor>(
      "experts_idx_", backend, DataType::INT64, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_pertoken_});
  experts_seq_ = std::make_unique<AsTensor>(
      "experts_seq_", backend, DataType::INT64, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_pertoken_});
  indice_source_ = std::make_unique<AsTensor>(
      "indice_source_", backend, DataType::INT64, DataMode::DENSE,
      Shape{ctx_->GetModelMaxLength(), num_expert_pertoken_});
  total_tokens_post_pad_ =
      std::make_unique<AsTensor>("total_tokens_post_pad_", backend,
                                 DataType::INT32, DataMode::DENSE, Shape{1});

  int64_t max_block = get_max_block(ctx_->GetModelMaxLength(), num_expert_,
                                    num_expert_pertoken_, block_size_);
  gate_up_proj_array_ptr = std::make_unique<AsTensor>(
      "gate_up_proj_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  down_proj_array_ptr = std::make_unique<AsTensor>(
      "down_proj_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  reorder_data_array_ptr = std::make_unique<AsTensor>(
      "reorder_data_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  gate_up_proj_out_array_ptr = std::make_unique<AsTensor>(
      "gate_up_proj_out_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  mid_result_array_ptr = std::make_unique<AsTensor>(
      "mid_result_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  final_result_array_ptr = std::make_unique<AsTensor>(
      "final_result_array_ptr", backend, DataType::INT64, DataMode::DENSE,
      Shape{max_block});
  std::unique_ptr<AsTensor> experts_num;
  std::unique_ptr<AsTensor> experts_seq;
  hidden_size_ = weights_[0]->GetShape()[1];
  proj_size_ = weights_[0]->GetShape()[2] / 2;
  return AsStatus::ALLSPARK_SUCCESS;
}
AsStatus MoeInefficientOp::Reshape() {
  Shape out_shape = tensor_map_->at(in_names_[0])->GetShape();
  AS_CHECK_STATUS(
      tensor_map_->at(out_names_[0])->SetShape(std::move(out_shape)));

  if (first_moe_) {
    // only reshape once,for warmup
    first_moe_ = false;
    total_token_ = ctx_->GetModelMaxLength();
    int64_t max_block = get_max_block(total_token_, num_expert_,
                                      num_expert_pertoken_, block_size_);
    int64_t max_total_tokens = max_block * block_size_;
    expert_size_ = (int64_t)hidden_size_ * proj_size_;
    float_gate_score_->SetShape(Shape{total_token_, num_expert_});
    topk_value_->SetShape(Shape{total_token_, num_expert_});
    experts_score_->SetShape(Shape{total_token_, num_expert_pertoken_});
    topk_indice_->SetShape(Shape{total_token_, num_expert_pertoken_});
    experts_idx_->SetShape(Shape{max_block});
    experts_seq_->SetShape(Shape{max_total_tokens});
    indice_source_->SetShape(Shape{max_total_tokens});
    ws_size_ = 0;

#ifdef ENABLE_CUDA
    if (ctx_->GetDeviceType() == DeviceType::CUDA) {
      size_t softmax_workspace = 0;
      cuda::StridedSoftmaxGetWorkspaceSize<float>(
          &softmax_workspace, ctx_->GetModelMaxLength(), num_expert_);
      AS_CHECK_STATUS(
          tensor_map_->at("workspace")
              ->SetShape(Shape{static_cast<dim_t>(softmax_workspace)}));
      ws_size_ += softmax_workspace;
    }
#endif
    ws_size_ +=
        max_total_tokens * hidden_size_ * SizeofType(dtype_);  // reorder_data
    ws_size_ +=
        max_total_tokens * proj_size_ * SizeofType(dtype_);  // up_proj_out
    ws_size_ += max_total_tokens * proj_size_ * SizeofType(dtype_);  // gate_out
    ws_size_ +=
        max_total_tokens * proj_size_ * SizeofType(dtype_);  // mid_result
    ws_size_ +=
        max_total_tokens * hidden_size_ * SizeofType(dtype_);  // final_result
    AS_CHECK_STATUS(tensor_map_->at("workspace")->SetShape(Shape{(ws_size_)}));
    AsTensor* in_tensor = tensor_map_->at(in_names_[0]).get();
    AsTensor* expert_weight_tensor = tensor_map_->at(in_names_[1]).get();
    AsTensor* gate_up_proj_weight_tensor = weights_[0];
    AsTensor* down_proj_weight_tensor = weights_[1];
    AsTensor* out_tensor = tensor_map_->at(out_names_[0]).get();
    switch (ctx_->GetDeviceType()) {
#ifdef ENABLE_CUDA
      case DeviceType::CUDA: {
        int top_k = num_expert_pertoken_;
        const CUDAContext* gpu_ctx = static_cast<const CUDAContext*>(ctx_);
        cublasHandle_t cublas_handle = gpu_ctx->GetCublasHandle();
        cudaStream_t cu_stream =
            static_cast<const CUDAContext*>(ctx_)->GetStream();
        auto functor = [&]<typename T>() {
          void* ws_ptr = tensor_map_->at("workspace")->GetDataPtr();
          reorder_data = ws_ptr;
          gate_up_proj_out = (char*)reorder_data + max_total_tokens *
                                                       hidden_size_ *
                                                       SizeofType(dtype_);
          mid_result = (char*)gate_up_proj_out +
                       max_total_tokens * proj_size_ * 2 * SizeofType(dtype_);
          final_result = (char*)mid_result +
                         max_total_tokens * proj_size_ * SizeofType(dtype_);
          gate_up_proj_array = (void**)gate_up_proj_array_ptr->GetDataPtr();
          down_proj_array = (void**)down_proj_array_ptr->GetDataPtr();
          reorder_data_array = (void**)reorder_data_array_ptr->GetDataPtr();
          gate_up_proj_out_array =
              (void**)gate_up_proj_out_array_ptr->GetDataPtr();
          mid_result_array = (void**)mid_result_array_ptr->GetDataPtr();
          final_result_array = (void**)final_result_array_ptr->GetDataPtr();
          cuda::MOEGetBatchArrayLauncher(
              nullptr, nullptr, (T*)reorder_data, reorder_data_array, max_block,
              block_size_ * hidden_size_, block_size_, cu_stream);
          cuda::MOEGetBatchArrayLauncher(
              nullptr, nullptr, (T*)gate_up_proj_out, gate_up_proj_out_array,
              max_block, block_size_ * proj_size_ * 2, block_size_, cu_stream);
          cuda::MOEGetBatchArrayLauncher(
              nullptr, nullptr, (T*)mid_result, mid_result_array, max_block,
              block_size_ * proj_size_, block_size_, cu_stream);
          cuda::MOEGetBatchArrayLauncher(
              nullptr, nullptr, (T*)final_result, final_result_array, max_block,
              block_size_ * hidden_size_, block_size_, cu_stream);
        };
        DispatchCUDA(dtype_, functor);
        break;
      }
#endif
      case DeviceType::CPU: {
        LOG(ERROR) << "MOE Operator does not support "
                   << "CPU"
                   << " device type" << std::endl;
        return AsStatus::ALLSPARK_RUNTIME_ERROR;
      }
      default:
        break;
    }
  }

  total_token_ = out_shape[0] * out_shape[1];
  return AsStatus::ALLSPARK_SUCCESS;
}
AsStatus MoeInefficientOp::Forward() {
  AsTensor* in_tensor = tensor_map_->at(in_names_[0]).get();
  AsTensor* expert_weight_tensor = tensor_map_->at(in_names_[1]).get();
  AsTensor* gate_up_proj_weight_tensor = weights_[0];
  AsTensor* down_proj_weight_tensor = weights_[1];
  AsTensor* out_tensor = tensor_map_->at(out_names_[0]).get();
  void* ws_ptr = tensor_map_->at("workspace")->GetDataPtr();
  switch (ctx_->GetDeviceType()) {
#ifdef ENABLE_CUDA
    case DeviceType::CUDA: {
      int top_k = num_expert_pertoken_;
      const CUDAContext* gpu_ctx = static_cast<const CUDAContext*>(ctx_);
      cublasHandle_t cublas_handle = gpu_ctx->GetCublasHandle();
      cudaStream_t cu_stream =
          static_cast<const CUDAContext*>(ctx_)->GetStream();
      auto functor = [&]<typename T>() {
        cuda::CastKernelLauncher((T*)expert_weight_tensor->GetDataPtr(),
                                 (float*)float_gate_score_->GetDataPtr(),
                                 expert_weight_tensor->GetShape().Count(),
                                 cu_stream);
        // cuda::StridedSoftmaxLauncher((float*)topk_value_->GetDataPtr(),
        //                              (float*)float_gate_score_->GetDataPtr(),
        //                              nullptr, nullptr, ws_ptr, ws_size_,
        //                              total_token_, num_expert_, cu_stream);
        cuda::SoftmaxLowReduceKernelLauncher(
            (float*)float_gate_score_->GetDataPtr(),
            (float*)topk_value_->GetDataPtr(), total_token_, num_expert_,
            cu_stream);
        cuda::TopKKernelLauncher((float*)experts_score_->GetDataPtr(),
                                 (int*)topk_indice_->GetDataPtr(),
                                 (float*)topk_value_->GetDataPtr(),
                                 total_token_, num_expert_, top_k, cu_stream);

        // int total_token_post_pad = 0;
        cuda::ReorderAndPaddingMOE(
            (int64_t*)experts_idx_->GetDataPtr(),
            (int64_t*)experts_seq_->GetDataPtr(),
            (int64_t*)indice_source_->GetDataPtr(),
            (int*)topk_indice_->GetDataPtr(), total_token_, num_expert_, top_k,
            block_size_, (int*)total_tokens_post_pad_->GetDataPtr(), cu_stream);

        int* total_tokens_pad_ptr = (int*)total_tokens_post_pad_->GetDataPtr();
        int max_block = get_max_block(total_token_, num_expert_,
                                      num_expert_pertoken_, block_size_);
        int max_total_tokens = max_block * block_size_;
        // LOG(INFO) << "max_block=" << max_block;
        cuda::GetReorderData((T*)reorder_data, (T*)in_tensor->GetDataPtr(),
                             (int64_t*)experts_idx_->GetDataPtr(),
                             (int64_t*)experts_seq_->GetDataPtr(),
                             total_tokens_pad_ptr, max_total_tokens,
                             total_token_ * top_k, top_k, hidden_size_,
                             block_size_, cu_stream);

        cuda::MOEGetBatchArrayLauncher(
            (int64_t*)experts_idx_->GetDataPtr(), total_tokens_pad_ptr,
            (T*)gate_up_proj_weight_tensor->GetDataPtr(), gate_up_proj_array,
            max_block, gate_up_proj_weight_tensor->GetShape().Count(1),
            block_size_, cu_stream);
        cuda::MOEGetBatchArrayLauncher(
            (int64_t*)experts_idx_->GetDataPtr(), total_tokens_pad_ptr,
            (T*)down_proj_weight_tensor->GetDataPtr(), down_proj_array,
            max_block, down_proj_weight_tensor->GetShape().Count(1),
            block_size_, cu_stream);
        cuda::BatchGemmWraper<T>(gate_up_proj_out_array, reorder_data_array,
                                 gate_up_proj_array, block_size_,
                                 proj_size_ * 2, hidden_size_, false, false,
                                 1.0f, 0.0f, hidden_size_, proj_size_ * 2,
                                 proj_size_ * 2, max_block, cublas_handle);
        cuda::UnaryGLUKernelLauncher((T*)mid_result, (T*)gate_up_proj_out,
                                     max_total_tokens, proj_size_,
                                     UnaryType::SILU, cu_stream);
        // cuda::MulAndSilu((T*)mid_result, (T*)gate_out, (T*)up_proj_out,
        //                  max_total_tokens, proj_size_, cu_stream);
        cuda::BatchGemmWraper<T>(
            final_result_array, mid_result_array, down_proj_array, block_size_,
            hidden_size_, proj_size_, false, false, 1.0f, 0.0f, proj_size_,
            hidden_size_, hidden_size_, max_block, cublas_handle);
        cuda::FinalizeMoeRoutingKernelLauncher(
            (T*)out_tensor->GetDataPtr(), (T*)final_result,
            (float*)experts_score_->GetDataPtr(),
            (int64_t*)indice_source_->GetDataPtr(),
            (int*)topk_indice_->GetDataPtr(), total_tokens_pad_ptr,
            total_token_, top_k, hidden_size_, cu_stream);
      };
      DispatchCUDA(dtype_, functor);
      break;
    }
#endif
    case DeviceType::CPU: {
      LOG(ERROR) << "MOE Operator does not support "
                 << "CPU"
                 << " device type" << std::endl;
      return AsStatus::ALLSPARK_RUNTIME_ERROR;
    }
    default:
      break;
  }
  return AsStatus::ALLSPARK_SUCCESS;
}
REGISTER_OP(MOE, CUDA, MoeInefficientOp)
REGISTER_OP(MOE, CPU, MoeInefficientOp)
}  // namespace allspark
Search.setIndex({"docnames": ["contribute", "cutlass", "cutlass.emit", "cutlass.op", "cutlass.utils", "examples", "externals/00_basic_gemm", "externals/01_epilogue", "externals/02_pytorch_extension_grouped_gemm", "index", "install", "modules"], "filenames": ["contribute.md", "cutlass.rst", "cutlass.emit.rst", "cutlass.op.rst", "cutlass.utils.rst", "examples.rst", "externals/00_basic_gemm.nblink", "externals/01_epilogue.nblink", "externals/02_pytorch_extension_grouped_gemm.nblink", "index.rst", "install.md", "modules.rst"], "titles": ["Contributing", "CUTLASS", "Emitters", "Operations", "Utilities", "Examples", "Basic example of using the CUTLASS Python interface", "Example of using elementwise activation functions in the CUTLASS Python interface", "Exporting a CUTLASS grouped GEMM kernel to a PyTorch CUDA extension", "CUTLASS Python Interface", "Installation", "CUTLASS Python API"], "terms": {"thank": 0, "you": [0, 6, 9, 10], "your": 0, "interest": 0, "cutlass": [0, 2, 3, 4, 5, 10], "python": [0, 1, 2, 3, 5, 10], "interfac": [0, 1, 3, 5, 10], "base": [0, 1, 3, 4], "type": [0, 1, 3, 6, 7, 8, 11], "fall": [0, 6], "two": [0, 3, 6], "categori": 0, "want": [0, 6], "report": [0, 6], "bug": 0, "featur": [0, 6], "request": 0, "document": [0, 6], "issu": [0, 6], "file": [0, 2, 8], "an": [0, 1, 4, 5, 6, 9, 10], "describ": 0, "what": [0, 6, 9], "encount": 0, "see": [0, 3, 6, 7, 8], "chang": [0, 3, 5, 9, 10], "The": [0, 2, 3, 6, 8, 9, 10], "team": 0, "evalu": 0, "triag": 0, "them": [0, 7, 9, 10], "schedul": [0, 4, 6], "releas": [0, 9, 10], "If": [0, 2, 3, 6, 7, 9, 10], "believ": 0, "need": [0, 6, 7, 9], "prioriti": 0, "attent": 0, "comment": 0, "notifi": 0, "implement": 0, "fix": 0, "we": [0, 6, 7, 8, 9, 10], "welcom": [0, 9], "from": [0, 2, 3, 6, 7, 8], "commun": [0, 9], "recommend": [0, 9, 10], "via": [0, 1, 2, 3, 5, 6, 7, 9, 10], "pull": 0, "have": [0, 3, 6, 9, 10], "question": [0, 4, 6], "about": 0, "consid": [0, 1, 9], "ask": 0, "discuss": 0, "tab": [0, 9], "pleas": [0, 3, 6, 7, 8], "sure": 0, "search": [0, 9], "through": [0, 6, 7, 8], "both": [0, 4], "exist": [0, 3, 9], "whether": [0, 1, 2, 3, 4, 6, 7, 9], "ha": [0, 3, 8, 9, 10], "alreadi": [0, 3], "been": [0, 3, 6, 9, 10], "answer": 0, "emitt": [1, 9, 11], "oper": [1, 2, 4, 5, 7, 8, 9, 11], "util": [1, 2, 8, 11], "registri": 1, "elementwis": [1, 3, 9], "can": [1, 2, 3, 4, 6, 7, 8, 9, 10], "ad": [1, 8], "mani": [1, 3, 6, 8, 9], "kernel": [1, 2, 3, 4, 5, 7, 9], "cutla": 1, "code": [1, 3, 6, 9], "like": [1, 8], "follow": [1, 3, 8, 9, 10], "gemm": [1, 2, 5, 9, 11], "plan": [1, 2, 3, 6, 7, 8, 9, 10], "op": [1, 2, 3, 4, 6, 7, 8, 9], "element": [1, 2, 3, 4, 5, 6, 8, 9], "datatyp": [1, 3, 4], "f32": [1, 3], "layout": [1, 2, 3, 4, 6, 7, 8, 9], "layouttyp": [1, 2, 3, 6, 7, 8, 9], "rowmajor": [1, 2, 3, 6, 7, 8, 9], "activ": [1, 3, 5], "relu": [1, 3, 5, 9], "get_activation_epilogu": [1, 11], "element_output": 1, "elements_per_access": 1, "element_accumul": [1, 3, 6], "element_comput": 1, "sourc": [1, 2, 3, 4, 9], "return": [1, 2, 3, 4, 6, 7, 8], "correspond": [1, 8], "function": [1, 3, 4, 5, 6, 8], "data": [1, 3, 6, 9, 11], "align": [1, 3, 4, 11], "us": [1, 2, 3, 4, 8, 9, 10], "paramet": [1, 2, 3, 4, 6, 9], "output": [1, 2, 3, 6, 7], "int": [1, 2, 3, 4], "operand": [1, 3, 6], "c": [1, 2, 3, 6, 7, 8, 9], "accumul": [1, 3], "which": [1, 2, 3, 6, 8, 9, 10], "comput": [1, 2, 3, 4, 8], "should": [1, 2, 3, 9], "perform": [1, 3, 7, 9], "functor": [1, 3], "get_activ": [1, 7, 11], "list": [1, 3, 4, 7, 9], "avail": [1, 9], "class": [1, 3, 7], "contain": [1, 2, 8, 9, 10], "valid": [1, 3, 4], "given": [1, 3, 6, 7, 9], "capabl": [1, 2, 3, 4, 8], "library_default": 1, "archopt": [1, 11], "target_cc": 1, "kernel_cc": [1, 3], "operation_kind": [1, 4], "gemm_kind": 1, "allowed_math_oper": 1, "mathoper": [1, 4, 9], "multiply_add": [1, 9], "1": [1, 3, 6, 7, 8, 9, 10], "multiply_add_satur": 1, "2": [1, 3, 6, 7, 8, 9], "object": [1, 3], "structur": 1, "keep": 1, "track": 1, "devic": [1, 2, 3, 4, 6, 8], "run": [1, 2, 3, 5, 8, 9, 10], "gener": [1, 2, 3, 6, 7, 8], "operationkind": 1, "regist": 1, "includ": [1, 9], "primit": 1, "math": 1, "allow": [1, 3, 8, 9, 10], "opclass_supports_combin": [1, 11], "op_class": 1, "datatype_comb": 1, "layout_comb": 1, "provid": [1, 3, 4, 6, 8, 9], "support": [1, 4, 6, 7, 9, 10], "combin": [1, 7, 9], "opcodeclass": [1, 3, 4, 6], "tupl": [1, 4], "element_a": [1, 3], "element_b": [1, 3], "layout_a": [1, 3], "layout_b": [1, 3], "set": [1, 2, 3, 4, 6, 7, 8, 9, 10], "A": [1, 2, 3, 7, 8, 9], "b": [1, 2, 3, 7, 8, 9], "kernelsfordatatyp": [1, 11], "supporting_opclass": [1, 11], "particular": [1, 9], "add": [1, 7, 9, 10, 11], "properti": [1, 3, 6], "unsort": 1, "thi": [1, 2, 3, 6, 7, 8, 9, 10], "all_oper": [1, 11], "all": [1, 3, 9, 10], "find_align": [1, 11], "shape": [1, 3, 4, 6, 7], "most": 1, "prefer": [1, 4, 8], "extent": 1, "each": [1, 3, 6, 7, 8], "dimens": [1, 4, 8], "tensor": [1, 3, 4, 6, 7, 8], "maximum": 1, "size": [1, 6, 7, 8], "satisfi": 1, "constraint": [1, 4], "indic": [1, 4], "sort": [1, 11], "kernels_by_align": 1, "descend": 1, "order": [1, 3], "threadblock": [1, 6, 7, 8], "optionregistri": [1, 11], "architectur": 1, "specif": [1, 3, 9], "option": [1, 3, 10], "options_for_cc": [1, 11], "cc": [1, 2, 3, 4, 6, 8], "get_swizzling_functor": [1, 11], "emit": [2, 3, 6, 8, 9], "build": [2, 8, 10], "cuda": [2, 3, 5, 9, 10], "extens": [2, 5, 9], "specifi": [2, 3, 4, 6, 7, 8, 9], "jit": [2, 8, 9], "compil": [2, 3, 6, 7, 8, 9], "": [2, 4, 6, 7, 8, 9], "cpp_extens": [2, 8], "load": [2, 8], "method": [2, 3, 7, 8], "exampl": [2, 3, 8, 10], "usag": 2, "torch": [2, 3, 8], "float32": [2, 3, 6, 9], "construct": [2, 3, 6, 7, 8], "mod": 2, "cutlass_gemm": 2, "80": [2, 3], "true": [2, 3, 6, 7, 8], "input": [2, 3, 6, 7], "ones": [2, 9], "512": [2, 8], "_": [2, 8], "rang": [2, 8, 9], "3": [2, 6, 7, 8, 9, 10], "modul": [2, 8, 9, 10], "d": [2, 3, 7, 8, 9], "without": [2, 3, 8, 9], "fals": [2, 3, 6, 7], "sourcedir": [2, 8], "after": [2, 3, 7], "call": [2, 3, 6, 7, 8], "directori": [2, 8, 9, 10], "setup": [2, 8, 9, 10], "py": [2, 6, 7, 8, 9, 10], "cpp": [2, 8], "cutlass_gemm_kernel": 2, "cu": [2, 8], "built": [2, 8, 9], "within": [2, 4, 8, 9], "torch_cuda_arch_list": [2, 8], "8": [2, 6, 7, 8, 9, 10], "0": [2, 3, 6, 7, 8, 9, 10], "develop": [2, 9], "user": [2, 6, 8, 9, 10], "later": [2, 8], "import": [2, 6, 7, 8, 9], "name": [2, 6, 7, 8, 9], "leverag": [2, 6, 8], "i": [2, 3, 4, 6, 7, 8, 9, 10], "just": [2, 6, 8], "time": [2, 6, 8, 9], "result": [2, 3, 6, 7, 8], "str": 2, "target": 2, "bool": [2, 3], "written": [2, 6, 8, 9], "none": [2, 3, 4], "eas": [3, 9], "meant": 3, "one": [3, 6, 8, 9, 10], "easili": 3, "instanti": 3, "configur": [3, 6, 9], "under": [3, 6, 8], "hood": [3, 6, 8], "select": [3, 9], "sensibl": [3, 9], "default": [3, 5, 7, 9, 11], "templat": [3, 6, 9], "note": [3, 6, 9, 10], "optim": [3, 9], "expect": 3, "To": [3, 6, 7, 8, 9, 10], "achiev": [3, 9], "tune": 3, "simplest": 3, "ar": [3, 6, 9, 10], "numpi": [3, 6, 7, 9], "cupi": [3, 6], "One": [3, 6, 7, 8, 9], "also": [3, 6], "differ": [3, 6, 7, 8, 9], "runtim": [3, 6, 8], "shorthand": 3, "element_c": 3, "element_d": 3, "a0": 3, "rand": 3, "128": [3, 6, 7, 8], "256": [3, 6, 7, 8], "b0": 3, "64": [3, 6, 7, 8], "c0": 3, "zero": [3, 6, 7], "d0": 3, "32": [3, 6], "a1": 3, "b1": 3, "c1": 3, "d1": 3, "addition": 3, "enabl": [3, 8, 9], "decoupl": 3, "underli": 3, "its": [3, 8, 9], "execut": [3, 6, 8], "np": [3, 6, 7, 9], "do": [3, 6, 7, 9], "other": [3, 5, 6, 9], "work": [3, 9], "fuse": [3, 9], "epilogu": [3, 5, 6, 7, 8, 9, 11], "asynchron": 3, "arg": 3, "sync": 3, "alpha": [3, 6, 7], "beta": [3, 6, 7], "layout_c": 3, "operationbas": [3, 11], "along": 3, "bound": 3, "throughout": 3, "lifetim": 3, "constructor": [3, 6], "flexibli": 3, "equival": 3, "row": 3, "major": [3, 10], "concis": 3, "same": [3, 6, 8, 9], "valu": 3, "explicitli": 3, "when": [3, 6, 9, 10], "than": [3, 6], "pass": [3, 6], "here": [3, 6, 7], "though": 3, "those": [3, 6, 9], "must": [3, 9, 10], "present": [3, 9], "onli": [3, 6, 7, 9], "some": [3, 6, 8], "unspecifi": 3, "inherit": 3, "preced": 3, "e": [3, 6, 9, 10], "g": [3, 6, 9], "infer": [3, 9, 10], "otherwis": [3, 4, 9], "For": [3, 6, 8, 9, 10], "h100": 3, "90": [3, 6], "sm90": [3, 6, 9], "desir": 3, "x": [3, 7, 8], "style": 3, "amper": 3, "repres": [3, 6], "scalar": 3, "paramt": 3, "scale": 3, "product": [3, 9], "well": [3, 7], "layout_d": 3, "current": [3, 6, 10], "tile_descript": [3, 4, 6], "alignment_a": 3, "alignment_b": 3, "alignment_c": 3, "print_modul": [3, 6, 7, 8], "ani": [3, 8, 9], "chosen": 3, "tile": [3, 4, 6], "descript": [3, 4, 6, 9], "backend": [3, 4, 6, 7, 9], "tiledescript": [3, 4], "print": [3, 6, 7, 8, 9, 10], "wa": [3, 6], "gemmoperationunivers": 3, "gemmuniversaloper": 3, "opclass": [3, 4, 6, 9], "opcod": 3, "batch_count": 3, "hold": [3, 9, 10], "either": [3, 8, 9], "By": [3, 6], "onc": 3, "complet": 3, "launch": [3, 6, 9, 10], "immedi": 3, "In": [3, 6, 8, 9], "case": [3, 6, 8], "respons": 3, "caller": 3, "syncrhon": 3, "befor": [3, 6], "attempt": [3, 6, 9], "access": [3, 6], "argument": 3, "number": [3, 4], "batch": 3, "wait": 3, "gemmargu": 3, "swizzling_functor": [3, 6], "swizzl": [3, 6, 9, 11], "being": [3, 4, 6], "swizz": 3, "groupedgemm": [3, 8, 11], "As": [3, 6, 8, 9], "f16": 3, "gemm_group": 3, "gemmoperationgroup": 3, "gemmgroupedargu": 3, "defin": [3, 6, 7, 8, 9], "high": [3, 6, 7, 9], "level": [3, 9, 10], "conv2d": 3, "possibl": [3, 6, 9], "calcul": 4, "attribut": 4, "alignment_or_default": [4, 11], "alignment_provid": 4, "default_align": 4, "doe": [4, 7, 9], "exce": 4, "calculate_smem_usag": [4, 11], "amount": 4, "share": [4, 6], "memori": [4, 6], "byte": 4, "consum": 4, "calculate_smem_usage_per_stag": [4, 11], "singl": [4, 8], "stage": [4, 6], "valid_cluster_shap": [4, 11], "cluster_shap": 4, "thread": [4, 6, 7, 8], "block": 4, "cluster": [4, 6], "first": [4, 6, 7, 8, 9, 10], "second": 4, "error": [4, 5, 9], "messag": [4, 6], "valid_kernel_schedul": [4, 11], "kernel_schedul": 4, "kernelscheduletyp": 4, "valid_stage_count": [4, 11], "td": [4, 6], "raw": 4, "limit": [4, 9], "capac": 4, "convert": 4, "between": 4, "frontend": 4, "backend_math_oper": [4, 11], "math_op": 4, "bfloat16_library_typ": [4, 11], "inp": 4, "bfloat16_typ": [4, 11], "bfloat16": 4, "binding_layout": [4, 11], "binding_library_typ": [4, 11], "binding_opclass": [4, 11], "binding_typ": [4, 11], "construct_backend_td": [4, 11], "cupy_library_typ": [4, 11], "cupy_typ": [4, 11], "get_datatype_and_layout": [4, 11], "has_binding_typ": [4, 11], "library_layout": [4, 11], "library_to_bind": [4, 11], "library_typ": [4, 11], "numpy_library_typ": [4, 11], "numpy_typ": [4, 11], "td_from_profiler_op": [4, 11], "profil": [4, 6, 8, 9], "td_from_profiler_td": [4, 11], "torch_library_typ": [4, 11], "torch_typ": [4, 11], "basic": [5, 7, 8], "declar": [5, 7, 9], "mode": 5, "cach": 5, "non": [5, 8], "handl": 5, "ident": 5, "wise": 5, "pytorch": [5, 6, 9, 10, 11], "background": 5, "group": [5, 9, 11], "export": [5, 9], "notebook": [6, 7, 8, 9], "walk": [6, 7, 8], "variou": [6, 7], "packag": [6, 7, 8, 9], "our": [6, 7, 8], "random": [6, 7, 8], "control": [6, 7], "ther": [6, 7], "step": [6, 7], "omit": [6, 7], "inform": [6, 7], "m": [6, 7, 8], "n": [6, 7, 8], "k": [6, 7, 8, 9], "dtype": [6, 8, 9], "float16": [6, 7, 8, 9], "type_a": [6, 7], "type_b": [6, 7], "type_c": [6, 7], "type_d": [6, 7], "seed": [6, 7, 8], "1234": [6, 7], "scope_min": [6, 7], "4": [6, 7, 8, 9], "scope_max": [6, 7], "tensor_a": [6, 7], "ceil": [6, 7], "uniform": [6, 7], "low": [6, 7], "astyp": [6, 7], "tensor_b": [6, 7], "tensor_c": [6, 7], "tensor_d": [6, 7], "usr": [6, 7, 8], "local": [6, 7, 8], "lib": [6, 7, 8], "python3": [6, 7, 8], "dist": [6, 7, 8], "tqdm": [6, 7, 8], "auto": [6, 7, 8], "22": [6, 7, 8], "tqdmwarn": [6, 7, 8], "iprogress": [6, 7, 8], "found": [6, 7, 8], "updat": [6, 7, 8], "jupyt": [6, 7, 8, 9], "ipywidget": [6, 7, 8], "http": [6, 7, 8], "readthedoc": [6, 7, 8], "io": [6, 7, 8], "en": [6, 7, 8], "stabl": [6, 7, 8], "user_instal": [6, 7, 8], "html": [6, 7, 8, 9], "autonotebook": [6, 7, 8], "notebook_tqdm": [6, 7, 8], "get": 6, "start": [6, 8], "abov": [6, 8, 9, 10], "up": [6, 8], "assum": [6, 8], "sm80": [6, 7, 8], "fp16": 6, "core": 6, "previous": 6, "so": 6, "match": [6, 9, 10], "below": 6, "howev": [6, 8, 9], "requir": [6, 8, 9, 10], "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_256x128_64x3_tt_align8": 6, "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_256x128_64x3_tt_align8_bas": 6, "typenam": [6, 7, 8], "defaultgemmunivers": [6, 7], "lt": [6, 7, 8], "half_t": [6, 7, 8], "complextransform": [6, 7, 8], "knone": [6, 7, 8], "float": 6, "arch": [6, 7, 8], "opclasstensorop": [6, 7, 8], "gemmshap": [6, 7, 8], "gt": [6, 7, 8], "16": [6, 7, 8], "linearcombin": [6, 7, 8], "gemmidentitythreadblockswizzl": [6, 7, 8], "opmultiplyadd": [6, 7, 8], "gemmkernel": [6, 7, 8], "struct": [6, 7, 8], "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_256x128_64x3_tt_align8_typ": 6, "public": [6, 7, 8], "gemm_oper": [6, 7], "gemmarguments2x": [6, 7], "0x7f79cc556070": 6, "There": 6, "wai": [6, 9], "specifii": 6, "thei": 6, "more": [6, 8], "detail": [6, 8], "compar": [6, 8], "tensor_d_numpi": 6, "test": [6, 7, 9, 10], "assert_array_equ": [6, 7], "could": [6, 8], "framework": [6, 9], "beyond": 6, "try": 6, "whenev": 6, "back": [6, 8], "simt": [6, 9], "tensorop": 6, "suppos": 6, "don": 6, "t": [6, 9, 10], "field": [6, 7], "shown": 6, "fit": [6, 9], "notic": [6, 9], "around": [6, 8], "free": 6, "were": 6, "initi": [6, 8], "intial": 6, "5": [6, 7, 8], "tensor_d_simt": 6, "cutlass_sm80_simt_f16_sgemm_f16_1x1x1_128x128_8x2_tt_align1": 6, "cutlass_sm80_simt_f16_sgemm_f16_1x1x1_128x128_8x2_tt_align1_bas": 6, "opclasssimt": 6, "cutlass_sm80_simt_f16_sgemm_f16_1x1x1_128x128_8x2_tt_align1_typ": 6, "0x7f7b3075abe0": 6, "ran": 6, "equal": 6, "6": [6, 7, 8], "mai": [6, 9, 10], "previou": 6, "took": 6, "becaus": 6, "had": 6, "yet": 6, "binari": [6, 9], "recompil": 6, "isn": 6, "necessari": [6, 10], "everi": 6, "again": 6, "ll": [6, 8], "find": 6, "much": 6, "faster": 6, "7": [6, 9, 10], "2400": 6, "3232": 6, "4096": [6, 9], "0x7f7b30fb9880": 6, "show": 6, "how": 6, "simpl": [6, 8], "But": 6, "bit": 6, "over": 6, "enumer": [6, 9], "warp": 6, "format": [6, 8], "len": 6, "num_print": 6, "10": [6, 9, 10], "132": 6, "clustershap": 6, "threadblockshap": 6, "warpcount": 6, "scheduleauto": 6, "next": [6, 8], "pick": 6, "9": [6, 9, 10], "idx": 6, "randint": [6, 8], "112": 6, "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_128x128_32x4_tt_align8": 6, "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_128x128_32x4_tt_align8_bas": 6, "cutlass_sm80_tensorop_f16_s16x8x16gemm_f16_1x1x1_128x128_32x4_tt_align8_typ": 6, "0x7f79cc58de20": 6, "modifi": 6, "stream": [6, 9], "pre": [6, 9], "least": 6, "threadblockswizzlestreamk": 6, "catch": 6, "understand": 6, "too": 6, "normal": 6, "would": [6, 8], "due": 6, "gpu": [6, 8, 9, 10], "insuffici": [6, 8], "abl": 6, "detect": 6, "11": [6, 9, 10], "begin": 7, "simpli": [7, 8], "known": [7, 9], "cutlass_sm80_tensorop_h16x8x16gemm_1x1x1_256x128_64x3_tt_align8": 7, "cutlass_sm80_tensorop_h16x8x16gemm_1x1x1_256x128_64x3_tt_align8_bas": 7, "cutlass_sm80_tensorop_h16x8x16gemm_1x1x1_256x128_64x3_tt_align8_typ": 7, "0x7fed907287c0": 7, "make": [7, 9], "easi": [7, 9], "linear": 7, "act": [7, 9], "formul": 7, "max": 7, "tensor_d_relu": 7, "linearcombinationgener": 7, "0x7fed906f2460": 7, "now": 7, "verifi": 7, "relu_ref": 7, "varieti": 7, "wide": 7, "obtain": 7, "39": 7, "gelu": 7, "hardswish": 7, "leaky_relu": 7, "sigmoid": 7, "silu": 7, "tanh": 7, "f": [7, 9, 10], "leakyrelu": 7, "potenti": 8, "stride": 8, "It": [8, 9], "thought": 8, "version": [8, 9, 10], "pointer": 8, "arrai": 8, "p": 8, "m_1": 8, "n_1": 8, "k_1": 8, "m_2": 8, "n_2": 8, "k_2": 8, "m_p": 8, "n_p": 8, "k_p": 8, "particularli": 8, "benefici": 8, "satur": 8, "small": 8, "problem": 8, "isol": 8, "similarli": 8, "2023": [8, 9], "matric": 8, "def": 8, "generate_problem": 8, "valid_s": 8, "1024": 8, "choic": 8, "append": 8, "50": 8, "ds_torch": 8, "zip": 8, "d_torch": 8, "assert": 8, "allclos": 8, "cutlass_sm80_tensorop_h16x8x16gemm_grouped_1x1x1_256x128_64x3_tt_align8": 8, "cutlass_sm80_tensorop_h16x8x16gemm_grouped_1x1x1_256x128_64x3_tt_align8_bas": 8, "defaultgemmgroup": 8, "groupschedulemod": 8, "kdeviceonli": 8, "cutlass_sm80_tensorop_h16x8x16gemm_grouped_1x1x1_256x128_64x3_tt_align8_typ": 8, "procedur": 8, "quickli": 8, "experi": 8, "might": 8, "avoid": 8, "overhead": [8, 9], "associ": 8, "portion": 8, "solut": 8, "creat": [8, 9], "These": [8, 9], "out": [8, 9], "ahead": 8, "grouped_gemm": 8, "grouped_gemm_kernel": 8, "wrapper": 8, "aforement": 8, "setuptool": 8, "script": 8, "instal": 8, "module_output": 8, "where": 8, "torch_arch_list": 8, "custom": 8, "tutori": 8, "cd": [8, 9], "fly": 8, "vanilla": 8, "final": 8, "num_warmup": 8, "20": 8, "num_profil": 8, "100": 8, "warmup": 8, "iter": 8, "synchron": 8, "nongroup": 8, "3f": 8, "u": 8, "1e6": 8, "speedup": 8, "400": 8, "696": 8, "646": 8, "670": 8, "614": 8, "experiment": 9, "api": 9, "futur": [9, 10], "feedback": 9, "aim": 9, "toward": 9, "few": 9, "reduc": 9, "occurr": 9, "favor": 9, "except": 9, "intend": 9, "made": 9, "highest": 9, "scenario": 9, "wish": 9, "librari": [9, 11], "cubla": 9, "heurist": 9, "fast": 9, "strive": 9, "minim": 9, "surround": 9, "deploi": 9, "directli": 9, "automat": 9, "engin": 9, "atop": 9, "convolut": 9, "nearli": 9, "space": 9, "while": 9, "flexibl": 9, "similar": 9, "come": 9, "burden": 9, "contrast": 9, "higher": 9, "exhaust": 9, "At": 9, "remain": 9, "continu": 9, "replac": 9, "refer": 9, "cutlass_bind": 9, "math_inst": 9, "mathinstruct": 9, "backward": 9, "compat": 9, "maintain": 9, "move": 9, "forward": 9, "docker": 9, "imag": [9, 10], "locat": [9, 10], "cuda12": [9, 10], "latest": [9, 10], "dockerfil": [9, 10], "rm": [9, 10], "12": [9, 10], "prior": [9, 10], "cutlass_path": [9, 10], "path": [9, 10], "clone": [9, 10], "repositori": [9, 10], "cuda_install_path": [9, 10], "process": [9, 10], "pwd": [9, 10], "bin": [9, 10], "nvcc": [9, 10], "awk": [9, 10], "reflect": [9, 10], "lab": 9, "sphinx": 9, "addit": 9, "sudo": 9, "apt": 9, "pandoc": 9, "pip": 9, "upgrad": 9, "furo": 9, "myst": 9, "parser": 9, "copybutton": 9, "nbsphinx": 9, "link": 9, "inlin": 9, "instruct": 9, "command": 9, "apidoc": 9, "o": 9, "docs_src": 9, "mv": 9, "_build": 9, "doc": 9, "nvidia": 9, "corpor": 9, "affili": 9, "right": 9, "reserv": 9, "spdx": 9, "licens": 9, "identifi": 9, "bsd": 9, "claus": 9, "redistribut": 9, "form": 9, "modif": 9, "permit": 9, "condit": 9, "met": 9, "retain": 9, "disclaim": 9, "reproduc": 9, "materi": 9, "distribut": 9, "neither": 9, "holder": 9, "nor": 9, "contributor": 9, "endors": 9, "promot": 9, "deriv": 9, "softwar": 9, "permiss": 9, "BY": 9, "THE": 9, "AND": 9, "AS": 9, "express": 9, "OR": 9, "impli": 9, "warranti": 9, "BUT": 9, "NOT": 9, "TO": 9, "OF": 9, "merchant": 9, "FOR": 9, "purpos": 9, "IN": 9, "NO": 9, "event": 9, "shall": 9, "BE": 9, "liabl": 9, "direct": 9, "indirect": 9, "incident": 9, "special": 9, "exemplari": 9, "consequenti": 9, "damag": 9, "procur": 9, "substitut": 9, "good": 9, "servic": 9, "loss": 9, "profit": 9, "busi": 9, "interrupt": 9, "caus": 9, "ON": 9, "theori": 9, "liabil": 9, "contract": 9, "strict": 9, "tort": 9, "neglig": 9, "aris": 9, "even": 9, "IF": 9, "advis": 9, "SUCH": 9, "index": 9, "page": 9, "toolkit": 10, "minor": 10, "environ": 10, "variabl": 10, "ensur": 10, "ngc": 10, "subpackag": 11, "common": 11, "check": 11}, "objects": {"cutlass.emit": [[2, 0, 0, "-", "common"], [2, 0, 0, "-", "pytorch"]], "cutlass.emit.pytorch": [[2, 1, 1, "", "pytorch"]], "cutlass": [[1, 0, 0, "-", "epilogue"], [1, 0, 0, "-", "library_defaults"], [1, 0, 0, "-", "swizzle"]], "cutlass.epilogue": [[1, 1, 1, "", "get_activation_epilogue"], [1, 1, 1, "", "get_activations"]], "cutlass.library_defaults": [[1, 2, 1, "", "ArchOptions"], [1, 2, 1, "", "KernelsForDataType"], [1, 2, 1, "", "OptionRegistry"]], "cutlass.library_defaults.ArchOptions": [[1, 3, 1, "", "opclass_supports_combination"], [1, 3, 1, "", "operations"], [1, 3, 1, "", "supporting_opclasses"]], "cutlass.library_defaults.KernelsForDataType": [[1, 3, 1, "", "add"], [1, 4, 1, "", "alignments"], [1, 4, 1, "", "all_operations"], [1, 3, 1, "", "find_alignment"], [1, 3, 1, "", "operations"], [1, 3, 1, "", "sort"]], "cutlass.library_defaults.OptionRegistry": [[1, 3, 1, "", "options_for_cc"]], "cutlass.op": [[3, 0, 0, "-", "gemm"], [3, 0, 0, "-", "gemm_grouped"], [3, 0, 0, "-", "op"]], "cutlass.op.gemm": [[3, 2, 1, "", "Gemm"]], "cutlass.op.gemm.Gemm": [[3, 4, 1, "", "activation"], [3, 3, 1, "", "compile"], [3, 3, 1, "", "construct"], [3, 4, 1, "", "opclass"], [3, 3, 1, "", "run"], [3, 4, 1, "", "swizzling_functor"], [3, 3, 1, "", "tile_descriptions"]], "cutlass.op.gemm_grouped": [[3, 2, 1, "", "GroupedGemm"]], "cutlass.op.gemm_grouped.GroupedGemm": [[3, 3, 1, "", "construct"], [3, 3, 1, "", "run"], [3, 4, 1, "", "swizzling_functor"]], "cutlass.op.op": [[3, 2, 1, "", "OperationBase"]], "cutlass.op.op.OperationBase": [[3, 3, 1, "", "activations"], [3, 3, 1, "", "swizzling_functors"]], "cutlass.swizzle": [[1, 1, 1, "", "get_swizzling_functors"]], "cutlass.utils": [[4, 0, 0, "-", "check"], [4, 0, 0, "-", "datatypes"]], "cutlass.utils.check": [[4, 1, 1, "", "alignment_or_default"], [4, 1, 1, "", "calculate_smem_usage"], [4, 1, 1, "", "calculate_smem_usage_per_stage"], [4, 1, 1, "", "valid_cluster_shape"], [4, 1, 1, "", "valid_kernel_schedule"], [4, 1, 1, "", "valid_stage_count"]], "cutlass.utils.datatypes": [[4, 1, 1, "", "backend_math_operation"], [4, 1, 1, "", "bfloat16_library_type"], [4, 1, 1, "", "bfloat16_type"], [4, 1, 1, "", "binding_layout"], [4, 1, 1, "", "binding_library_type"], [4, 1, 1, "", "binding_opclass"], [4, 1, 1, "", "binding_type"], [4, 1, 1, "", "construct_backend_td"], [4, 1, 1, "", "cupy_library_type"], [4, 1, 1, "", "cupy_type"], [4, 1, 1, "", "get_datatype_and_layout"], [4, 1, 1, "", "has_binding_type"], [4, 1, 1, "", "library_layout"], [4, 1, 1, "", "library_to_binding"], [4, 1, 1, "", "library_type"], [4, 1, 1, "", "numpy_library_type"], [4, 1, 1, "", "numpy_type"], [4, 1, 1, "", "td_from_profiler_op"], [4, 1, 1, "", "td_from_profiler_td"], [4, 1, 1, "", "torch_library_type"], [4, 1, 1, "", "torch_type"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method", "4": "py:property"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"], "4": ["py", "property", "Python property"]}, "titleterms": {"contribut": 0, "cutlass": [1, 6, 7, 8, 9, 11], "subpackag": 1, "epilogu": 1, "librari": 1, "default": [1, 6], "swizzl": 1, "emitt": 2, "common": 2, "pytorch": [2, 8], "oper": [3, 6], "gemm": [3, 6, 7, 8], "group": [3, 8], "util": 4, "check": 4, "data": 4, "type": 4, "exampl": [5, 6, 7, 9], "basic": 6, "us": [6, 7], "python": [6, 7, 8, 9, 11], "interfac": [6, 7, 8, 9], "declar": [6, 8], "run": [6, 7], "chang": 6, "mode": [6, 10], "cach": 6, "kernel": [6, 8], "non": [6, 9], "handl": 6, "error": 6, "elementwis": 7, "activ": 7, "function": [7, 9], "an": 7, "ident": 7, "relu": 7, "element": 7, "wise": 7, "other": 7, "export": 8, "cuda": 8, "extens": 8, "background": 8, "via": 8, "overview": 9, "goal": 9, "comparison": 9, "pycutlass": 9, "transit": 9, "from": [9, 10], "current": 9, "get": 9, "start": 9, "option": 9, "environ": 9, "variabl": 9, "instal": [9, 10], "build": 9, "document": 9, "copyright": 9, "indic": 9, "tabl": 9, "sourc": 10, "develop": 10, "packag": 10, "docker": 10, "api": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "nbsphinx": 4, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Contributing": [[0, "contributing"]], "CUTLASS": [[1, "cutlass"]], "Subpackages": [[1, "subpackages"]], "Epilogue": [[1, "module-cutlass.epilogue"]], "Library Defaults": [[1, "module-cutlass.library_defaults"]], "Swizzle": [[1, "module-cutlass.swizzle"]], "Emitters": [[2, "emitters"]], "Common": [[2, "module-cutlass.emit.common"]], "PyTorch": [[2, "module-cutlass.emit.pytorch"]], "Operations": [[3, "operations"]], "GEMM": [[3, "module-cutlass.op.gemm"]], "Grouped GEMM": [[3, "module-cutlass.op.gemm_grouped"]], "Operation": [[3, "module-cutlass.op.op"]], "Utilities": [[4, "utilities"]], "Checks": [[4, "module-cutlass.utils.check"]], "Data Types": [[4, "module-cutlass.utils.datatypes"]], "Examples": [[5, "examples"], [9, "examples"]], "Basic example of using the CUTLASS Python interface": [[6, "Basic-example-of-using-the-CUTLASS-Python-interface"]], "Declaring and running a GEMM": [[6, "Declaring-and-running-a-GEMM"]], "Changing operation modes": [[6, "Changing-operation-modes"]], "Running cached kernels": [[6, "Running-cached-kernels"]], "Running non-default GEMMs": [[6, "Running-non-default-GEMMs"]], "Handling errors": [[6, "Handling-errors"]], "Example of using elementwise activation functions in the CUTLASS Python interface": [[7, "Example-of-using-elementwise-activation-functions-in-the-CUTLASS-Python-interface"]], "Run a GEMM with an identity activation function": [[7, "Run-a-GEMM-with-an-identity-activation-function"]], "Run a GEMM with a ReLU element-wise activation function": [[7, "Run-a-GEMM-with-a-ReLU-element-wise-activation-function"]], "Other element-wise activation functions": [[7, "Other-element-wise-activation-functions"]], "Exporting a CUTLASS grouped GEMM kernel to a PyTorch CUDA extension": [[8, "Exporting-a-CUTLASS-grouped-GEMM-kernel-to-a-PyTorch-CUDA-extension"]], "Background on grouped GEMM": [[8, "Background-on-grouped-GEMM"]], "Declaring a grouped GEMM via the CUTLASS Python interface": [[8, "Declaring-a-grouped-GEMM-via-the-CUTLASS-Python-interface"]], "Exporting the CUTLASS kernel to a PyTorch CUDA extension": [[8, "Exporting-the-CUTLASS-kernel-to-a-PyTorch-CUDA-extension"]], "CUTLASS Python Interface": [[9, "cutlass-python-interface"]], "Overview": [[9, "overview"]], "Non-goals": [[9, "non-goals"]], "Comparison to PyCUTLASS": [[9, "comparison-to-pycutlass"]], "Transitioning from PyCUTLASS": [[9, "transitioning-from-pycutlass"]], "Current functionality": [[9, "current-functionality"]], "Getting started": [[9, "getting-started"]], "Optional environment variables": [[9, "optional-environment-variables"]], "Installation": [[9, "installation"], [10, "installation"]], "Building documentation": [[9, "building-documentation"]], "Copyright": [[9, "copyright"]], "Indices and tables": [[9, "indices-and-tables"]], "Installing from source": [[10, "installing-from-source"]], "Installing a developer-mode package": [[10, "installing-a-developer-mode-package"]], "Docker": [[10, "docker"]], "CUTLASS Python API": [[11, "cutlass-python-api"]]}, "indexentries": {"archoptions (class in cutlass.library_defaults)": [[1, "cutlass.library_defaults.ArchOptions"]], "kernelsfordatatype (class in cutlass.library_defaults)": [[1, "cutlass.library_defaults.KernelsForDataType"]], "optionregistry (class in cutlass.library_defaults)": [[1, "cutlass.library_defaults.OptionRegistry"]], "add() (cutlass.library_defaults.kernelsfordatatype method)": [[1, "cutlass.library_defaults.KernelsForDataType.add"]], "alignments (cutlass.library_defaults.kernelsfordatatype property)": [[1, "cutlass.library_defaults.KernelsForDataType.alignments"]], "all_operations (cutlass.library_defaults.kernelsfordatatype property)": [[1, "cutlass.library_defaults.KernelsForDataType.all_operations"]], "cutlass.epilogue": [[1, "module-cutlass.epilogue"]], "cutlass.library_defaults": [[1, "module-cutlass.library_defaults"]], "cutlass.swizzle": [[1, "module-cutlass.swizzle"]], "find_alignment() (cutlass.library_defaults.kernelsfordatatype method)": [[1, "cutlass.library_defaults.KernelsForDataType.find_alignment"]], "get_activation_epilogue() (in module cutlass.epilogue)": [[1, "cutlass.epilogue.get_activation_epilogue"]], "get_activations() (in module cutlass.epilogue)": [[1, "cutlass.epilogue.get_activations"]], "get_swizzling_functors() (in module cutlass.swizzle)": [[1, "cutlass.swizzle.get_swizzling_functors"]], "module": [[1, "module-cutlass.epilogue"], [1, "module-cutlass.library_defaults"], [1, "module-cutlass.swizzle"], [2, "module-cutlass.emit.common"], [2, "module-cutlass.emit.pytorch"], [3, "module-cutlass.op.gemm"], [3, "module-cutlass.op.gemm_grouped"], [3, "module-cutlass.op.op"], [4, "module-cutlass.utils.check"], [4, "module-cutlass.utils.datatypes"]], "opclass_supports_combination() (cutlass.library_defaults.archoptions method)": [[1, "cutlass.library_defaults.ArchOptions.opclass_supports_combination"]], "operations() (cutlass.library_defaults.archoptions method)": [[1, "cutlass.library_defaults.ArchOptions.operations"]], "operations() (cutlass.library_defaults.kernelsfordatatype method)": [[1, "cutlass.library_defaults.KernelsForDataType.operations"]], "options_for_cc() (cutlass.library_defaults.optionregistry method)": [[1, "cutlass.library_defaults.OptionRegistry.options_for_cc"]], "sort() (cutlass.library_defaults.kernelsfordatatype method)": [[1, "cutlass.library_defaults.KernelsForDataType.sort"]], "supporting_opclasses() (cutlass.library_defaults.archoptions method)": [[1, "cutlass.library_defaults.ArchOptions.supporting_opclasses"]], "cutlass.emit.common": [[2, "module-cutlass.emit.common"]], "cutlass.emit.pytorch": [[2, "module-cutlass.emit.pytorch"]], "pytorch() (in module cutlass.emit.pytorch)": [[2, "cutlass.emit.pytorch.pytorch"]], "gemm (class in cutlass.op.gemm)": [[3, "cutlass.op.gemm.Gemm"]], "groupedgemm (class in cutlass.op.gemm_grouped)": [[3, "cutlass.op.gemm_grouped.GroupedGemm"]], "operationbase (class in cutlass.op.op)": [[3, "cutlass.op.op.OperationBase"]], "activation (cutlass.op.gemm.gemm property)": [[3, "cutlass.op.gemm.Gemm.activation"]], "activations() (cutlass.op.op.operationbase method)": [[3, "cutlass.op.op.OperationBase.activations"]], "compile() (cutlass.op.gemm.gemm method)": [[3, "cutlass.op.gemm.Gemm.compile"]], "construct() (cutlass.op.gemm.gemm method)": [[3, "cutlass.op.gemm.Gemm.construct"]], "construct() (cutlass.op.gemm_grouped.groupedgemm method)": [[3, "cutlass.op.gemm_grouped.GroupedGemm.construct"]], "cutlass.op.gemm": [[3, "module-cutlass.op.gemm"]], "cutlass.op.gemm_grouped": [[3, "module-cutlass.op.gemm_grouped"]], "cutlass.op.op": [[3, "module-cutlass.op.op"]], "opclass (cutlass.op.gemm.gemm property)": [[3, "cutlass.op.gemm.Gemm.opclass"]], "run() (cutlass.op.gemm.gemm method)": [[3, "cutlass.op.gemm.Gemm.run"]], "run() (cutlass.op.gemm_grouped.groupedgemm method)": [[3, "cutlass.op.gemm_grouped.GroupedGemm.run"]], "swizzling_functor (cutlass.op.gemm.gemm property)": [[3, "cutlass.op.gemm.Gemm.swizzling_functor"]], "swizzling_functor (cutlass.op.gemm_grouped.groupedgemm property)": [[3, "cutlass.op.gemm_grouped.GroupedGemm.swizzling_functor"]], "swizzling_functors() (cutlass.op.op.operationbase method)": [[3, "cutlass.op.op.OperationBase.swizzling_functors"]], "tile_descriptions() (cutlass.op.gemm.gemm method)": [[3, "cutlass.op.gemm.Gemm.tile_descriptions"]], "alignment_or_default() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.alignment_or_default"]], "backend_math_operation() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.backend_math_operation"]], "bfloat16_library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.bfloat16_library_type"]], "bfloat16_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.bfloat16_type"]], "binding_layout() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.binding_layout"]], "binding_library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.binding_library_type"]], "binding_opclass() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.binding_opclass"]], "binding_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.binding_type"]], "calculate_smem_usage() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.calculate_smem_usage"]], "calculate_smem_usage_per_stage() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.calculate_smem_usage_per_stage"]], "construct_backend_td() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.construct_backend_td"]], "cupy_library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.cupy_library_type"]], "cupy_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.cupy_type"]], "cutlass.utils.check": [[4, "module-cutlass.utils.check"]], "cutlass.utils.datatypes": [[4, "module-cutlass.utils.datatypes"]], "get_datatype_and_layout() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.get_datatype_and_layout"]], "has_binding_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.has_binding_type"]], "library_layout() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.library_layout"]], "library_to_binding() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.library_to_binding"]], "library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.library_type"]], "numpy_library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.numpy_library_type"]], "numpy_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.numpy_type"]], "td_from_profiler_op() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.td_from_profiler_op"]], "td_from_profiler_td() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.td_from_profiler_td"]], "torch_library_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.torch_library_type"]], "torch_type() (in module cutlass.utils.datatypes)": [[4, "cutlass.utils.datatypes.torch_type"]], "valid_cluster_shape() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.valid_cluster_shape"]], "valid_kernel_schedule() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.valid_kernel_schedule"]], "valid_stage_count() (in module cutlass.utils.check)": [[4, "cutlass.utils.check.valid_stage_count"]]}})
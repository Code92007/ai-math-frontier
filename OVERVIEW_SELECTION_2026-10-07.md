# 完整 overview PDF 的第二轮精选（2026-10-07）

读取用户提供的 41 页 OpenAI Research Catalog，逐页提取正文与原始论文超链接，对照网站已有条目，并渲染检查精选所在页面。封面日期为 2026-10-06，标示 372 个结果家族、722 份手稿；这是一份成果概览，不是 722 份完整证明正文。因此本轮确认的是发布内容、范围与形式化说明，不是证明正确性。

本轮新增数学 7 条、物理 3 条，全部标待审阅 / 机构或作者发布，卡片日期沿用公开日 10 月 6 日。保留原有数学、算法、算法竞赛、物理分类；没有重复加入前几轮已收录的 UGC、矩阵乘法、BSD 低余秩、π、Hodge 特例、量子面积律等。

源文件：用户 Downloads 中的 overview(1).pdf（只读，未复制进网站仓库）。

SHA-256：`267e1b7c860b638301690ffa8b7818b3f940419ce2d7337158182f69f20d64ac`。

## 新增精选及范围

| 家族 | PDF 页 | 领域 | 结果及原始论文 | 必须保留的边界 |
| --- | --- | --- | --- | --- |
| 006 | 2 | 数学 | OpenAI 发布Goldfeld 二次扭曲秩分布证明声明；[原始论文 1](https://github.com/openai/math/blob/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-September-23-2026/paper.pdf)、[原始论文 2](https://github.com/openai/math/blob/main/preprints/The-mean-analytic-rank-of-quadratic-twists-of-elliptic-curves-September-23-2026/paper.pdf) | 计数采用有符号无平方因子扭曲参数，按绝对值排序；是密度与平均结果，不表示每个扭曲都只有秩 0 或 1。与已有低 Selmer 余秩 BSD 条目相关但不是同一陈述。本次未取得第 006 族 Lean 范围文档。 |
| 029 | 4 | 数学 | OpenAI 发布Artin 原根猜想的逐底数无穷性证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026/primitive-roots-all-integer-bases.pdf) | 这里证明声明是逐底数无穷性及下界，不能改写成完整 Artin 预期密度渐近；同族“同时原根”的结果另带条件。本次未取得第 029 族 Lean 范围文档。 |
| 087 | 10 | 数学 | OpenAI 发布对称与非对称 Mahler 体积积猜想证明声明；[原始论文 1](https://github.com/openai/math/blob/main/preprints/The-symmetric-Mahler-conjecture-and-its-equality-cases-September-22-2026/paper.pdf)、[原始论文 2](https://github.com/openai/math/blob/main/preprints/The-Mahler-Conjecture-for-General-Convex-Bodies-September-22-2026/paper.pdf) | 官方 Lean 说明分别列出对称结论、一般凸体结论及极体积辛宽度。文档中较早的“不含非对称”一句仅对应前述对称陈述，后面另列一般结论；函数版不在所选陈述内，容量恰为 4 的辛嵌入也未断言。 |
| 157 | 18 | 数学 | OpenAI 发布Hadwiger 与 Colin de Verdière 着色猜想反例证明声明；[原始论文 1](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Hadwigers-conjecture-September-23-2026/paper.pdf)、[原始论文 2](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Colin-de-Verdiere-chromatic-conjecture-September-23-2026/paper.pdf) | χ_f(G) > h(G) 蕴含普通色数版本也失败，但不改变四色定理。第 157 族 Lean 文档只覆盖 χ_list(G) ≤ C h(G) 的正面结果，没有覆盖这两项反例，不能称反例已经由该文档机检。 |
| 196 | 21 | 数学 | OpenAI 发布Kaplansky 零因子猜想反例证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/A-Torsion-Free-Group-Algebra-with-Zero-Divisors-September-23-2026/paper.pdf) | Lean 说明覆盖该特征二群代数反例及分类空间性质。特征二反例足以否定全称猜想，但不能写成特征零或所有底域都已有反例。 |
| 248 | 27 | 数学 | OpenAI 发布Thompson 群 F 的非可和性证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/Thompsons-group-F-is-nonamenable-September-23-2026/paper.pdf) | 官方 Lean 说明覆盖该标准群的非可和性，不给出显式边界常数或指定生成集。非可和性不自动等于存在非阿贝尔自由子群，不能据此扩大群结构结论。 |
| 304 | 33 | 数学 | OpenAI 发布全部有限维的 Hilbert–Smith 猜想证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/The-Hilbert-Smith-conjecture-in-every-finite-dimension-September-23-2026/paper.pdf) | 保留流形 Hausdorff、第二可数、无边界及作用忠实等假设；结论是群作用的结构，不是希尔伯特第五问题任意表述的全新解决。本次未取得第 304 族 Lean 范围文档。 |
| 260 | 28 | 物理 | OpenAI 发布时空 Penrose 不等式及刚性证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026/paper.pdf) | 保留主导能量、弱未来俘获、正包围面积和衰减假设；等号刚性另有视界条件。Lean 文档仅覆盖三维 CKS 类端替换与 Schwarzschild 等号例子，不覆盖一般 Bondi–Penrose 主不等式，也不能替代全部时空 Penrose 论文。 |
| 263 | 29 | 物理 | OpenAI 发布电离与广义电离猜想证明声明；[原始论文 1](https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf)、[原始论文 2](https://github.com/openai/math/blob/main/preprints/Generalized-ionization-energies-for-full-Coulomb-atoms-September-24-2026/paper.pdf) | Lean 说明覆盖 m → ∞ 且 Z/m → ∞ 的电离能渐近和先取 Z → ∞ 的半径渐近，不覆盖固定 m 收敛，也不单独断言基态存在。不能把所列机检范围当作 Z + CM 束缚数主张的形式证明。 |
| 266 | 29 | 物理 | OpenAI 发布六维互无偏基最大数为 3证明声明；[原始论文](https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf) | 关键区别：官方 Lean 说明只给出较弱的至多五组界和若干 Fourier / Hadamard 消去陈述，并明确没有建立论文的三组上界或排除任意四组的计算。因此保留论文与计算声明，不标“3 组上界已机检”。 |

## 形式化范围的重点发现

- [第 266 族](https://github.com/openai/math/blob/main/lean/docs/266.md)：论文的 N(6)=3 不能改写成 Lean 已验证。文档明确只覆盖较弱的至多五组界等所选结果，排除四组的计算另有 binary64 与编译条件。
- [第 157 族](https://github.com/openai/math/blob/main/lean/docs/157.md)：Lean 范围是线性列表着色上界，不能用它给 Hadwiger 或 Colin de Verdière 反例背书。
- [第 260 族](https://github.com/openai/math/blob/main/lean/docs/260.md)：端替换和 Schwarzschild 等号实例，不等于一般时空 Penrose / Bondi–Penrose 主不等式形式化。
- [第 263 族](https://github.com/openai/math/blob/main/lean/docs/263.md)：广义电离能与半径渐近不等于固定电子数的全部电离猜想，也不覆盖分子最大束缚电子数主张。
- [第 087 族](https://github.com/openai/math/blob/main/lean/docs/087.md)：分别列出对称与一般 Mahler 陈述；函数版不在所选定理范围。文档较早的排除语句不能截断读取成整个文件不含一般凸体结论。
- 第 006、029、304 族对应 docs URL 本次返回 404，未据此否定论文主张，也没有将这些条目标为形式化。

## 取舍与验证

其余专业家族没有全部铺入网站；优先选择跨领域影响较大且现有卡片未单列的十项。这些选项不意味着完整目录只剩十项重要成果，也不意味着领域专家已经接受全部发布声明。

种子版本 14 增量加入新稳定 ID，同步刷新脚本缓存标记，保留已有本地编辑和往期删除状态。验证项目为 JavaScript 语法、ID 唯一性、领域 / 状态 / 来源结构、日期和版本 13 到 14 的模拟升级；没有编译外部 Lean 项目。

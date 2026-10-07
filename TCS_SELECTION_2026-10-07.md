# 2026-10-07 理论计算机科学截图查漏

对照用户截图、OpenAI 官方目录和网站现有卡片，精选新增 10 个结果家族，全部归算法界，标为待审阅 / 机构或作者发布。截图只是查漏线索，结论采用原始发布，不把截图中的“证明了”直接当作本站已核验结论。

目录首次公开日为 2026-10-06，卡片沿用该日期；2026-10-07 是本轮整理日期。手稿目录里的 9 月或 10 月日期不自动视为首次公开日期。本次未独立编译 Lean 或复核完整数学证明。

## 新增精选

| 家族 | 结果 | 核对到的主要边界 |
| --- | --- | --- |
| 105 | [OpenAI 发布2-to-1 Games 的完美完全性证明声明](https://github.com/openai/math/blob/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026/paper.pdf) | 官方 Lean 文档覆盖从二元 3SAT 出发的确定性多项式归约、完全可满足的 yes 情形和显式无权约束。它是完美完全性的具体版本，不与现有 UGC 卡片合并为同一结果。 |
| 106 | [OpenAI 发布三可染图的任意固定色数着色困难性证明声明](https://github.com/openai/math/blob/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026.pdf) | Lean 说明覆盖从 3SAT 到有限简单图的独立集间隙归约，运行时间包含完整邻接矩阵输出。NP-hard 是最坏情形复杂性结论，不表示每个具体三可染图都难。 |
| 108 | [OpenAI 发布permanent 边界行列式复杂度的三次下界证明声明](https://github.com/openai/math/blob/main/preprints/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026.pdf) | 与网站已有算术公式 n⁴/log n 下界是不同计算模型。Lean 说明覆盖 exact 与 border 行列式表示，论文的代数分支程序推论不在所选陈述内；这一多项式下界本身不证明 VP ≠ VNP。 |
| 113 | [OpenAI 发布一般图完美匹配计数的 FPRAS证明声明](https://github.com/openai/math/blob/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026/main.pdf) | 官方 Lean 范围覆盖固定随机机、每条随机带上的多项式位运行时间及匹配熵界。它是随机近似计数，不是精确多项式计数；同族论文的全局锐面维数界不在所选形式陈述内。 |
| 116 | [OpenAI 发布非交换公式黑盒恒等式测试证明声明](https://github.com/openai/math/blob/main/preprints/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026.pdf) | Lean 文档的单点结论限于零特征的无除法公式，未单独断言该结论的位构造时间和矩阵维数界；有理公式列表另覆盖多项式时间与输出长度。不能推广为一般交换电路 PIT，也不据此断言正特征论文已形式化。 |
| 117 | [OpenAI 发布Uniform Sparsest Cut 的常数近似困难性与 SDP 间隙证明声明](https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026.pdf) | Lean 说明仅覆盖一列实例规模上的 SDP 整性间隙，不覆盖 NP-hardness，也不是对每个规模的统一间隙下界。整性间隙限制特定松弛，不能单独等同一般算法困难性。 |
| 118 | [OpenAI 发布装箱 MIRUP 反例与无界配置 LP 加性间隙证明声明](https://github.com/openai/math/blob/main/preprints/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026.pdf) | 官方 Lean 范围覆盖每个固定整数 c 的反例及 B 与 B+c 间的困难性。结论讨论加性误差与指定配置 LP，不表示不存在乘法近似方案。 |
| 125 | [OpenAI 发布Metric k-median 的 1 + 2/e 近似阈值证明声明](https://github.com/openai/math/blob/main/preprints/The-Approximation-Threshold-for-Metric-k-Median-September-24-2026/main.pdf) | Lean 说明覆盖上述算法及在 P ≠ NP 下近似因子下确界恰为 1 + 2/e。下确界不等于存在精确达到端点的算法；固定 ε 的复杂度不自动意味着对 ε 也全多项式。 |
| 132 | [OpenAI 发布敏感度与块敏感度的超二次分离证明声明](https://github.com/openai/math/blob/main/preprints/A-superquadratic-separation-between-sensitivity-and-block-sensitivity-September-25-2026/paper.pdf) | Lean 说明覆盖二次比值无界及固定超二次指数构造。反驳的是二次加强版，不否定黄皓已证明的原始敏感度猜想所断言的多项式关系。 |
| 141 | [OpenAI 发布实数存在理论属于计数层级证明声明](https://github.com/openai/math/blob/main/preprints/Existential-universal-real-sentences-in-the-counting-hierarchy-October-4-2026/etr-counting-hierarchy.pdf) | 这是复杂性上界，不等同 ETR 属于 P 或 NP，也不声称解决任意量词交替的完整实数理论。本次未取得第 141 族 Lean 范围文档，不标为已形式核验。 |

## 逐项形式化来源

- OpenAI 发布2-to-1 Games 的完美完全性证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/105.md)
- OpenAI 发布三可染图的任意固定色数着色困难性证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/106.md)
- OpenAI 发布permanent 边界行列式复杂度的三次下界证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/108.md)
- OpenAI 发布一般图完美匹配计数的 FPRAS证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/113.md)
- OpenAI 发布非交换公式黑盒恒等式测试证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/116.md)
- OpenAI 发布Uniform Sparsest Cut 的常数近似困难性与 SDP 间隙证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/117.md)
- OpenAI 发布装箱 MIRUP 反例与无界配置 LP 加性间隙证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/118.md)
- OpenAI 发布Metric k-median 的 1 + 2/e 近似阈值证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/125.md)
- OpenAI 发布敏感度与块敏感度的超二次分离证明声明：[Lean 范围说明（本站未编译）](https://github.com/openai/math/blob/main/lean/docs/132.md)
- OpenAI 发布实数存在理论属于计数层级证明声明：本次未取得对应 Lean 范围说明，保留为论文声明。

## 已有条目与未新增部分

UGC、L = RL = BPL、矩阵乘法、整数乘法、DFT、Subset Sum、有限域多项式分解、一般图最大匹配、编辑距离、三机调度与最短公共超串已收录，不重复新增。Permanent 的边界行列式复杂度三次下界与原有算术公式下界采用不同计算模型，分别保留。

本轮按用户要求精选，没有把截图剩余计数、在线算法、学习理论、自动机等条目全部录入。截图列出的原始敏感度猜想、非交换 PIT、SDP 间隙和复杂性上界尤其容易被扩大解释，卡片已写明范围。

## 升级

种子版本 13 增量补入十个新稳定 ID，同步更新脚本缓存标记；保留已有本地编辑和往期删除状态。与 8 月十项成果以及 10 月目录总览的集合卡片分别显示，卡片数不等同于互不重叠的成果家族数。

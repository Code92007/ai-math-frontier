# OpenAI 2026-10-06 数学手稿代表性结果

核对日期：2026-10-07。以下是公开证明声明的精选，不是独立数学审稿。全部按“待审阅 / 机构或作者发布”收录。

官方集合包含 722 份手稿、372 个结果家族；一个家族可能有主结果、推论、伴随证明与替代证明。模型为未发布内部前沿模型，不推断为 Astra 或其他公开型号。

[官方发布](https://openai.com/index/sharing-ai-progress-in-mathematics/) · [生成流程与核验说明](https://github.com/openai/math)

| 家族 | 代表结果 | 核心声明与范围 |
| --- | --- | --- |
| 003 | [准黎曼假设：固定无零半平面](https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf) | 声称 ζ 与所有 Dirichlet L 函数在 Re(s)>7/8 无零（排除 s=1 的极点）。 |
| 004 | [有理数域上的希尔伯特第十问题](https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-September-24-2026/main.pdf) | 声称不存在通用算法，能判定任意整系数多元多项式是否有有理数零点，变量个数属于输入。 |
| 002 | [BSD：低 Selmer 余秩下的完整公式](https://github.com/openai/math/blob/main/preprints/Exact-Birch-Swinnerton-Dyer-Formula-from-Low-Selmer-Corank-October-3-2026/exact-bsd-low-selmer-corank.pdf) | 声称对有理数域上、某个素数 q 的 q 幂 Selmer 群余秩为 0 或 1 的椭圆曲线，证明完整 BSD 首项公式及 Tate–Shafarevich 群有限性。 |
| 032 | [霍奇猜想：CM 阿贝尔簇与 K3 乘积特例](https://github.com/openai/math/blob/main/preprints/The-rational-Hodge-conjecture-for-CM-abelian-varieties-September-30-2026/paper.pdf) | 声称证明所有复 CM 阿贝尔簇在任意维数、余维的有理霍奇猜想；同族另有射影复 K3 曲面任意有限乘积的证明声明。 |
| 017 | [π 的无理性指数恰为 2](https://github.com/openai/math/blob/main/preprints/The-irrationality-exponent-of-pi-is-2-September-24-2026/paper.pdf) | 声称 π 的无理性指数为 2：任意 ε>0，在充分大的分母 q 下，每个有理数 p/q 与 π 的距离至少为 q^(−2−ε)。 |
| 005 | [Catalan 常数的无理性](https://github.com/openai/math/blob/main/preprints/Catalans-constant-is-irrational-September-24-2026/paper.pdf) | 声称 Catalan 常数 G=Σ(j≥0)(−1)^j/(2j+1)^2 为无理数。 |
| 007 | [二点 Chowla：普通平均下的消去](https://github.com/openai/math/blob/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf) | 声称 Liouville 函数在固定非成比例仿射形式对上的相关和为 O(X/(log X)^c)，c>0 为绝对常数；并给出带明确非伪装性条件的修正二元 Elliott 结论。 |
| 074 | [Kakeya：三维极大函数与四维维数](https://github.com/openai/math/blob/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf) | 声称证明三维 Kakeya 极大函数猜想，以及四维 Kakeya 集的 Hausdorff 维数为 4。 |

## 003 · 准黎曼假设：固定无零半平面

涉及素数分布的核心解析工具；未达到黎曼猜想所要求的临界线 1/2。Lean 范围覆盖 7/8 界，论文后续应用不在该范围。

[Lean 范围说明](https://github.com/openai/math/blob/main/lean/docs/003.md)。仅核对范围文档，未独立编译或审计。

## 004 · 有理数域上的希尔伯特第十问题

把丢番图方程的算法不可判定性推进到有理数域；不能把已知整数域结论直接当作此结果。当前家族目录未列 Lean 链接。

本次核对的家族目录未列 Lean 链接；不据此断言其他位置不存在形式化。

## 002 · BSD：低 Selmer 余秩下的完整公式

这是千禧年问题的重要范围，不能称为一般 BSD 已解决。与第 006 族 Goldfeld 声明结合，目录还声称覆盖每条曲线二次扭曲中的密度一集合。当前家族目录未列 Lean 链接。

本次核对的家族目录未列 Lean 链接；不据此断言其他位置不存在形式化。

## 032 · 霍奇猜想：CM 阿贝尔簇与 K3 乘积特例

一般光滑复射影代数簇上的霍奇猜想不由这些特例解决。官方说明 CM 结果的生成流程属于常规评估流程的例外。当前家族目录未列 Lean 链接。

本次核对的家族目录未列 Lean 链接；不据此断言其他位置不存在形式化。

## 017 · π 的无理性指数恰为 2

回答 π 能被有理数逼近到何种程度。论文还声称 Flint–Hills 级数收敛；Lean 范围覆盖指数结论，不包含该级数推论。

[Lean 范围说明](https://github.com/openai/math/blob/main/lean/docs/017.md)。仅核对范围文档，未独立编译或审计。

## 005 · Catalan 常数的无理性

表述易懂、结论明确的常数算术代表。Lean 范围说明覆盖无理性主结论；该声明不涉及超越性。

[Lean 范围说明](https://github.com/openai/math/blob/main/lean/docs/005.md)。仅核对范围文档，未独立编译或审计。

## 007 · 二点 Chowla：普通平均下的消去

普通平均与对数加权平均是不同结论；这里也不是所有阶数的 Chowla 猜想。Lean 范围说明包含二点相关与带条件的 Elliott 消去。

[Lean 范围说明](https://github.com/openai/math/blob/main/lean/docs/007.md)。仅核对范围文档，未独立编译或审计。

## 074 · Kakeya：三维极大函数与四维维数

每个方向都包含单位线段的集合可以有多小，是调和分析与几何的核心问题。三维极大估计与四维维数结论应分开理解，不能推广为所有维数已解决。当前家族目录未列 Lean 链接。

本次核对的家族目录未列 Lean 链接；不据此断言其他位置不存在形式化。

此前已收录的 UGC、L = RL = BPL、矩阵乘法、DFT 与 Subset Sum 属于同一公开集合，不重复新增。

选择依据：问题辨识度、跨领域代表性、结论可清楚描述、能明确区分一般问题与特例。此表不是官方排名，也未穷尽全部重要结果。

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

## 物理界代表结果

以下八项按应用主题归入物理界，均为理论证明声明、待审阅。动理学方程虽在原目录的偏微分方程栏目，本档案按等离子体物理主题归类。

| 家族 | 结果 | 声明与核验范围 |
| --- | --- | --- |
| 221 | [稀疏自旋玻璃的 Mézard–Parisi 公式](https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf) | 声称在满足 Panchenko–Talagrand 分解、独立性、可积性和正性条件的稀疏偶数阶 Ising 模型中，极限自由能等于有限深度层级试探泛函的下确界。 统计物理中将腔方法预测转为严格定理的代表，不能推广至任意自旋玻璃。Lean 范围文档列出上述模型类下的变分等式。 |
| 261 | [Anderson 模型的局域化与离域化](https://github.com/openai/math/blob/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf) | 声称对独立均匀格点势的 Anderson 模型，二维任意正无序强度下几乎必然为纯点谱；固定 d≥3 时，足够弱无序在某固定开区间内具有纯绝对连续谱且谱权重非零。 关联无序介质中的量子输运。Lean 文档仅识别二维算子的几乎必然谱集合，不证明纯点谱类型，也不覆盖高维离域化。 |
| 265 | [二维有能隙量子系统的面积律](https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf) | 声称对有限方格子诱导区域上的有限程 Hamiltonian，仅在统一的全系统谱隙及局域相互作用界等条件下，唯一基态满足纠缠熵面积律。 说明基态纠缠随边界而非体积增长；同族另有方格子基态的多项式键维 PEPS 近似声明。适用对象限于论文模型与假设；本次未找到对应 Lean 范围文档。 |
| 268 | [自旋 1 Heisenberg 链的 Haldane 能隙](https://github.com/openai/math/blob/main/preprints/The-periodic-spin-one-Haldane-gap-September-24-2026/paper.pdf) | 声称纯反铁磁自旋 1 Heisenberg 链在偶数长度周期环上，谱隙随系统增长仍有统一正下界。 凝聚态量子自旋链的代表问题；奇数开链的伴随结果另带端点场 h=3/5，不能混为无边界条件的一般结论。本次未找到对应 Lean 范围文档。 |
| 269 | [Laughlin 能隙与弱标量无序稳定性](https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf) | 声称在球面、填充率 1/3 的费米子完整 V₁ 相互作用模型中存在统一 Laughlin 谱隙，并在足够弱的最低 Landau 能级投影标量单体势下保持有隙。 关联分数量子霍尔态的稳定性。Lean 范围包含未扰动能隙与 Fock 空间不等式，未包含投影单体势下的稳定性或扰动后基态唯一性；不等同于所有相互作用模型均已解决。 |
| 271 | [量子 Heisenberg 铁磁体的自发磁化与 Bloch 定律](https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf) | 声称三维有限程铁磁耦合模型满足带精确系数的 Bloch T^(3/2) 定律；同族还声称 d≥3 最近邻模型在任意正量子自旋下存在低温自发磁化。 热力学极限先于零场导数和低温极限。Lean 文档覆盖最近邻模型的低温自发磁化及无限体积动力学，不列 Bloch 定律或晶格修正。 |
| 273 | [玻色量子输入的熵光子数不等式](https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf) | 声称两路独立、有限能量、有限模数的玻色输入经过分束器混合后，输出熵光子数不小于输入的透射率加权平均；每路内部允许模间纠缠。 量子光学与通信理论的代表不等式。Lean 范围覆盖该不等式，不包含论文中的热衰减信道最小输出熵与广播容量推论。 |
| 362 | [三维相对论 Vlasov–Maxwell 方程的大数据全局光滑性](https://github.com/openai/math/blob/main/preprints/Global-classical-solutions-of-the-three-dimensional-relativistic-Vlasov-Maxwell-system-September-23-2026/paper.pdf) | 声称三维单物种相对论 Vlasov–Maxwell 系统对允许的大初值具有全局存在唯一性，解在每个有限时间区间保持光滑。 描述带电粒子分布与电磁场的耦合。初始粒子密度要求紧支撑，场要求有限能量和各阶导数有界；不能推广为任意物种或任意初值。本次未找到对应 Lean 范围文档。 |

已列 Lean 文档：[221](https://github.com/openai/math/blob/main/lean/docs/221.md)、[261](https://github.com/openai/math/blob/main/lean/docs/261.md)、[269](https://github.com/openai/math/blob/main/lean/docs/269.md)、[271](https://github.com/openai/math/blob/main/lean/docs/271.md)、[273](https://github.com/openai/math/blob/main/lean/docs/273.md)。未独立编译或审计，不将局部形式化扩写为整篇论文已验证。

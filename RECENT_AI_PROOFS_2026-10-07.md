# 近两个月 AI 数学与理论成果查漏

核对窗口：2026-08-07 至 2026-10-07。以作者论文、作者源码与机构发布为依据，对照网站已有条目后精选补入 8 条（数学 4、算法 1、物理 3）。其中 7 条是证明、反例或候选证明发布，1 条是尚未闭合的证明进展；不能统称为八项已经公认解决的难题。本次没有独立编译 Lean、复核完整证明或进行穷尽性文献检索。

## 新收录

| 领域 | 结果与原始来源 | AI 贡献及必须保留的边界 |
| --- | --- | --- |
| 数学 | [Köthe 猜想反例](https://arxiv.org/abs/2609.07996)，[模型产物](https://github.com/tadamcz/koethe) | GPT-6 Astra 自主搜索；人类作者给出论文。仓库形式化的是矩阵等价形式的否定，原始表述的归约不在仓库机检范围。 |
| 数学 | [Smale 均值猜想 K = 1](https://github.com/tadamcz/mean-value-problem) | 作者报告 Astra 自主找到反例、Comparator 通过；元数据明确无人类专家深入审阅。不否定 K = 4 定理。 |
| 数学 | [全维格点临界键渗流](https://github.com/anthropics/formal-math/tree/795efb86f191735c5481675763537cfb4ff37e55/percolation) | Claude 在 Justin Leder 指导下的候选证明，声称 θ(p_c)=0。使用固定历史版本，不能把键渗流扩展成所有渗流模型；未见独立专家审稿结论。 |
| 数学 | [Gromov 体积增长问题](https://arxiv.org/html/2608.14507v1) | 论文明确披露 GPT-5.6 Sol Ultra 提出归纳策略，作者指导并重写证明，推广是人类贡献。保留 Ric ≥ 0、Scal ≥ 1 假设；另有 Jian Ge 独立工作，不宣称 AI 独占优先权。 |
| 算法 | [强 Papadimitriou–Ratajczak 猜想](https://www.proofatlas.ai/formalizations/strong-papadimitriou-ratajczak-conjecture/) | GPT-6 Pro / Codex 参与策略、计算、形式化；已记录 Lean 构建，但发布方 accepted-result 与独立陈述对应审阅仍未完成。凸贪心绘图存在性不等于高效构造算法。 |
| 物理 | [光滑外力三维 Euler 爆破及 Boussinesq 伴随工作](https://cims.nyu.edu/dynamic/news/1528/)，[代码](https://github.com/tristanbuckmaster/fluid_lean) | 数学家指导下 LLM 辅助，Claude 编写 Lean，作者核对 Euler 可信陈述。保留外力条件，不是无外力 Euler 或 Navier–Stokes 千禧问题的解决。 |
| 物理 | [一致时空光滑外力 IPM 爆破](https://arxiv.org/abs/2609.16470) | 原始摘要注明 LLM 辅助及 Lean 形式化，没有据此推断具体模型。发散的是梯度，密度仍在 C^η、η<1 中收敛。 |
| 物理 | [PINN Euler 候选剖面](https://arxiv.org/abs/2609.10867)，[稳定性框架](https://arxiv.org/abs/2609.10860) | 只标“实质推进”：神经网络近似剖面、样条认证与条件性稳定性框架。9 月 24 日修订版仍称证据，不能标为完整爆破证明。 |

## 日期与审阅口径

Köthe 条目采用 9 月 7 日 arXiv 首次提交日；Gromov 采用 8 月 14 日；强 PR 采用作者授权发布的 9 月 9 日；Euler 采用 NYU 明确记录的 9 月 7 日宣布日（报道发表于 9 月 14 日）；IPM 采用 9 月 15 日；PINN 采用 9 月 9 日首稿日并注明修订。

Smale 仓库披露运行在 2026 年 9 月；本次尚未核实首次公开具体日。临界渗流使用保留的历史源码，但未把 Git 提交时间当作公开时间。这两张卡片明确采用 10 月 7 日“本次核对日”，不参与首次发现优先权判断。它们的日级公开时间仍需后续补核。

所有新条目证据级别为“机构或作者发布”。七项证明相关发布统一先标“待审阅”，以免将作者报告机器检查等同于本站独立核验或领域接受；PINN 标“实质推进”。不同来源所称 Lean 通过仅支持其精确陈述，不能替代对陈述是否对应经典问题的审阅。

## 去重与未计入

- OpenAI 10 月 6 日手稿集合的代表家族，以及网站已有 Fermat / Poincaré 形式化、3SUM / min-plus / APSP 等，不重复新增。
- Köthe 和 Smale 虽同属 Epoch AI 自主评估，研究问题不同，分别记录；三份流体工作中 Euler 与 Boussinesq 在同卡归组，IPM 单列并保留不同方程与外力条件。
- 对研究模型的基准成绩、代理投机行为实验，不作为新的数学证明。
- 仅有二手汇总、模型归属不明且缺乏可核对产物的候选，没有直接据此标为“已解决”。

本轮结果是有来源的代表性查漏，不保证覆盖窗口内全部预印本或 OpenAI 372 个结果家族。

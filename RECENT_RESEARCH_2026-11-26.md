# 2026-11-26：光锥量子引力与跨领域研究更新

核对日期：2026-11-26（北京时间）。本轮新增十条：物理 1、数学 2、算法 6、生物 1。主要补入 11 月 24—25 日新材料，并查漏一项 11 月 6 日首次公开、23 日官方介绍的量子程序研究。日期沿用各原始来源的发布日；不是把本轮核对日当作发现日。

本页只依据下列论文、作者仓库与核验机构的原始材料。手稿声明、公开形式化、外部机检和湿实验分别标注；本站未重建这些研究的 Lean 工程或复做物理、生物实验。

## 物理：截图对应的光锥量子引力方案

[Venkatesa Chandrasekaran 的 arXiv:2611.34924](https://arxiv.org/abs/2611.34924) 与截图标题、作者一致。稿面为 11 月 23 日，arXiv 首投为 25 日 18:58 UTC，即北京时间 26 日凌晨；事件日期采用 arXiv 标示的 25 日。

[正文](https://arxiv.org/html/2611.34924v1)从相交光锥上的约束约化出发，为四维真空引力构造非微扰代数与路径积分，报告有限振幅、有界因果菱形的有限维状态空间、黑洞面积熵及一圈半经典极限。致谢披露：若干计算和证明来自与 GPT-6 Astra 数月协作，约使用 4 亿 tokens，但未逐项说明 AI 分工。

以“待审阅 / 机构或作者发布”归物理界。复现已知黑洞熵及低能结果属于内部一致性检查；本次未找到足以将新构造标为外部核验通过的材料。四维部分是**真空引力**，不同起始态是否给出等价表示仍留待研究。不能将它写成已获公认的完整量子引力理论。

## 数学与算法：Cogentic 六篇新手稿

[Google Research 原始目录](https://github.com/google-research/google-research/tree/master/cogentic_research_papers)按 11 月 25 日列出六篇。各篇 README 报告由 Gemini 4 驱动的 Cogentic 在初始提示后无人干预地产出，并称完整 Lean 已完成、将在后续提交发布。**核对时公开说明仍是待发布，故六张卡片均为“待审阅 / 机构或作者发布”**，不依据这句话标成已公开机检。

下表标题链接到各篇原始说明与 PDF 入口；算法界五条、数学界一条。六篇中的随机分解与确定性分解分别记录，避免混用不同保证。

| 手稿 | 作者声明的推进 | 收录边界 |
| --- | --- | --- |
| [无条件整数分解](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/integer_factorization/README.md) | 经典零错误 Las Vegas 算法，最坏期望时间 L_N[1/3,105]，完整分解任意 N。 | 输入是二进制整数；仍非位长的多项式时间。理论保证不等于实际破解 RSA。 |
| [确定性分解及二次非剩余](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/deterministic_factoring_l34/README.md) | 在 O(exp(3(ln N)^(3/4))) 位操作内找到合数的非平凡因子；另给无条件非剩余构造。 | 主定理的直接输出是一个因子；与随机 L_N[1/3] 的速度和保证不同。 |
| [固定特征离散对数](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/discrete_logarithm/README.md) | 对固定 p 的 F_(p^n)，达到 (pn)^(o(log n)) 最坏期望位复杂度。 | 不可扩写为任意大素数域或椭圆曲线离散对数的同等结果。 |
| [1/5 近似 Nash 均衡](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/bimatrix_nash_equilibrium/README.md) | 对 [0,1] 有理收益双矩阵博弈，多项式时间输出最大单方收益增量 ≤1/5 的混合策略。 | “Exact”修饰达到误差端点，非精确均衡；也非任意误差趋零的 PTAS。 |
| [log-rank 平方根障碍](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/logrank_conjecture/README.md) | 将确定性通信复杂度上界推进至 O(r^(1/2−0.000005))，r 为布尔矩阵的实数秩。 | 尚未达到猜想的 poly(log r)，不能称完全解决 log-rank 猜想。 |
| [线性密度边重构](https://github.com/google-research/google-research/blob/master/cogentic_research_papers/edge_reconstruction/README.md) | 简单图 m≥1000n 时可从删边子图多重集唯一重构；最小度 ≥2000 为推论。 | 是边重构的指定密度范围；不是完整边重构或顶点重构猜想。 |

## 数学：RH／Dirichlet GRH 较短证明的新核验

[lsernau/grh-lean](https://github.com/lsernau/grh-lean)基于此前 Alpöge／Claude 证明，与 Anthropic 同事和 Claude 协作产生约 30 万行可读版及 7.6 万行紧凑版。仓库明确仍无人通读，且没有配套论文；本条记录缩简进展，不重复计算成一项新的独立猜想解决。

[Andrew Sutherland 的 MIT 核验页](https://math.mit.edu/~drew/shortgrh/)截至 26 日 02:50 UTC 已完成 commit `72fead10` 两版的检查，覆盖原先五个 RH／Dirichlet L 函数命题，包括编译、公理、命题比较和多内核检查。紧凑版 paranoid 全链在两台机器通过，可读版在较大机器通过；较小机器的同项检查因内存需求中止。按已有外部机检标“形式化 / 已核验”，不扩写为所有 L 函数的 GRH，也不等同于数学家已通读。

原 RH 卡片补充这次后续进展与核验链接，保留原日期和稳定 ID。

## 算法：有形式化规格的量子程序优化

[原始论文 arXiv:2611.09822](https://arxiv.org/abs/2611.09822)首投为 11 月 6 日，16 日修订，[官方介绍](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/)发布于 23 日。卡片采用首投日期。Gemini 4 团队在 Lean 程序库中搜索并验证算法，报告聚变、光化学和药物代谢模拟的显著资源改善；[代码、规格与证明库](https://github.com/google-deepmind/formal-quantum-computation)已公开。

归算法界并标“形式化 / 机构或作者发布”。成本改善是对特定量子电路基线的估算；未在硬件上完成对应科学模拟，也不能由特定 Grover 实现的加速推导一般搜索的渐近下界改变。本站未重建证明库。

## 生物：通用模型骨架设计走入湿实验

[OpenAI 11 月 24 日研究说明](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)及其链接的[预印本](https://cdn.openai.com/pdf/gpt-6-a-universal-foundation-model-for-protein-biology.pdf)报告，Onava 测试了 322 个基于预发布 GPT-6.2 骨架设计的小蛋白，35 个显示目标结合，五个靶点均有命中。序列由 SolubleMPNN 提供，候选筛选也借助专用模型。

标“实质推进 / 机构或作者发布”。这是有实验信号的设计流程；并未展示无专用模型辅助的端到端零样本设计。新骨架、已有骨架序列重设计、抗体重设计与内部模型计算评测不能合并成一个成功率；结合信号也不等于生物功能或治疗效果已验证。

## 网站同步与去重

种子版本 19：150 → 160 条，新增条目通过稳定 ID 增量补入。原 RH 卡片的后续说明仅迁移未编辑、仍匹配旧快照的种子。已有本地修改、自建条目和删除状态保留；首页与脚本缓存标记同步更新。

上轮的 OpenAI VP ≠ VNP 及九篇手稿继续保留，[官方 history](https://github.com/openai/math/blob/main/history.md)核对时最新批次仍为 11 月 24 日，本轮不重复添加。没有为领域数量对齐而补入未经来源支持的竞赛成绩。

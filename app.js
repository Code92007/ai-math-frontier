const STATUS = {
  solved: "已解决",
  progress: "实质推进",
  formalized: "形式化",
  benchmark: "基准跨越",
  community: "社区复现",
  review: "待审阅",
};

const DOMAIN = { math: "数学界", algorithms: "算法界", cp: "算法竞赛界", physics: "物理界", biology: "生物界" };
const EVIDENCE = {
  verified: "已核验 / 可机检",
  reported: "机构或作者发布",
  community: "社区整理 / 复现",
};

const SEED_VERSION = 14;
const SEED_EVENTS = [
  {
    id: "math-2026-gemini-aletheia",
    domain: "math",
    date: "2026-02-11",
    title: "Gemini 研究代理走出奥赛题，开始处理开放问题",
    status: "progress",
    evidenceLevel: "reported",
    actor: "Google DeepMind",
    model: "Gemini Deep Think / Aletheia",
    summary: "Aletheia 在约 700 个 Erdős 开放问题上进行半自主评估，Google DeepMind 报告其自主解决了 4 个开放问题，并产出一篇无人类干预生成的算术几何研究论文。",
    impact: "公开叙事从“达到 IMO 金牌水平”转向“能否产生可发表的研究结果”，研究型代理开始成为独立类别。",
    before: "竞赛级证明",
    after: "开放问题研究",
    featured: false,
    sources: [
      { title: "Accelerating Mathematical and Scientific Discovery with Gemini Deep Think", url: "https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/", type: "官方发布" },
    ],
  },
  {
    id: "math-2026-first-proof",
    domain: "math",
    date: "2026-02-14",
    title: "First Proof：模型提交 10 份研究级证明尝试",
    status: "review",
    evidenceLevel: "reported",
    actor: "OpenAI / First Proof",
    model: "OpenAI 内部模型",
    summary: "OpenAI 在 First Proof 的 10 个研究级问题上提交证明尝试；依据当时专家反馈，至少 5 份被判断为有较高概率正确，另有若干仍在审查。",
    impact: "它暴露了研究数学的真正瓶颈：不再只是生成候选答案，而是如何建立可复核、可持续的专家审查流程。",
    before: "短答案基准",
    after: "端到端研究证明",
    featured: false,
    sources: [
      { title: "Our First Proof submissions", url: "https://openai.com/index/first-proof-submissions/", type: "官方发布" },
    ],
  },
  {
    id: "math-2026-unit-distance",
    domain: "math",
    date: "2026-05-20",
    title: "80 年的 Erdős 单位距离猜想被 AI 反驳",
    status: "solved",
    evidenceLevel: "verified",
    actor: "OpenAI / 外部数学家",
    model: "OpenAI 未发布通用推理模型",
    summary: "一个通用推理模型构造出无限族例子，给出多项式级改进，推翻平面单位距离问题中延续近 80 年的“方格构造本质最优”猜想。OpenAI 表示证明已由外部数学家检查。",
    impact: "这是从解决小型开放题到攻克子领域核心问题的标志性跨越，方法还把代数数论意外引入了初等离散几何。",
    before: "1946 年提出",
    after: "构造性反例",
    featured: true,
    sources: [
      { title: "An OpenAI model has disproved a central conjecture in discrete geometry", url: "https://openai.com/index/model-disproves-discrete-geometry-conjecture/", type: "官方发布 + 证明" },
    ],
  },
  {
    id: "math-2026-jacobian-counterexample",
    domain: "math",
    date: "2026-07-20",
    title: "Claude Fable 5 给出 Jacobian 猜想的三维反例",
    status: "solved",
    evidenceLevel: "verified",
    actor: "Levent Alpöge / Anthropic / 独立验证者",
    model: "Claude Fable 5",
    summary: "Claude Fable 5 找到一个显式多项式映射 F: C³ → C³：它的 Jacobian 行列式恒为 -2，却把三个不同点映到同一点，因此不可逆。这反驳了三维 Jacobian 猜想，并可通过添加恒等坐标推广到所有 n ≥ 3；二维情形仍然开放。",
    impact: "这一结果终结了 Keller 于 1939 年提出的猜想在三维及以上的版本，也把 AI 生成反例从实验性线索推进到可由精确算术独立复核的数学成果。",
    before: "1939 年提出，n ≥ 3 未决",
    after: "C³ 显式反例；n = 2 仍开放",
    featured: true,
    sources: [
      { title: "Discovering cryptographic weaknesses with Claude", url: "https://www.anthropic.com/research/discovering-cryptographic-weaknesses", type: "Anthropic 官方回顾" },
      { title: "Counterexamples to the Jacobian conjecture in dimensions greater than two", url: "https://arxiv.org/abs/2608.00222", type: "后续论文" },
      { title: "The Alpöge-Fable counterexample to the Jacobian conjecture", url: "https://zenodo.org/records/21461572", type: "独立精确算术核验" },
    ],
  },
  {
    id: "math-2026-claude-cryptanalysis",
    domain: "algorithms",
    date: "2026-07-28",
    title: "Claude 提出 HAWK 与约化轮 AES 的新攻击",
    status: "progress",
    evidenceLevel: "verified",
    actor: "Anthropic",
    model: "Claude Mythos Preview",
    summary: "Claude 在长程多代理研究中提出了削弱后量子签名方案 HAWK 的攻击，以及针对约化轮 AES 的新方法。Anthropic 研究人员随后投入数百小时验证并整理论文。",
    impact: "AI 的数学发现开始直接进入密码分析：候选结果的生产速度超过了人类验证、分诊与发表流程。",
    before: "既有最佳攻击",
    after: "更强密码分析界",
    featured: false,
    sources: [
      { title: "Discovering cryptographic weaknesses with Claude", url: "https://www.anthropic.com/research/discovering-cryptographic-weaknesses", type: "官方研究" },
    ],
  },
  {
    id: "math-2026-ten-advances",
    domain: "math",
    date: "2026-08-01",
    title: "Astra 一次公布 10 项数学与理论计算机成果",
    status: "progress",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "Astra 内部版本",
    summary: "结果横跨高维球堆积、编码理论、非 sofic 群、Connes 刚性猜想、算术电路复杂度、量子平行重复、格密码与极值组合等方向；部分解决问题，部分给出实质推进。",
    impact: "意义不只在单个难题，而在同一通用系统短期内跨多个专业领域持续产出，并为每项论证生成 Lean 证书。",
    before: "单点突破",
    after: "跨领域批量产出",
    featured: true,
    sources: [
      { title: "Ten advances in mathematics and theoretical computer science", url: "https://openai.com/index/ten-advances-in-mathematics/", type: "官方发布 + 论文" },
    ],
  },
  {
    id: "math-2026-riemann-bound",
    domain: "math",
    date: "2026-08-10",
    title: "Claude 将黎曼猜想相关无条件下界从 41.6% 推到 67.2%",
    status: "progress",
    evidenceLevel: "verified",
    actor: "Anthropic / 专家数学家",
    model: "Claude 未发布研究版本",
    summary: "Claude 没有证明黎曼猜想，但在尝试中把位于临界线上的非平凡零点比例下界从 41.6% 提升至 67.2%。两位 Anthropic 数学家检查了论文，并给出 Lean 形式化。",
    impact: "它展示了“失败的宏大目标”也可能副产出真正的新数学，长程多代理搜索与自动反驳开始形成研究方法。",
    before: "41.6%",
    after: "67.2%",
    featured: true,
    sources: [
      { title: "Learning more about Claude's mathematical capabilities", url: "https://www.anthropic.com/research/riemann-zeta", type: "官方研究 + Lean" },
    ],
  },
  {
    id: "math-2026-astra-launch",
    domain: "math",
    date: "2026-09-03",
    title: "GPT-6 Astra 将 FrontierMath Tier 4 推至 97.6%",
    status: "benchmark",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "GPT-6 Astra",
    summary: "OpenAI 发布 GPT-6 Astra，并报告其在 FrontierMath Tier 4 v2 上取得 97.6%。官方同时披露 Astra 已用于开放问题研究，而不只是在静态测试集上得分。",
    impact: "研究级数学基准接近饱和，评价重心被迫从“会不会做”转向新颖性、可验证性与真实开放问题。",
    before: "GPT-5.6 Sol：83.0%",
    after: "GPT-6 Astra：97.6%",
    featured: false,
    sources: [
      { title: "GPT-6 Astra: A new generation of intelligence", url: "https://openai.com/index/gpt-6-astra/", type: "官方发布" },
    ],
  },
  {
    id: "math-2026-flt-formalization",
    domain: "math",
    date: "2026-09-04",
    title: "Claude 在 11 天内完成费马大定理的完整形式化",
    status: "formalized",
    evidenceLevel: "verified",
    actor: "Anthropic / Prove2Me",
    model: "约等于 Claude Fable 5.1 的内部模型",
    summary: "多代理系统生成约 1300 万行 Lean，证明 30,300 个定理，并由比较器确认根命题与 Mathlib 中的费马大定理陈述一致。这不是新的数学证明，而是对既有证明的机器可检验形式化。",
    impact: "长期被认为需要多年协作的形式化工程被压缩到两周内，AI 生成证明的验证瓶颈首次出现可规模化路径。",
    before: "预计多年",
    after: "11 天",
    featured: true,
    sources: [
      { title: "Formalizing Fermat's Last Theorem", url: "https://www.anthropic.com/research/formalizing-fermats-last-theorem", type: "官方研究 + Lean" },
    ],
  },
  {
    id: "math-2026-navier-stokes",
    domain: "math",
    date: "2026-09-08",
    title: "OpenAI 宣布给出 Navier–Stokes 千禧年问题候选解",
    status: "review",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "强于 GPT-6 Astra 的内部系统；Astra 参与形式化",
    summary: "OpenAI 发布分析证明与 Lean 形式化，主张构造出由光滑初值在有限时间形成奇点的解。约 10,000 个并发代理参与，Astra 完成后续形式化验证。",
    impact: "如果经独立审阅成立，这是 AI 参与解决千禧年难题的历史节点；在社区完成长期核验前，本档案保留“机构声明 / 待审阅”标记。",
    before: "约 90 年未决",
    after: "候选解 + Lean",
    featured: true,
    sources: [
      { title: "On the Navier–Stokes Millennium Prize Problem", url: "https://openai.com/index/navier-stokes-solution/", type: "官方发布 + 论文 + Lean" },
    ],
  },
  {
    id: "cp-2023-gpt4-codeforces",
    domain: "cp",
    date: "2023-03-14",
    title: "GPT-4 在 Codeforces 仍只处于后 5%",
    status: "benchmark",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "GPT-4",
    summary: "GPT-4 技术报告给出的模拟考试结果显示，其 Codeforces 排名约处于参赛者后 5%。这构成后来能力跃迁最直观的低基线。",
    impact: "三年内从几乎无法参与高水平竞赛，到批量改进人类标准解，变化的速度本身就是里程碑。",
    before: "人类高手主导",
    after: "后 5% 基线",
    featured: false,
    sources: [
      { title: "GPT-4 Technical Report", url: "https://openai.com/research/gpt-4", type: "官方报告" },
    ],
  },
  {
    id: "cp-2024-o1-codeforces",
    domain: "cp",
    date: "2024-09-12",
    title: "o1 跃升至 Codeforces 89 百分位",
    status: "benchmark",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "OpenAI o1",
    summary: "OpenAI 报告 o1 在模拟 Codeforces 竞赛中达到 89 百分位，推理时计算首次把通用模型送入竞赛高手区间。",
    impact: "能力跃迁不再主要依赖记忆代码模板，而来自更长的推理、检验与修正过程。",
    before: "GPT-4：后 5%",
    after: "o1：89 百分位",
    featured: false,
    sources: [
      { title: "Learning to reason with LLMs", url: "https://openai.com/index/learning-to-reason-with-llms/", type: "官方发布" },
    ],
  },
  {
    id: "cp-2025-gemini-icpc",
    domain: "cp",
    date: "2025-09-17",
    title: "Gemini 在 ICPC 世界总决赛达到金牌级",
    status: "benchmark",
    evidenceLevel: "verified",
    actor: "Google DeepMind / ICPC",
    model: "Gemini 2.5 Deep Think",
    summary: "在赛事组织方监督下，Gemini 于同样 5 小时限制中解出 12 题中的 10 题；若与 139 支人类队伍同榜比较，相当于总排名第 2。",
    impact: "模型第一次在现场、同题、同时间限制的顶级大学生编程竞赛中达到金牌水平，并独立解出一道无人队伍通过的题。",
    before: "顶尖人类队伍",
    after: "10 / 12，等效第 2",
    featured: true,
    sources: [
      { title: "Gemini achieves gold-medal level at the ICPC World Finals", url: "https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/", type: "官方发布 + 赛事监督" },
    ],
  },
  {
    id: "cp-2026-qoj-list",
    domain: "cp",
    date: "2026-09-12",
    title: "QOJ 建立“被 LLM 超越的题目”公开清单",
    status: "community",
    evidenceLevel: "community",
    actor: "QOJ / Qingyu / 竞赛社区",
    model: "主要为 GPT-6 Pro",
    summary: "QOJ 汇总 37 道模型找到显著快于命题人标准解的题目，覆盖 ICPC、IOI、NOI、CCPC、Open Cup 与 Universal Cup；部分条目还指出原题解错误。",
    impact: "衡量标准从“模型能否 AC”升级为“模型能否提出比出题人更好的算法”，社区开始建设持续更新的公开证据库。",
    before: "单次比赛得分",
    after: "37 项复杂度改进",
    featured: true,
    sources: [
      { title: "GPT 話你知：Tasks surpassed by LLMs", url: "https://qoj.ac/blog/qingyu/blog/4412", type: "社区清单" },
      { title: "用户提供的知乎参考长文", url: "https://zhuanlan.zhihu.com/p/2084065887942976363", type: "社区观察" },
    ],
  },
  {
    id: "cp-2026-luogu-list",
    domain: "cp",
    date: "2026-09-12",
    title: "洛谷社区整理 13 道国内竞赛“爆标”案例",
    status: "community",
    evidenceLevel: "community",
    actor: "洛谷社区 / chen_zhe",
    model: "GPT 系列",
    summary: "清单覆盖 BJWC、SDOI、CSP-S、NOIP、NOI 与省选，记录模型把多道题的指数或高次复杂度降到更低阶，并附公开做法链接。",
    impact: "AI 的影响从国际赛事基准进入中文竞赛日常：旧题解、数据范围和教学价值都需要重新审视。",
    before: "13 份原标准解",
    after: "13 项更优复杂度",
    featured: false,
    sources: [
      { title: "AI 爆题总结", url: "https://www.luogu.com.cn/discuss/1375198", type: "社区清单" },
    ],
  },
  {
    id: "cp-2026-rikka-lake",
    domain: "cp",
    date: "2026-09-12",
    title: "Rikka with Lake：从 O(n⁴) 降到 O(n)",
    status: "community",
    evidenceLevel: "community",
    actor: "QOJ 社区",
    model: "GPT-6 Pro",
    summary: "针对 XXI Open Cup 小米大奖赛题目，社区记录的模型解法把命题人 O(n⁴) 的标准复杂度降为线性 O(n)。",
    impact: "这不是常数优化，而是四次复杂度到线性的结构性重写，直观展示模型在发现隐藏性质上的能力。",
    before: "O(n⁴)",
    after: "O(n)",
    featured: true,
    sources: [
      { title: "QOJ 汇总与公开题解入口", url: "https://qoj.ac/blog/qingyu/blog/4412", type: "社区题解" },
    ],
  },
  {
    id: "cp-2026-sequence-transform",
    domain: "cp",
    date: "2026-09-12",
    title: "NOI 2025《序列变换》：从平方级到近线性",
    status: "community",
    evidenceLevel: "community",
    actor: "QOJ / 洛谷社区",
    model: "GPT-6 Pro",
    summary: "两份社区清单都记录了这道 NOI 题的复杂度改进：从 O(N²) 降至 O(N + log P)，成为模型重做高规格国家竞赛题的代表案例。",
    impact: "当模型能改写刚结束不久的顶级赛事标准解，题目难度、命题验收与赛后知识沉淀都会受到直接影响。",
    before: "O(N²)",
    after: "O(N + log P)",
    featured: false,
    sources: [
      { title: "QOJ：Tasks surpassed by LLMs", url: "https://qoj.ac/blog/qingyu/blog/4412", type: "社区题解" },
      { title: "洛谷：AI 爆题总结", url: "https://www.luogu.com.cn/discuss/1375198", type: "社区清单" },
    ],
  },
  {
    id: "cp-2026-quad-kingdoms",
    domain: "cp",
    date: "2026-09-12",
    title: "Quad Kingdoms Chess 2：O(nk⁴) 被压到 O(nk)",
    status: "community",
    evidenceLevel: "community",
    actor: "QOJ 社区",
    model: "GPT-6 Pro",
    summary: "模型为第二届 Universal Cup Finals 题目给出 O(nk) 解法，相比命题人 O(nk⁴) 的方案减少三个 k 的因子，并被清单标记为特别优美的改进。",
    impact: "模型不只是暴力搜索更快实现，而是在参数结构上找到了全新的算法表达。",
    before: "O(nk⁴)",
    after: "O(nk)",
    featured: false,
    sources: [
      { title: "QOJ 汇总与公开题解入口", url: "https://qoj.ac/blog/qingyu/blog/4412", type: "社区题解" },
    ],
  },
  {
    id: "math-2026-prime-gaps-186",
    domain: "math",
    date: "2026-09-03",
    title: "GPT-6 Astra 将有界素数间隙纪录推进到 186",
    status: "progress",
    evidenceLevel: "reported",
    actor: "OpenAI",
    model: "GPT-6 Astra",
    summary: "OpenAI 的预印本证明 lim inf(pₙ₊₁ - pₙ) ≤ 186，即存在无穷多对相邻素数的间隔不超过 186。这推进了与孪生素数猜想相关的无条件纪录，但没有证明孪生素数猜想；后者要求把 186 降到 2。",
    impact: "此前的 246 纪录保持约 12 年。新证明把等分布估计、Selberg 筛与数值优化结合起来，并附带 Lean 形式化和 Python/FLINT 数值证书，展示了 AI 参与前沿解析数论的完整工作流。",
    before: "246（保持约 12 年）",
    after: "186（孪生素数目标为 2）",
    featured: true,
    sources: [
      { title: "GPT-6 Astra: A new generation of intelligence", url: "https://openai.com/index/gpt-6-astra/", type: "官方发布" },
      { title: "Improved short gaps between primes", url: "https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/short_gaps.pdf", type: "证明预印本" },
      { title: "Prime Gaps at Most 186", url: "https://github.com/openai/PrimeGaps186", type: "Lean + 数值证书" },
    ],
  },
  {
    "id": "math-2026-frontiermath-erdos",
    "domain": "math",
    "date": "2026-09-01",
    "title": "独立测评：Astra 在 68 道 Erdős 开放问题中解出 2 道",
    "status": "benchmark",
    "evidenceLevel": "verified",
    "actor": "Epoch AI",
    "model": "GPT-6 Astra 预发布版",
    "summary": "Epoch 的固定预算测评中，Astra 反驳 #74、证明 #126，获得 2/68（约 3%）。另在更大预算与不同配置的追加尝试中解决 #1、#548、#571；合计五题不是正式测评分数。",
    "impact": "开放问题开始有透明预算与 Lean 终检，研究能力可以独立复核。",
    "before": "其他四个受测模型：0%",
    "after": "固定测评 3%；追加尝试合计五题",
    "featured": false,
    "sources": [
      {
        "title": "Announcing FrontierMath Erdős",
        "url": "https://epoch.ai/latest/announcing-frontiermath-erdos",
        "type": "独立测评 + 公开方法"
      }
    ]
  },
  {
    "id": "math-2026-erdos-sos",
    "domain": "math",
    "date": "2026-09-15",
    "title": "Astra 找到 Erdős–Sós 猜想的简短计数证明",
    "status": "solved",
    "evidenceLevel": "verified",
    "actor": "Epoch AI / David R. Wood / Jay Cummings",
    "model": "GPT-6 Astra",
    "summary": "David R. Wood 发布证明讲解：平均度大于 t−2 的图包含每一棵 t 顶点树。Astra 预发布版在 8 月的追加搜索中发现证明，9 月公开传播，随后 Jay Cummings 给出图解。公开 Lean 仓库通过 Comparator；其对照端点在一个奇偶边界上略弱于经典表述，内部计数引理给出锐界。",
    "impact": "从 1962 年的极值图论名题到可读证明与机器产物，数学家继续把模型生成的论证整理成人类可理解的结构。",
    "before": "1962 年提出的一般情形",
    "after": "计数证明 + Lean + 人类讲解",
    "featured": true,
    "sources": [
      {
        "title": "The Erdős–Sós Theorem",
        "url": "https://arxiv.org/abs/2609.17877",
        "type": "证明预印本"
      },
      {
        "title": "Erdős #548：Lean 证明与端点范围说明",
        "url": "https://github.com/tadamcz/erdos548",
        "type": "Lean + Comparator"
      },
      {
        "title": "Jay Cummings：图解证明",
        "url": "https://arxiv.org/abs/2609.32011",
        "type": "证明预印本"
      }
    ]
  },
  {
    "id": "math-2026-amp-low-degree",
    "domain": "algorithms",
    "date": "2026-09-07",
    "title": "Astra 参与解决增长次数 AMP 等价问题的 Bernoulli 特例",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Zhangsong Li",
    "model": "GPT-6 Astra",
    "summary": "Zhangsong Li 的预印本给出 Gaussian planted-submatrix 模型中增长次数多项式估计的锐下界：固定 λ>0、ρ∈(0,1)，次数 D(n)=o(n^(1/60))。作者称多数论证由 Astra 生成；结论限定在 Bernoulli 秩一模型及该次数范围。",
    "impact": "AI 开始参与统计计算复杂性中的研究证明；人类的战略选择和作者责任仍明确保留。",
    "before": "已有常数次数等价结果",
    "after": "受限增长次数下的精确低次数 MMSE",
    "featured": false,
    "sources": [
      {
        "title": "Almost Sharp Equivalence between Approximate Message Passing and Low-Degree Polynomials",
        "url": "https://arxiv.org/abs/2609.06988",
        "type": "证明预印本"
      }
    ]
  },
  {
    "id": "math-2026-planar-universal-points",
    "domain": "math",
    "date": "2026-09-10",
    "title": "平面图通用点集从二次规模推进到几乎线性",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Taylor Gordon",
    "model": "GPT-6 Astra",
    "summary": "Taylor Gordon 构造 n^(1+o(1)) 大小的点集，使每个 n 顶点平面图都能在其上作无交叉直线绘制，改进此前二次上界。论文明确称 Astra 协助开发构造和证明；所链接的 Lean 产物覆盖早期构造。",
    "impact": "计算几何中的长期规模界被推进，同时留下可检查的排列超模式构造。",
    "before": "二次规模上界",
    "after": "n^(1+o(1))",
    "featured": true,
    "sources": [
      {
        "title": "Almost Linear Universal Point Sets for Planar Graphs",
        "url": "https://arxiv.org/abs/2609.10916",
        "type": "证明预印本"
      }
    ]
  },
  {
    "id": "math-2026-erdos-sos-digraphs",
    "domain": "math",
    "date": "2026-09-10",
    "title": "Astra 给出 Erdős–Sós 的 Eulerian 有向图版本",
    "status": "solved",
    "evidenceLevel": "reported",
    "actor": "Dhruv Mubayi / Jacques Verstraete",
    "model": "GPT-6 Astra",
    "summary": "Dhruv Mubayi 与 Jacques Verstraete 报告：n 顶点 Eulerian 有向图若有多于 (t−1)n 条弧，就包含每一种 t 边定向树，且界对每棵树都锐。图无自环、无重复弧，但允许反向弧。作者明确将证明归于 Astra。",
    "impact": "连有向路径此前也没有这类锐界；新结果把树嵌入推进到受限有向图类。",
    "before": "缺少相应锐界",
    "after": "Eulerian 有向图中的锐树嵌入界",
    "featured": true,
    "sources": [
      {
        "title": "Erdős–Sós for digraphs",
        "url": "https://arxiv.org/abs/2609.10987",
        "type": "证明预印本"
      }
    ]
  },
  {
    "id": "math-2026-liouville-goldbach",
    "domain": "math",
    "date": "2026-09-16",
    "title": "哥德巴赫的 Liouville 类比获得无条件证明",
    "status": "solved",
    "evidenceLevel": "verified",
    "actor": "Captain Sude / 独立审计者",
    "model": "GPT-6 Astra",
    "summary": "公开项目证明每个偶数 N>2 都可写成 a+b，a、b 为正整数且 λ(a)=λ(b)=−1，即两者含有奇数个质因子（计重数）。发布者 Captain Sude 将证明发现归于 Astra；Lean 产物已有独立重编译和公理审计，模型与人类的详细贡献轨迹未完整公开。",
    "impact": "去掉既有结果的 GRH 与“充分大”限制。经典哥德巴赫要求两个加数均为素数，仍然开放。",
    "before": "GRH + 充分大偶数",
    "after": "无条件覆盖所有偶数 N>2",
    "featured": true,
    "sources": [
      {
        "title": "A Goldbach theorem for the Liouville function",
        "url": "https://github.com/CaptainSude/Liouville-Goldbach",
        "type": "论文 + Lean"
      },
      {
        "title": "Independent Audit Bundle",
        "url": "https://github.com/sunnyspot114514/Liouville-Goldbach-audit",
        "type": "独立技术复现"
      },
      {
        "title": "2024 年前置结果",
        "url": "https://arxiv.org/abs/2412.17199",
        "type": "证明预印本"
      }
    ]
  },
  {
    "id": "math-2026-poincare-formalization",
    "domain": "math",
    "date": "2026-09-27",
    "title": "人类与 AI 完成庞加莱猜想的 Lean 形式化",
    "status": "formalized",
    "evidenceLevel": "verified",
    "actor": "Ziyang Qin / Yuan Liao / Ayush Khaitan / Bennett Chow",
    "model": "自动化与 AI 辅助（论文未细分模型贡献）",
    "summary": "Qin、Liao、Khaitan、Chow 发布光滑三维庞加莱定理及 Moise 光滑化的形式化，由此得到拓扑版本。论文固定 v0.1.3 源码，报告端点匹配 Mathlib 陈述且公理闭包仅含标准三公理。自动化辅助用于证明和文字，作者承担数学责任。",
    "impact": "把 Hamilton–Perelman 已有证明及大量前置几何分析转成可机检产物。媒体报道约 470 万行；代码行数是工程规模，结论应依据定理端点、定义与公理审计判断。",
    "before": "已有人类证明，形式化工程庞大",
    "after": "光滑与拓扑版本的 Lean 端点",
    "featured": true,
    "sources": [
      {
        "title": "A Lean Formalization of the Hamilton–Perelman Proof",
        "url": "https://arxiv.org/abs/2609.33842",
        "type": "证明预印本"
      },
      {
        "title": "冻结的 v0.1.3 代码",
        "url": "https://github.com/qinz1yang/differential-geometry/tree/7a48598d35109aa99d1cc678e2724c213cdf4ff3",
        "type": "形式化源码"
      },
      {
        "title": "470 万行报道（用户提供线索）",
        "url": "https://zhuanlan.zhihu.com/p/2087931088555488096",
        "type": "媒体报道"
      }
    ]
  },
  {
    "id": "math-2026-openai-hundred-problems",
    "domain": "math",
    "date": "2026-09-21",
    "title": "OpenAI 声称内部模型已解决 100 多项长期开放问题",
    "status": "review",
    "evidenceLevel": "reported",
    "actor": "OpenAI",
    "model": "未公开内部模型（非公开版 GPT-6 Astra）",
    "summary": "OpenAI 公告称，8 月 28 日开始训练的新内部模型在 NS 成果之外已解决横跨数学多数领域的 100 多项长期开放问题，并介绍独立数学与 AI 顾问组。公告未给出完整题单和逐题证明，因此此处记录汇总声明，等待公开材料与独立审阅。",
    "impact": "候选成果规模上升，使审查、数学意义评估和成果公开成为研究流程的核心。内部模型的成果不能直接归到公开 GPT-6 Astra。",
    "before": "单项公开成果",
    "after": "100+ 项机构声明；完整清单未公布",
    "featured": true,
    "sources": [
      {
        "title": "Advisory Group on Mathematics and Artificial Intelligence",
        "url": "https://openai.com/index/advisory-group-on-mathematics-and-ai/",
        "type": "官方公告"
      }
    ]
  },
  {
    "id": "physics-2026-nine-loop-amplitude",
    "domain": "physics",
    "date": "2026-09-25",
    "title": "Claude 完成 N=4 超杨–米尔斯九圈六点散射振幅计算",
    "status": "progress",
    "evidenceLevel": "verified",
    "actor": "Anthropic / Liam Fitzpatrick / Siddharth Mishra-Sharma / Lance Dixon",
    "model": "Claude Fable 5.1 / Claude Science",
    "summary": "Anthropic 公布 Claude Fable 5.1 在 Claude Science 中计算平面 N=4 超杨–米尔斯理论的九圈六粒子 MHV 振幅，采用直接 bootstrap 与 form-factor 路线，Lance Dixon 检查结果。公开数据提供 symbol 与函数；函数层结果仅计算一次，附有额外假设。",
    "impact": "将长期复杂计算推进一个圈阶，展示通用代理组织符号运算与算力完成前沿理论物理工作。该结论限定于平面 N=4 理论和 MHV 六点振幅。",
    "before": "八圈六点振幅",
    "after": "九圈 MHV 六点振幅",
    "featured": true,
    "sources": [
      {
        "title": "Yes, Claude can do Nine Loops",
        "url": "https://www.anthropic.com/research/yes-claude-can-do-nine-loops",
        "type": "官方研究 + 专家回顾"
      },
      {
        "title": "Cosmic9：结果数据及验证范围",
        "url": "https://smsharma.io/cosmic-nine-loops/",
        "type": "计算产物与检查记录"
      }
    ]
  },
  {
    "id": "biology-2026-art-enzyme",
    "domain": "biology",
    "date": "2026-09-23",
    "title": "Claude 发现具有 CRISPR 式重复阵列的 ART 酶系统",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Anthropic 生命科学团队",
    "model": "Claude 多代理（官方未披露具体版本）",
    "summary": "Anthropic 报告约 950 个代理在 21 小时内使用 2.1 亿 token 搜索 DNA 数据，识别噬菌体中与重复序列阵列相关的逆转录酶系统 ART。人类进行实验，初步观察到阵列被表达为不同短 RNA；其主要功能及可编程性尚未确定。",
    "impact": "从序列挖掘和异常发现到实验研究，AI 提出具有新颖性的生物学候选。底层 RT 已见于此前研究，新的发现是系统的关联阵列及辅助蛋白特征。",
    "before": "未表征的基因组关联特征",
    "after": "ART 系统识别 + 初步实验",
    "featured": true,
    "sources": [
      {
        "title": "Claude discovers a novel enzyme system with CRISPR-like repeats",
        "url": "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system",
        "type": "官方研究 + 技术报告入口"
      }
    ]
  },
  {
    "id": "cp-2026-truly-subquadratic-3sum",
    "domain": "algorithms",
    "date": "2026-10-05",
    "title": "Claude 发现真正次二次 3SUM 算法",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Josh Alman / Virginia Vassilevska Williams / Anthropic",
    "model": "Claude 内部研究模型（未披露具体版本）",
    "summary": "多项式大小整数输入获得确定性 O(n^1.9992) 算法；实数版本为 Las Vegas 期望 O(n^1.998)。核心发现归于 Claude，人类作者随后整理、加强和扩展。",
    "impact": "固定常数的指数改进反驳 3SUM 假设；主结果附 Lean 形式化。仍为预印本，渐近突破不代表已有实用竞赛实现。",
    "before": "二次界仅削去次多项式因子",
    "after": "整数 O(n^1.9992)；实数期望 O(n^1.998)",
    "featured": true,
    "sources": [
      {
        "title": "Truly Subquadratic 3SUM and Truly Subcubic APSP",
        "url": "https://arxiv.org/abs/2610.06783",
        "type": "作者预印本"
      },
      {
        "title": "主定理 Lean 形式化与核验范围",
        "url": "https://github.com/anthropics/formal-math/tree/main/3sum-apsp",
        "type": "形式化源码"
      }
    ]
  },
  {
    "id": "cp-2026-minplus-convolution",
    "domain": "algorithms",
    "date": "2026-10-05",
    "title": "min-plus 卷积获得真正次二次复杂度",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Josh Alman / Virginia Vassilevska Williams / Anthropic",
    "model": "Claude 内部研究模型（未披露具体版本）",
    "summary": "同篇论文经已有归约，将一般整数序列的 min-plus 卷积推进到 O(n^(2−δ))，δ>0 为常数，并带来背包等问题的加速。",
    "impact": "卷积假设被反驳，区别于单调或近凸特例；矩阵乘法的指数不能直接套给卷积。公开形式化覆盖主定理，卷积推论的完整形式化范围须单独核对。",
    "before": "接近二次的上界",
    "after": "O(n^(2−δ))，固定 δ>0",
    "featured": true,
    "sources": [
      {
        "title": "Truly Subquadratic 3SUM and Truly Subcubic APSP",
        "url": "https://arxiv.org/abs/2610.06783",
        "type": "作者预印本"
      },
      {
        "title": "主定理 Lean 形式化与核验范围",
        "url": "https://github.com/anthropics/formal-math/tree/main/3sum-apsp",
        "type": "形式化源码"
      }
    ]
  },
  {
    "id": "cp-2026-truly-subcubic-apsp",
    "domain": "algorithms",
    "date": "2026-10-05",
    "title": "APSP 与 min-plus 矩阵乘法突破真正次三次界",
    "status": "progress",
    "evidenceLevel": "reported",
    "actor": "Josh Alman / Virginia Vassilevska Williams / Anthropic",
    "model": "Claude 内部研究模型（未披露具体版本）",
    "summary": "多项式有界整数权重获得确定性 O(n^2.9995) 算法；实数版本为 Las Vegas 期望 O(n^2.998)。",
    "impact": "薄矩阵稀疏输出算法经归约加速多个问题，反驳 APSP 假设；SETH 和 OV 假设不因此被推翻。",
    "before": "三次界仅削去次多项式因子",
    "after": "整数 O(n^2.9995)；实数期望 O(n^2.998)",
    "featured": true,
    "sources": [
      {
        "title": "Truly Subquadratic 3SUM and Truly Subcubic APSP",
        "url": "https://arxiv.org/abs/2610.06783",
        "type": "作者预印本"
      },
      {
        "title": "主定理 Lean 形式化与核验范围",
        "url": "https://github.com/anthropics/formal-math/tree/main/3sum-apsp",
        "type": "形式化源码"
      }
    ]
  },
{
  "id": "cp-2026-openai-ugc",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布 UGC 证明声明与近似困难性结果",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 102 族声称证明唯一博弈猜想：对固定 ε、δ∈(0,1/2)，将 3SAT 多项式时间归约到固定字母表的 Unique Games，区分价值至少 1−ε 与至多 δ 的实例。",
  "impact": "若成立，将重要近似困难性结论从条件性推进为无条件归约。仓库提供 UGC gap 归约的 Lean 范围说明；本次未独立编译或审计证明，按待审阅记录。",
  "before": "唯一博弈猜想（UGC）长期作为近似困难性结论的条件。",
  "after": "声称证明 UGC",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 2026-10-06 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Unique-Games-Theorem-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "成果目录与发布说明",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/102.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-logspace",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 声称证明 L = RL = BPL",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 103 族声称，将多项式时间、对数空间且具有单侧或双侧有界错误的随机判定机，编译为确定性对数空间判定机，并给出显式多项式时间界。",
  "impact": "结果涉及对数空间复杂性类，并非 P = BPP 的证明。当前目录未为该族列出 Lean 链接，本次只核对官方声明，尚未独立验证证明。",
  "before": "随机对数空间计算的一般去随机化是开放问题。",
  "after": "声称 L = RL = BPL",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 2026-10-06 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Exact-Derandomization-of-Logarithmic-Space-L-equals-RL-equals-BPL-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "成果目录与发布说明",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    }
  ]
},
{
  "id": "cp-2026-openai-matrix-nine-fourths",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 声称复数矩阵乘法指数 ω ≤ 2.25",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 107 族声称复数域上的矩阵乘法指数 ω≤9/4，即对每个 ε>0，可用 Oε(n^(9/4+ε)) 次算术运算完成方阵乘法。",
  "impact": "不能直接把 2.25 界推广到任意有限域或位复杂度，也不代表已有竞赛实用实现。Lean 范围说明包含复数域 9/4 界；本次未独立编译或审计。",
  "before": "降低一般矩阵乘法的渐近算术指数是长期研究目标。",
  "after": "复数域 ω ≤ 9/4（声明）",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 2026-10-06 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "成果目录与发布说明",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/107.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-dft",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 声称精确 DFT 突破 n log n 运算界",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 130 族声称对所有长度 n，确定性精确 DFT 可用 O(n(log n)^(1−δ)) 次运算，δ=10^−13。模型允许精确复数运算、不受限系数和给定单位根，并计入标量准备与对数长度索引。",
  "impact": "这是特定算术模型的渐近结果，不能直接等同于浮点 FFT、NTT 或位运算加速。Lean 范围仅覆盖无界长度子序列上的任意小归一化电路成本，不覆盖所有长度的显式幂次节省；未独立验证。",
  "before": "经典 FFT 在常见模型中使用 O(n log n) 次运算。",
  "after": "O(n(log n)^(1−10^−13))（声明）",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 2026-10-06 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/An-explicit-power-saving-for-the-exact-discrete-Fourier-transform-September-25-2026/main.pdf",
      "type": "预印本"
    },
    {
      "title": "成果目录与发布说明",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/130.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-subset-sum",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 声称最坏情形 Subset Sum 达到 O(2^0.49n)",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 138 族声称在多项式位长输入的 word-RAM 模型中，存在统一经典随机算法，以最坏情形 O(2^0.49n) 时间求解 Subset Sum；每次执行满足时间界，每个输入成功率至少 2/3。",
  "impact": "n 是输入整数个数，允许正整数重复，字长为 O(n+b)，b 为最大输入位长。若成立是指数常数改进；当前目录未为该族列出 Lean 链接，本次未独立验证证明。",
  "before": "经典折半搜索的主指数为 2^(n/2)；多项式因子改进不等于降低指数常数。",
  "after": "随机化 O(2^0.49n)（声明）",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 2026-10-06 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026/subset-sum.pdf",
      "type": "预印本"
    },
    {
      "title": "成果目录与发布说明",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    }
  ]
},
{
  "id": "math-2026-openai-collection",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 公开 722 份手稿、372 个结果家族",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "公开集合按 372 个家族组织 722 份手稿，同一家族可含主结果、伴随论证、推论或替代证明，因此不能等同于 722 个独立难题。",
  "impact": "官方披露约尝试 4,000 个问题，绝大多数成果采用同一流程，平均每项约相当于三小时 ChatGPT Pro 思考计算量。仓库明确各结果核验阶段不同，部分未形式化结果可能有问题；模型归属不推断为已发布型号。",
  "before": "汇总性成果预告",
  "after": "逐项手稿与部分证明产物公开",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 官方发布",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/",
      "type": "官方发布"
    },
    {
      "title": "仓库说明与生成流程",
      "url": "https://github.com/openai/math",
      "type": "官方仓库"
    }
  ]
},
{
  "id": "math-2026-openai-quasi-riemann",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布准黎曼假设：固定无零半平面证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 003 族。声称 ζ 与所有 Dirichlet L 函数在 Re(s)>7/8 无零（排除 s=1 的极点）。",
  "impact": "涉及素数分布的核心解析工具；未达到黎曼猜想所要求的临界线 1/2。Lean 范围覆盖 7/8 界，论文后续应用不在该范围。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "固定 θ<1 的无零半平面",
  "after": "Re(s)>7/8（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 003 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/003.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-hilbert-tenth-rationals",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布有理数域上的希尔伯特第十问题证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 004 族。声称不存在通用算法，能判定任意整系数多元多项式是否有有理数零点，变量个数属于输入。",
  "impact": "把丢番图方程的算法不可判定性推进到有理数域；不能把已知整数域结论直接当作此结果。当前家族目录未列 Lean 链接。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "有理数解的可判定性问题",
  "after": "声称不可判定",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Hilberts-tenth-problem-over-the-rational-numbers-September-24-2026/main.pdf",
      "type": "预印本"
    },
    {
      "title": "第 004 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-openai-bsd-low-corank",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布BSD：低 Selmer 余秩下的完整公式证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 002 族。声称对有理数域上、某个素数 q 的 q 幂 Selmer 群余秩为 0 或 1 的椭圆曲线，证明完整 BSD 首项公式及 Tate–Shafarevich 群有限性。",
  "impact": "这是千禧年问题的重要范围，不能称为一般 BSD 已解决。与第 006 族 Goldfeld 声明结合，目录还声称覆盖每条曲线二次扭曲中的密度一集合。当前家族目录未列 Lean 链接。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "低余秩下完整 BSD 公式",
  "after": "余秩 0/1 的完整公式（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Exact-Birch-Swinnerton-Dyer-Formula-from-Low-Selmer-Corank-October-3-2026/exact-bsd-low-selmer-corank.pdf",
      "type": "预印本"
    },
    {
      "title": "第 002 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-openai-hodge-cm-k3",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布霍奇猜想：CM 阿贝尔簇与 K3 乘积特例证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 032 族。声称证明所有复 CM 阿贝尔簇在任意维数、余维的有理霍奇猜想；同族另有射影复 K3 曲面任意有限乘积的证明声明。",
  "impact": "一般光滑复射影代数簇上的霍奇猜想不由这些特例解决。官方说明 CM 结果的生成流程属于常规评估流程的例外。当前家族目录未列 Lean 链接。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "霍奇猜想的重要特殊类别",
  "after": "CM / K3 乘积特例（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-rational-Hodge-conjecture-for-CM-abelian-varieties-September-30-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 032 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-openai-pi-exponent",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布π 的无理性指数恰为 2证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 017 族。声称 π 的无理性指数为 2：任意 ε>0，在充分大的分母 q 下，每个有理数 p/q 与 π 的距离至少为 q^(−2−ε)。",
  "impact": "回答 π 能被有理数逼近到何种程度。论文还声称 Flint–Hills 级数收敛；Lean 范围覆盖指数结论，不包含该级数推论。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "π 的有理逼近精度界",
  "after": "无理性指数 2（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-irrationality-exponent-of-pi-is-2-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 017 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/017.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-catalan",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Catalan 常数的无理性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 005 族。声称 Catalan 常数 G=Σ(j≥0)(−1)^j/(2j+1)^2 为无理数。",
  "impact": "表述易懂、结论明确的常数算术代表。Lean 范围说明覆盖无理性主结论；该声明不涉及超越性。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "经典常数的无理性问题",
  "after": "声称 G 为无理数",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Catalans-constant-is-irrational-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 005 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/005.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-chowla-two-point",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布二点 Chowla：普通平均下的消去证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 007 族。声称 Liouville 函数在固定非成比例仿射形式对上的相关和为 O(X/(log X)^c)，c>0 为绝对常数；并给出带明确非伪装性条件的修正二元 Elliott 结论。",
  "impact": "普通平均与对数加权平均是不同结论；这里也不是所有阶数的 Chowla 猜想。Lean 范围说明包含二点相关与带条件的 Elliott 消去。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "乘法函数的二点相关问题",
  "after": "普通平均二点消去（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf",
      "type": "预印本"
    },
    {
      "title": "第 007 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/007.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-kakeya-3d-4d",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Kakeya：三维极大函数与四维维数证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 074 族。声称证明三维 Kakeya 极大函数猜想，以及四维 Kakeya 集的 Hausdorff 维数为 4。",
  "impact": "每个方向都包含单位线段的集合可以有多小，是调和分析与几何的核心问题。三维极大估计与四维维数结论应分开理解，不能推广为所有维数已解决。当前家族目录未列 Lean 链接。 本次核对发布与范围，未独立验证数学证明或编译 Lean。",
  "before": "三维极大估计 / 四维维数问题",
  "after": "三维极大 / 四维满维（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 074 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "physics-2026-openai-diluted-spin-glass",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布稀疏自旋玻璃的 Mézard–Parisi 公式证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 221 族。声称在满足 Panchenko–Talagrand 分解、独立性、可积性和正性条件的稀疏偶数阶 Ising 模型中，极限自由能等于有限深度层级试探泛函的下确界。",
  "impact": "统计物理中将腔方法预测转为严格定理的代表，不能推广至任意自旋玻璃。Lean 范围文档列出上述模型类下的变分等式。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "稀疏无序系统的自由能公式",
  "after": "层级腔方法公式（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 221 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/221.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-anderson",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布Anderson 模型的局域化与离域化证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 261 族。声称对独立均匀格点势的 Anderson 模型，二维任意正无序强度下几乎必然为纯点谱；固定 d≥3 时，足够弱无序在某固定开区间内具有纯绝对连续谱且谱权重非零。",
  "impact": "关联无序介质中的量子输运。Lean 文档仅识别二维算子的几乎必然谱集合，不证明纯点谱类型，也不覆盖高维离域化。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "二维 / 高维无序系统的谱类型",
  "after": "纯点谱 / 弱无序绝对连续谱（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 261 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/261.md",
      "type": "形式化说明"
    },
    {
      "title": "高维弱无序绝对连续谱论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf",
      "type": "预印本"
    }
  ]
},
{
  "id": "physics-2026-openai-area-law",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布二维有能隙量子系统的面积律证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 265 族。声称对有限方格子诱导区域上的有限程 Hamiltonian，仅在统一的全系统谱隙及局域相互作用界等条件下，唯一基态满足纠缠熵面积律。",
  "impact": "说明基态纠缠随边界而非体积增长；同族另有方格子基态的多项式键维 PEPS 近似声明。适用对象限于论文模型与假设；本次未找到对应 Lean 范围文档。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "二维有隙系统的纠缠控制",
  "after": "唯一基态面积律（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-two-dimensional-area-law-from-a-global-spectral-gap-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 265 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "physics-2026-openai-haldane-gap",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布自旋 1 Heisenberg 链的 Haldane 能隙证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 268 族。声称纯反铁磁自旋 1 Heisenberg 链在偶数长度周期环上，谱隙随系统增长仍有统一正下界。",
  "impact": "凝聚态量子自旋链的代表问题；奇数开链的伴随结果另带端点场 h=3/5，不能混为无边界条件的一般结论。本次未找到对应 Lean 范围文档。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "纯自旋 1 链的统一能隙问题",
  "after": "周期偶数链统一正谱隙（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-periodic-spin-one-Haldane-gap-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 268 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "physics-2026-openai-laughlin-gap",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布Laughlin 能隙与弱标量无序稳定性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 269 族。声称在球面、填充率 1/3 的费米子完整 V₁ 相互作用模型中存在统一 Laughlin 谱隙，并在足够弱的最低 Landau 能级投影标量单体势下保持有隙。",
  "impact": "关联分数量子霍尔态的稳定性。Lean 范围包含未扰动能隙与 Fock 空间不等式，未包含投影单体势下的稳定性或扰动后基态唯一性；不等同于所有相互作用模型均已解决。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "分数量子霍尔模型的统一能隙",
  "after": "球面 V₁ 能隙与稳定性（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf",
      "type": "预印本"
    },
    {
      "title": "第 269 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/269.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-heisenberg-magnetization",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布量子 Heisenberg 铁磁体的自发磁化与 Bloch 定律证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 271 族。声称三维有限程铁磁耦合模型满足带精确系数的 Bloch T^(3/2) 定律；同族还声称 d≥3 最近邻模型在任意正量子自旋下存在低温自发磁化。",
  "impact": "热力学极限先于零场导数和低温极限。Lean 文档覆盖最近邻模型的低温自发磁化及无限体积动力学，不列 Bloch 定律或晶格修正。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "量子铁磁有序的严格论证",
  "after": "自发磁化 / Bloch 定律（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Blochs-Law-for-Finite-Range-Heisenberg-Ferromagnets-in-Three-Dimensions-October-5-2026/bloch-law-heisenberg.pdf",
      "type": "预印本"
    },
    {
      "title": "第 271 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/271.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-entropy-photon-number",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布玻色量子输入的熵光子数不等式证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 273 族。声称两路独立、有限能量、有限模数的玻色输入经过分束器混合后，输出熵光子数不小于输入的透射率加权平均；每路内部允许模间纠缠。",
  "impact": "量子光学与通信理论的代表不等式。Lean 范围覆盖该不等式，不包含论文中的热衰减信道最小输出熵与广播容量推论。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "量子光学中的熵不等式",
  "after": "熵光子数下界（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-entropy-photon-number-inequality-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 273 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/273.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-vlasov-maxwell",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布三维相对论 Vlasov–Maxwell 方程的大数据全局光滑性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 362 族。声称三维单物种相对论 Vlasov–Maxwell 系统对允许的大初值具有全局存在唯一性，解在每个有限时间区间保持光滑。",
  "impact": "描述带电粒子分布与电磁场的耦合。初始粒子密度要求紧支撑，场要求有限能量和各阶导数有界；不能推广为任意物种或任意初值。本次未找到对应 Lean 范围文档。 本次未独立验证数学证明或编译 Lean；这是理论声明，不是实验发现。",
  "before": "等离子体动理学方程的大初值问题",
  "after": "单物种全局光滑解（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Global-classical-solutions-of-the-three-dimensional-relativistic-Vlasov-Maxwell-system-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 362 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-openai-falconer",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布所有维数的 Falconer 距离猜想证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 073 族。对 d≥2，声称 Hausdorff 维数大于 d/2 的紧集，其距离集具有正 Lebesgue 测度。",
  "impact": "将分形维数与距离集大小联系起来。Lean 范围文档列出全维数结论。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "分形集合的距离集阈值",
  "after": "维数 > d/2 即正测度（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Falconer-distance-conjecture-in-all-dimensions-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 073 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/073.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-hilbert-sixteenth",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布希尔伯特第十六问题的极限环统一界证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 143 族。声称实平面多项式向量场的孤立周期轨道数，有仅依赖次数的有限上界；五次 Liénard 系统的精确最大值为 2。",
  "impact": "这里只涉及极限环统一有界部分，不称整个希尔伯特第十六问题已解决。Lean 文档仅覆盖五次 Liénard 系统的精确两环结论，不覆盖一般次数的统一界。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "按次数控制极限环数量",
  "after": "统一有限界（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026/uniform-bounds-for-planar-polynomial-limit-cycles-September-24-2026.pdf",
      "type": "预印本"
    },
    {
      "title": "第 143 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/143.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-plane-coloring",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布欧氏平面不能用五种颜色正确着色证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 158 族。声称任意五色平面着色都存在距离为 1 的同色点对，无需可测性或连续性假设；结合七色上界，色数只能为 6 或 7。",
  "impact": "推进 Hadwiger–Nelson 问题，但没有确定色数究竟是 6 还是 7。Lean 文档列出五色不可能与七色可行两端结论。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "平面单位距离图的色数",
  "after": "声称 6 ≤ χ(R²) ≤ 7",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 158 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/158.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-erdos-reciprocal",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Erdős 倒数和猜想与等差数列界证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 159 族。声称每个倒数和发散的正整数集合，都含任意有限长度的非平凡等差数列；论文还给出无等差数列子集规模的定量上界。",
  "impact": "Lean 文档覆盖倒数和推论，不覆盖论文的定量 Szemerédi 上界。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "稀疏整数集中的等差结构",
  "after": "倒数和发散推出任意长数列（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Quasipolynomial-Bounds-for-Arithmetic-Progressions-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 159 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/159.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-sidorenko",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Sidorenko 猜想的反例证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 161 族。声称一个 35 顶点、66 边的连通二部图 H，在某有限宿主图 G 中满足 t(H,G)<t(K₂,G)^66，反驳 Sidorenko 猜想。",
  "impact": "这里是同态密度，不是诱导子图频率。Lean 文档覆盖该有限图反例，未覆盖同族 forcing 猜想推论。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "二部图同态密度下界猜想",
  "after": "固定二部图反例（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Sidorenkos-conjecture-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 161 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/161.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-integer-multiplication",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布整数乘法突破 n log n 位复杂度证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 109 族。声称在固定有限字母表、多带图灵机模型中，对所有长度 n，两个 n 位整数可用确定性最坏时间 O(n(log n)^(1−κ)) 相乘，κ=2^−182。",
  "impact": "与此前精确复数 DFT 的算术模型不同，这是位复杂度声明；指数节省极小，不意味着实用速度改进。本次未取得对应 Lean 范围文档。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "整数乘法 n log n 最优性猜想",
  "after": "低于 n log n 的位复杂度（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 109 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "cp-2026-openai-general-matching",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布一般图的近线性精确最大匹配证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 120 族。声称对任意简单无向图，以 (n+m)^(1+o(1)) word 时间找到最大基数匹配，成功率至少 2/3，时间界在每条计算路径成立。",
  "impact": "是精确基数目标，算法仍随机；不能扩写成任意加权匹配或确定性近线性算法。本次未取得对应 Lean 范围文档。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "一般图精确最大基数匹配",
  "after": "随机化近线性时间（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Almost-Linear-Time-Maximum-Cardinality-Matching-in-Sparse-General-Graphs-September-24-2026/main.pdf",
      "type": "预印本"
    },
    {
      "title": "第 120 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "cp-2026-openai-edit-distance",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布编辑距离的近线性近似方案证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 121 族。声称对固定有理 ε∈(0,1)，单位代价编辑距离可在期望 N^(1+o(1)) 时间内取得 (1+ε) 近似，成功率至少 2/3，N 为两串总长。",
  "impact": "字母用多项式有界整数表示；不是近线性精确编辑距离，时间为期望界。Lean 文档列出该近似比、成功率与期望工作量范围。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "高精度编辑距离近似",
  "after": "固定精度随机化近线性（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/An-Almost-Linear-Approximation-Scheme-for-Edit-Distance-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 121 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/121.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-three-machine-scheduling",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布三台相同机器上的单位任务最优调度证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 124 族。声称在三台相同并行机器上，任意无环前置约束的不可抢占单位长度任务，可以确定性多项式时间最小化完工时间并构造最优调度。",
  "impact": "限制为三台机器和单位任务，不能推广至任意机器数、任务时长或带权调度。Lean 文档覆盖最优构造及截止时间可行性。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "三机单位任务前置约束调度",
  "after": "确定性多项式时间（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-polynomial-time-algorithm-for-three-machine-unit-job-scheduling-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 124 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/124.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-shortest-superstring",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布最短公共超串的二倍近似证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 128 族。声称对显式编码的有限字符串族，存在确定性多项式时间算法，构造包含每条输入为连续子串的公共超串，长度至多最优值的两倍。",
  "impact": "超串要求连续子串，不能与最短公共超序列混淆。运行时间按完整输入位长计，近似比按符号长度计；Lean 文档列出该结论。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "最短公共超串近似比",
  "after": "确定性 2-近似（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-Polynomial-Time-2-Approximation-for-Shortest-Common-Superstring-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 128 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/128.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "cp-2026-openai-finite-field-factorization",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布素数有限域多项式的确定性分解证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 142 族。声称对二进制给定素数 p 上的任意非零稠密 n 次多项式，能以关于 (n+1)log p 的多项式位复杂度完成含重数的因式分解。",
  "impact": "声明无需随机性、GRH、整数分解或原根 oracle；讨论的是素数域多项式分解，不是整数因数分解。本次未取得对应 Lean 范围文档。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "有限域分解的无条件去随机化",
  "after": "确定性多项式位复杂度（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Deterministic-Polynomial-Factorization-over-Prime-Fields-October-4-2026/Deterministic-Polynomial-Factorization-over-Prime-Fields.pdf",
      "type": "预印本"
    },
    {
      "title": "第 142 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "physics-2026-openai-kerr-censorship",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布Kerr 附近的局部强宇宙监督证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 264 族。声称在固定旋转次极端 Kerr 桥的加权光滑邻域内，一稠密 Gδ 类真空初值的最大整体双曲发展，不能向未来作连续非退化且弱联络局部平方可积的延拓。",
  "impact": "限于双端渐近平坦初值、近 Kerr 邻域和指定延拓正则性；不是所有时空上的一般强宇宙监督。本次未取得对应 Lean 范围文档。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "旋转黑洞附近的时空可延拓性",
  "after": "近 Kerr 的泛型不可延拓（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Generic-Future-Inextendibility-with-Square-Integrable-Connection-Near-a-Fixed-Kerr-Spacetime-September-23-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 264 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "physics-2026-openai-bose-condensation",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布稀薄硬球气体的正温度玻色凝聚证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 267 族。声称三维硬球气体在固定排斥距离和足够低固定密度下，存在与体积无关的正温度，使精确正则 Gibbs 态在热力学极限具有正凝聚比例；同族还有零温量子耗尽结果。",
  "impact": "热力学极限与稀薄极限顺序重要。Lean 文档仅覆盖稀薄硬球气体的基态凝聚，不覆盖正温度凝聚或量子耗尽主张。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "相互作用玻色气体的严格凝聚",
  "after": "正温度凝聚（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Bose-Einstein-condensation-at-positive-temperature-in-the-dilute-hard-sphere-gas-October-5-2026/positive-temperature-hard-spheres.pdf",
      "type": "预印本"
    },
    {
      "title": "第 267 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 形式化范围（未独立复核）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/267.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-bfss-bound-state",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布BFSS 模型的唯一阈值束缚态证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 270 族。声称未形变相对 SU(N) BFSS 模型对每个有限 N≥2 恰有一个可归一化零能态；另有 SU(2) 无穷多个正能束缚态的伴随声明。",
  "impact": "这是指定 BFSS Hamiltonian 的谱理论声明，不是 M 理论的实验验证，也不自动处理大 N 极限。本次未取得对应 Lean 范围文档。 本次仅核对公开来源与范围，未独立验证证明或编译 Lean。",
  "before": "矩阵量子力学的阈值束缚态猜想",
  "after": "有限 N 唯一零能态（声明）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-unique-threshold-bound-state-of-the-SU-N-BFSS-model-September-24-2026/paper.pdf",
      "type": "预印本"
    },
    {
      "title": "第 270 族及伴随手稿目录",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-koethe-counterexample",
  "domain": "math",
  "date": "2026-09-07",
  "title": "GPT-6 Astra 给出 Köthe 猜想反例，作者公布论文与 Lean 产物",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Tom Adamczewski / Bernhard Böhmler / Rene Marczinzik / Epoch AI",
  "model": "GPT-6 Astra（预发布）",
  "summary": "Epoch AI 评估中的模型自主找到幂零环相关反例；三位作者随后发表反驳 Köthe 猜想及 Rowen 问题的论文。日期采用 arXiv 首次提交日，不主张发现或公开优先权。",
  "impact": "仓库机检覆盖 Krempa 矩阵形式的否定；从原始猜想到矩阵形式的标准归约没有在该仓库形式化。作者论文处理原始表述，需分别审阅。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "1930 年提出的环论猜想",
  "after": "反例论文 + 形式化产物",
  "featured": false,
  "sources": [
    {
      "title": "作者论文",
      "url": "https://arxiv.org/abs/2609.07996",
      "type": "预印本"
    },
    {
      "title": "作者仓库与核验边界",
      "url": "https://github.com/tadamcz/koethe",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-smale-mean-value",
  "domain": "math",
  "date": "2026-10-07",
  "title": "GPT-6 Astra 公布 Smale 均值猜想 K = 1 的形式化反例声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Tom Adamczewski / Epoch AI",
  "model": "GPT-6 Astra（预发布）",
  "summary": "作者仓库报告模型在 2026 年 9 月自主找到复多项式反例，使常数 K = 1 的均值不等式对所有临界点均失败。当前未核实首次公开的具体日，卡片日期为本次核对日。",
  "impact": "仓库报告 Comparator 和 CI 通过，仅用标准公理；同时明确尚无人类专家深入数学审阅。反例不否定已知 K = 4 定理，也不否定已核验的低次数情形。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "Smale 均值猜想 K = 1",
  "after": "机检反例声明，专家审阅待完成",
  "featured": false,
  "sources": [
    {
      "title": "作者仓库",
      "url": "https://github.com/tadamcz/mean-value-problem",
      "type": "原始产物"
    },
    {
      "title": "来源与审阅元数据",
      "url": "https://github.com/tadamcz/mean-value-problem/blob/main/formalization.yaml",
      "type": "作者说明"
    }
  ]
},
{
  "id": "math-2026-critical-percolation",
  "domain": "math",
  "date": "2026-10-07",
  "title": "Anthropic 公布全维格点临界键渗流无无限簇的候选证明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Anthropic / Justin Leder",
  "model": "Claude（公开说明未指定版本）",
  "summary": "保留的公开源码声称最近邻 Bernoulli 键渗流在 Z^d、d ≥ 2 满足 θ(p_c) = 0，补足此前未决维度。采用固定提交链接；卡片日期为本次核对日，不把提交时间等同公开时间。",
  "impact": "作者说明报告 Lean / Comparator 检查，并明确尚无独立专家审稿。限于指定格点的键渗流，不能直接扩展到站点渗流、任意图或定量临界指数；形式化陈述与经典问题的对应仍需审查。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "格点临界渗流剩余维度",
  "after": "全维无无限簇（声明）",
  "featured": false,
  "sources": [
    {
      "title": "固定版本原始源码及说明",
      "url": "https://github.com/anthropics/formal-math/tree/795efb86f191735c5481675763537cfb4ff37e55/percolation",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-gromov-volume-growth",
  "domain": "math",
  "date": "2026-08-14",
  "title": "AI 辅助证明 Gromov 正标量曲率体积增长问题",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Gioacchino Antonelli",
  "model": "GPT-5.6 Sol / Ultra",
  "summary": "作者论文在 Ric ≥ 0、Scal ≥ 1 的完备 n 维黎曼流形上证明 Vol B_R(p) ≤ C(n) R^(n−2)，回答 Gromov 的体积增长问题，并推广至正中间曲率。",
  "impact": "论文披露模型提出中心归纳策略，作者指导研究并改造证明；中间曲率推广是作者贡献。同一问题另有 Jian Ge 独立方法，不能称为 AI 独占或首次解决。此条没有公开 Lean 核验依据。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "Gromov 体积增长问题",
  "after": "带明确曲率假设的体积上界",
  "featured": false,
  "sources": [
    {
      "title": "原始论文及 AI 工具披露",
      "url": "https://arxiv.org/html/2608.14507v1",
      "type": "预印本"
    }
  ]
},
{
  "id": "algorithms-2026-strong-pr",
  "domain": "algorithms",
  "date": "2026-09-09",
  "title": "强 Papadimitriou–Ratajczak 猜想发布 Lean 候选证明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Lech Mazur / ProofAtlas",
  "model": "OpenAI Codex / GPT-6 Pro",
  "summary": "公开论文与形式化产物声称每个有限简单三连通平面图都存在保持指定嵌入与外面的凸贪心直线绘图，可用于几何路由理论。",
  "impact": "发布页记录 Lean 构建通过，同时明确未获 ProofAtlas accepted-result 状态，独立陈述对应审阅、专家评议和无关团队复现尚缺。存在性结论不自动给出多项式时间构造算法。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "凸贪心绘图存在性猜想",
  "after": "论文 + Lean 存在性候选证明",
  "featured": false,
  "sources": [
    {
      "title": "作者授权发布、陈述及检查记录",
      "url": "https://www.proofatlas.ai/formalizations/strong-papadimitriou-ratajczak-conjecture/",
      "type": "原始发布"
    }
  ]
},
{
  "id": "physics-2026-smooth-forced-euler",
  "domain": "physics",
  "date": "2026-09-07",
  "title": "AI 辅助构造光滑外力下三维 Euler 有限时爆破",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Levent Alpöge / Tristan Buckmaster",
  "model": "Claude（Lean 代码，作者指导）",
  "summary": "NYU 报告团队于 9 月 7 日公布光滑有限能量初值与时空光滑外力下的三维不可压 Euler 爆破解；伴随工作处理平面无黏 Boussinesq 系统。",
  "impact": "Euler 仓库报告标准公理下完整形式化，Lean 代码及可信陈述文件由 Claude 在 Alpöge 指导下编写，作者阅读陈述核对。保留光滑外力这一条件，不能写成无外力 Euler 或 Navier–Stokes 千禧难题已解决。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "外力正则性限制下的流体爆破",
  "after": "时空光滑外力爆破构造",
  "featured": false,
  "sources": [
    {
      "title": "NYU 官方报道（9 月 14 日）",
      "url": "https://cims.nyu.edu/dynamic/news/1528/",
      "type": "机构发布"
    },
    {
      "title": "Euler 形式化与作者分工",
      "url": "https://github.com/tristanbuckmaster/fluid_lean/tree/main/euler-blowup",
      "type": "原始产物"
    },
    {
      "title": "Boussinesq 伴随形式化",
      "url": "https://github.com/tristanbuckmaster/fluid_lean/tree/main/boussinesq-blowup",
      "type": "原始产物"
    }
  ]
},
{
  "id": "physics-2026-smooth-forced-ipm",
  "domain": "physics",
  "date": "2026-09-15",
  "title": "AI 辅助将 IPM 爆破推进到一致时空光滑外力",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Levent Alpöge / Tristan Buckmaster / Matei P. Coiculescu",
  "model": "LLM（本条原始摘要未指定型号）",
  "summary": "论文在二维环面 IPM 方程中构造光滑奇初始密度及一致时空光滑奇外力，使密度梯度、速度空间梯度在有限时间发散；摘要注明 LLM 辅助及 Lean 形式化。",
  "impact": "密度本身仍在每个 C^η（0 ≤ η < 1）中收敛。此条是指定带外力 IPM 的正则性结果；不将 Euler/Boussinesq 仓库当作本条 IPM 定理的独立形式化证据。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "空间光滑外力下的 IPM 爆破",
  "after": "一致时空光滑外力爆破",
  "featured": false,
  "sources": [
    {
      "title": "作者原始论文",
      "url": "https://arxiv.org/abs/2609.16470",
      "type": "预印本"
    }
  ]
},
{
  "id": "physics-2026-pinn-euler-profile",
  "domain": "physics",
  "date": "2026-09-09",
  "title": "Caltech 用 PINN 寻找无外力 Euler 候选奇异剖面",
  "status": "progress",
  "evidenceLevel": "reported",
  "actor": "Adarsh Ganeshram / Valentin Duruisseaux / Anima Anandkumar",
  "model": "物理信息神经网络（PINN）",
  "summary": "论文用 PINN 找到三维全空间 Euler 的近似自相似奇异剖面，配合样条认证与非线性稳定性分析框架；9 月 24 日修订版摘要仍将其称为奇异性的证据。",
  "impact": "非线性稳定性分析仍归结到一组需要验证的显式估计与常数。这是候选剖面和证明框架的实质推进，不能据此宣称无外力 Euler 有限时爆破已经证明。 本次核对公开材料，未独立验证数学证明或编译 Lean。",
  "before": "神经网络数值候选",
  "after": "近似剖面认证 + 稳定性框架",
  "featured": false,
  "sources": [
    {
      "title": "作者论文（含修订历史）",
      "url": "https://arxiv.org/abs/2609.10867",
      "type": "预印本"
    },
    {
      "title": "伴随稳定性框架",
      "url": "https://arxiv.org/abs/2609.10860",
      "type": "预印本"
    }
  ]
},
{
  "id": "math-2026-erdos-728",
  "domain": "math",
  "date": "2026-01-12",
  "title": "GPT-5.2 与 Aristotle 解决 Erdős #728 的阶乘整除问题",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Kevin Barreto / Nat Sothanaphan / 社区参与者",
  "model": "GPT-5.2 Pro / Harmonic Aristotle",
  "summary": "模型组合生成 Lean 证明，人类整理为论文：在排除退化取值后，阶乘整除条件存在无限多组具有指定对数级间隙的解。日期采用解释论文首投日，社区在此前已公布产物。",
  "impact": "论文称近乎自主解决，但过程包含问题解释反馈、运行组织与人类审阅；不将所有 Erdős 问题的 AI 解答都视为新结果，也不声称排除了所有既有文献。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "Erdős #728 未决表述",
  "after": "Lean 证明 + 人类解释论文",
  "featured": false,
  "sources": [
    {
      "title": "原始解释论文",
      "url": "https://arxiv.org/abs/2601.07421",
      "type": "预印本"
    },
    {
      "title": "操作者的过程回顾",
      "url": "https://www.erdosproblems.com/forum/thread/blog%3A2",
      "type": "作者说明"
    }
  ]
},
{
  "id": "math-2026-gauss-sphere-packing",
  "domain": "math",
  "date": "2026-04-25",
  "title": "Gauss 协助完成八维球堆积定理的 Lean 形式化",
  "status": "formalized",
  "evidenceLevel": "reported",
  "actor": "球堆积形式化团队 / Math, Inc.",
  "model": "Gauss",
  "summary": "团队论文报告八维结果于 2 月完成形式验证，Gauss 承担最后阶段；Math, Inc. 另报告二十四维 Leech 格情形的自动形式化。卡片日期采用团队论文首投日，完成月份与公开论文日期分开。",
  "impact": "这是 Viazovska 及合作者既有定理的形式化，不是 AI 首次解决球堆积。二十四维依据公司及代码发布，不能说团队八维论文独立覆盖全部二十四维工作；项目仍有后续目标。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "2016 年人类定理",
  "after": "AI 辅助形式化",
  "featured": false,
  "sources": [
    {
      "title": "团队论文（修订标题为 Progress）",
      "url": "https://arxiv.org/abs/2604.23468",
      "type": "预印本"
    },
    {
      "title": "公司发布与范围",
      "url": "https://www.math.inc/sphere-packing",
      "type": "机构发布"
    },
    {
      "title": "形式化源码",
      "url": "https://github.com/math-inc/Sphere-Packing-Lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-anderson-quasi-complete",
  "domain": "math",
  "date": "2026-04-04",
  "title": "Rethlas / Archon 给出 Anderson 弱拟完备环问题的反例",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Haocheng Ju、Guoxiong Gao 等 / 北京大学与合作者",
  "model": "Rethlas / Archon",
  "summary": "论文报告非形式推理与 Lean 代理协作，构造弱拟完备但不拟完备的 Noether 局部环，否定 2014 年 Problem 8a。",
  "impact": "保留具体交换代数问题，避免与物理 Anderson 模型混淆。作者报告极少人工干预和自动形式化；可信陈述、定义与原问题的对应仍应单独审阅。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "弱拟完备是否推出拟完备",
  "after": "反例 + Lean 形式化",
  "featured": false,
  "sources": [
    {
      "title": "框架及结果原始论文",
      "url": "https://arxiv.org/abs/2604.03789",
      "type": "预印本"
    },
    {
      "title": "作者形式化仓库",
      "url": "https://github.com/frenzymath/Anderson-Conjecture",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-alphaproof-nexus-research",
  "domain": "math",
  "date": "2026-05-21",
  "title": "AlphaProof Nexus 报告解决 9 个 Erdős 开放问题",
  "status": "progress",
  "evidenceLevel": "reported",
  "actor": "Google DeepMind / George Tsoukalas、Swarat Chaudhuri 等",
  "model": "Gemini 3.1 Pro / AlphaProof Nexus / AlphaProof",
  "summary": "原始论文报告在 353 个形式化 Erdős 开放问题中解决 9 个，并证明 492 个 OEIS 猜想中的 44 个；团队说明逐项审查形式陈述是否忠实对应问题。",
  "impact": "这是研究开放问题评估，不是算法竞赛成绩。分母来自特定时点的形式化题集，不代表任意研究问题的成功率；不能把 44 个序列猜想全部视为同等级重大难题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "研究级形式证明搜索",
  "after": "开放问题机检产物集",
  "featured": false,
  "sources": [
    {
      "title": "原始论文及方法",
      "url": "https://arxiv.org/abs/2605.22763",
      "type": "预印本"
    },
    {
      "title": "公开结果",
      "url": "https://github.com/google-deepmind/alphaproof-nexus-results",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-cycle-double-cover",
  "domain": "math",
  "date": "2026-07-17",
  "title": "OpenAI 的循环双覆盖证明获得专家解释论文",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI / Sang-il Oum",
  "model": "GPT-5.6（据解释论文归属）",
  "summary": "OpenAI 公布每个无桥图都存在循环双覆盖的证明，即每条边恰被所选循环覆盖两次；Sang-il Oum 随后给出修改和解释。日期采用解释论文首投日，不冒充 OpenAI 首次宣布日。",
  "impact": "已有领域专家的具体解释文献，证据比单一模型输出更充分；不据此声称所有更强循环覆盖或图嵌入猜想一并解决，也未核实本条的独立 Lean 产物。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "循环双覆盖猜想",
  "after": "模型证明 + 专家解释",
  "featured": false,
  "sources": [
    {
      "title": "OpenAI 原始证明",
      "url": "https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf",
      "type": "证明手稿"
    },
    {
      "title": "Sang-il Oum 解释论文",
      "url": "https://arxiv.org/abs/2607.16356",
      "type": "预印本"
    }
  ]
},
{
  "id": "math-2026-sendov-conjecture",
  "domain": "math",
  "date": "2026-08-05",
  "title": "AI 辅助 Sendov 猜想发布全次数证明及 Lean 包",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Lech Mazur / ProofAtlas",
  "model": "GPT-5.6 Pro",
  "summary": "公开包声称复多项式次数至少为 2、所有根在闭单位圆盘时，每个根距某个导数零点不超过 1，覆盖全部次数。",
  "impact": "发布页记录 Lean 通过；后续 9 月状态说明援引 Tao 的解释将数学目标记为 resolved，但原包 accepted-result 仍待完成，且 Lean 不是手稿和补充 Python 的逐行核验。保留不同审阅层次。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "Sendov 猜想全次数情形",
  "after": "论文与 Lean 发布",
  "featured": false,
  "sources": [
    {
      "title": "8 月 5 日原始包及后续状态",
      "url": "https://www.proofatlas.ai/formalizations/sendov-conjecture/",
      "type": "作者授权发布"
    }
  ]
},
{
  "id": "algorithms-2026-zero-order-oracle-bound",
  "domain": "algorithms",
  "date": "2026-07-14",
  "title": "AI 辅助将确定性零阶凸优化查询下界推至近二次",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Phillip Kerger",
  "model": "GPT-5.6 Sol Pro",
  "summary": "只允许查询精确函数值时，对 d 维球上凸 Lipschitz 优化，在精度 Θ(d^(−1/2)) 证明 Ω(d²/log(d+1)) 查询下界，缩小与既有上界的差距。",
  "impact": "这是确定性、精确值预言机模型的查询复杂度，不是所有优化算法运行时间下界。论文明确 Lean 只覆盖较早 d^(−3) 精度版本，最终 d^(−1/2) 加强版未形式化。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "线性下界与近二次上界之差",
  "after": "近二次查询下界",
  "featured": false,
  "sources": [
    {
      "title": "原始论文及 AI / Lean 范围",
      "url": "https://arxiv.org/html/2607.13335v1",
      "type": "预印本"
    },
    {
      "title": "早期版本形式化",
      "url": "https://github.com/PhillipKerger/zero-order-bounds-lean-verification",
      "type": "原始产物"
    }
  ]
},
{
  "id": "algorithms-2026-goemans-cost-counterexample",
  "domain": "algorithms",
  "date": "2026-07-22",
  "title": "GPT-5.6 Pro 找到不可拆分流的 Goemans 成本猜想反例",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Dmitry Rybin / Jason Hickey 等验证者",
  "model": "GPT-5.6 Pro（发现）/ Claude（后续形式化）",
  "summary": "公开核验仓库归属 7 月 22 日的模型会话反例：一个七顶点网络分数流成本为 58，而满足指定附加容量限制的不可拆分流成本至少 60。",
  "impact": "反驳成本增强猜想，不否定 Dinitz–Garg–Goemans 已有无成本定理。当前链接的核验覆盖文献 Conjecture 1.3 表述；平面性不在其 Lean 证明范围，两份使用 Claude 的形式化也不意味着陈述选择完全独立。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "不可拆分流成本增强猜想",
  "after": "小规模精确反例及形式核验",
  "featured": false,
  "sources": [
    {
      "title": "核验者原始源码、归属与范围",
      "url": "https://github.com/jyh/dinitz-verify",
      "type": "形式化产物"
    },
    {
      "title": "发现者公开会话",
      "url": "https://chatgpt.com/share/6a60b2eb-0b64-83ee-9c76-7931ca1de063",
      "type": "原始会话"
    }
  ]
},
{
  "id": "physics-2026-single-minus-gluon",
  "domain": "physics",
  "date": "2026-02-12",
  "title": "GPT-5.2 协助推导单负螺旋度胶子树振幅非零公式",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Alfredo Guevara / Alex Lupsasca / David Skinner / Andrew Strominger / OpenAI",
  "model": "GPT-5.2 Pro / 内部 scaffolded GPT-5.2",
  "summary": "作者给出特定半共线运动学下任意粒子数的单负螺旋度树级胶子振幅公式；官方说明模型提出通式，内部模型推导证明，人类作者做解析一致性检查。",
  "impact": "条件是 Klein 空间或复化动量中的特定构型，不推翻一般运动学下的零振幅结论，更不是实验发现新粒子。官方所谓 formal proof 未提供 Lean 核验依据，本条不标机器形式化。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "特定运动学下振幅问题",
  "after": "闭式公式与解析证明",
  "featured": false,
  "sources": [
    {
      "title": "作者原始论文",
      "url": "https://arxiv.org/abs/2602.12176",
      "type": "预印本"
    },
    {
      "title": "模型分工官方说明（2 月 13 日）",
      "url": "https://openai.com/index/new-result-theoretical-physics/",
      "type": "机构发布"
    }
  ]
},
{
  "id": "physics-2026-maxwell-counterexample",
  "domain": "physics",
  "date": "2026-07-29",
  "title": "AI 提议的五电荷构造反驳 Maxwell 平衡点计数猜想",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "Philip Arathoon / Gavin Ball / Matthew D. Kvalheim",
  "model": "GPT-5.6 Sol",
  "summary": "论文构造五个正点电荷的静电势，具有至少 24 个非退化临界点，超过猜测的 (n−1)² = 16 上界。作者明确模型建议构造思路，人类核实细节并撰写证明。",
  "impact": "这是经典静电学的平衡点计数猜想，不是 Maxwell 方程错误；小扰动用于保证全部临界点非退化。论文使用计算机代数，无据可称 Lean 形式化或全自主发现。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "五电荷猜测至多 16 个平衡点",
  "after": "至少 24 个非退化临界点",
  "featured": false,
  "sources": [
    {
      "title": "作者论文及工具披露",
      "url": "https://arxiv.org/html/2607.27197v1",
      "type": "预印本"
    }
  ]
},
{
  "id": "math-2026-august-high-dimensional-packing",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布高维球堆积密度上界成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "高维密度上界达到 Cohn–Elkies 阈值。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "高维球堆积上界",
  "after": "改进渐近上界",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/SpherePacking.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-metric-code-bounds",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布二元码与球面码的新上界成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "对指定最小距离的二元码给出指数级更强上界，并给出球面码对应结果。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "编码容量上界",
  "after": "改进码规模上界",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/MetricCodes.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-nonsofic-group",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布非 sofic 群构造成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称构造非 sofic 群，否定所有群都可用有限置换近似的猜测。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "是否所有群均 sofic",
  "after": "非 sofic 构造声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/NonSoficGroup.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-connes-rigidity",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布Connes 刚性猜想反例成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称给出指定群由其群 von Neumann 代数唯一确定这一猜想的反例。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "群与其算子代数的刚性",
  "after": "刚性反例声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/ConnesRigidity.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "algorithms-2026-august-permanent-formula-bound",
  "domain": "algorithms",
  "date": "2026-08-01",
  "title": "OpenAI 发布Permanent 算术公式下界成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称 permanent 的算术公式下界达到 n⁴/log n 量级。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "算术公式复杂度下界",
  "after": "改进公式下界",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/Permanent.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "algorithms-2026-august-quantum-parallel-repetition",
  "domain": "algorithms",
  "date": "2026-08-01",
  "title": "OpenAI 发布双人量子博弈指数平行重复成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称对任意有限双人量子博弈建立指数平行重复定理。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "量子博弈平行重复",
  "after": "指数衰减声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/QuantumParallelRepetition.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "algorithms-2026-august-gap-cvp-hardness",
  "domain": "algorithms",
  "date": "2026-08-01",
  "title": "OpenAI 发布最近向量问题多项式因子近似困难性成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称 CVP 的多项式因子近似困难性，并涉及格问题和译码。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "格问题近似困难性",
  "after": "多项式因子困难性声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/GapCVP.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-ehrhart-volume",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布Ehrhart 体积猜想成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称确定每个维数中重心为唯一内部格点的凸体最大体积。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "指定凸体的体积猜想",
  "after": "锐体积上界声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/EhrhartVolumeInequality.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-multicolor-triangle-ramsey",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布多色三角形 Ramsey 数超指数下界成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称给出多色三角形 Ramsey 数超指数下界，解决 Erdős #183。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "多色 Ramsey 增长速度",
  "after": "超指数下界声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/MulticolorTriangleRamsey.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "math-2026-august-extremal-compactness-degeneracy",
  "domain": "math",
  "date": "2026-08-01",
  "title": "OpenAI 发布极值图紧致性与退化性猜想反例成果声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "Astra 内部版本",
  "summary": "声称反驳极值图论两项猜想，对应 Erdős #146、#180。 属于 8 月 1 日十项成果，原有总览之外单列检索。",
  "impact": "官方提供论文及同名 Lean 模块；本条不把模块名称或发布说明等同于独立核验，也不将具体结论推广到更一般问题。 本站核对公开来源，未独立复核完整证明或编译 Lean。",
  "before": "极值图猜想",
  "after": "两项反例声明",
  "featured": false,
  "sources": [
    {
      "title": "8 月 1 日官方发布",
      "url": "https://openai.com/index/ten-advances-in-mathematics/",
      "type": "机构发布"
    },
    {
      "title": "对应形式化模块",
      "url": "https://github.com/openai/ten-proofs/blob/main/CompactnessAndDegeneracy.lean",
      "type": "原始产物"
    }
  ]
},
{
  "id": "algorithms-2026-openai-perfect-two-to-one",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布2-to-1 Games 的完美完全性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 105 族。声称对任意固定有理数 0 < δ < 1，将可满足的 2-to-1 游戏与最优值至多 δ 的游戏区分是 NP-hard；字母表仅依赖 δ，每个右侧标签在每条约束下恰有两个原像。",
  "impact": "官方 Lean 文档覆盖从二元 3SAT 出发的确定性多项式归约、完全可满足的 yes 情形和显式无权约束。它是完美完全性的具体版本，不与现有 UGC 卡片合并为同一结果。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "2-to-1 Games 完美完全性猜想",
  "after": "值 1 对值 ≤ δ 的 NP-hardness",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Perfect-completeness-for-2-to-1-games-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 105 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/105.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-three-colorable-hardness",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布三可染图的任意固定色数着色困难性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 106 族。声称对每个固定整数 c ≥ 3，即使承诺输入图三可染，找出 c 色正确着色仍为 NP-hard。更强的归约区分三可染图与最大独立集小于 δn 的图，0 < δ < 1/3 固定。",
  "impact": "Lean 说明覆盖从 3SAT 到有限简单图的独立集间隙归约，运行时间包含完整邻接矩阵输出。NP-hard 是最坏情形复杂性结论，不表示每个具体三可染图都难。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "三可染承诺下的近似着色",
  "after": "任意固定 c 色 NP-hard",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 106 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/106.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-permanent-border-cubic",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布permanent 边界行列式复杂度的三次下界证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 108 族。声称复数域 n×n permanent 的边界行列式复杂度为 Ω(n³)：即便允许仿射线性行列式表示的逐系数极限，矩阵规模仍须至少为三次量级。",
  "impact": "与网站已有算术公式 n⁴/log n 下界是不同计算模型。Lean 说明覆盖 exact 与 border 行列式表示，论文的代数分支程序推论不在所选陈述内；这一多项式下界本身不证明 VP ≠ VNP。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "permanent–determinant 表示下界",
  "after": "复数域 border complexity ≥ Ω(n³)",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026/A-cubic-lower-bound-for-border-determinantal-complexity-of-the-permanent-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 108 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/108.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-perfect-matching-fpras",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布一般图完美匹配计数的 FPRAS证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 113 族。声称对任意有限简单无向图给出完美匹配数量的全多项式随机近似方案；无完美匹配时必定返回零，否则以指定置信度获得相对误差估计。",
  "impact": "官方 Lean 范围覆盖固定随机机、每条随机带上的多项式位运行时间及匹配熵界。它是随机近似计数，不是精确多项式计数；同族论文的全局锐面维数界不在所选形式陈述内。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "一般图完美匹配随机近似计数",
  "after": "任意简单无向图 FPRAS",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-Fully-Polynomial-Randomized-Approximation-Scheme-for-Perfect-Matchings-in-General-Graphs-September-23-2026/main.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 113 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/113.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-noncommutative-pit",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布非交换公式黑盒恒等式测试证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 116 族。声称对有界大小的非交换公式构造统一矩阵命中点，并给出有理公式的多项式大小命中列表；目录还列出正特征的统一构造。",
  "impact": "Lean 文档的单点结论限于零特征的无除法公式，未单独断言该结论的位构造时间和矩阵维数界；有理公式列表另覆盖多项式时间与输出长度。不能推广为一般交换电路 PIT，也不据此断言正特征论文已形式化。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "非交换公式的去随机化",
  "after": "矩阵命中点 / 有理命中列表",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026/One-Rational-Matrix-Hitting-Point-for-Noncommutative-Formulas-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 116 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/116.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-uniform-sparsest-cut",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布Uniform Sparsest Cut 的常数近似困难性与 SDP 间隙证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 117 族。声称任意固定常数因子近似 Uniform Sparsest Cut 均为 NP-hard；伴随结果构造 Goemans–Linial SDP 整性间隙 Ω(√log n/(log log n)³)。",
  "impact": "Lean 说明仅覆盖一列实例规模上的 SDP 整性间隙，不覆盖 NP-hardness，也不是对每个规模的统一间隙下界。整性间隙限制特定松弛，不能单独等同一般算法困难性。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "均匀稀疏割近似与松弛缺口",
  "after": "常数近似 NP-hard（论文）/ SDP 间隙",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 117 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/117.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-bin-packing-mirup",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布装箱 MIRUP 反例与无界配置 LP 加性间隙证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 118 族。声称整数装箱最优值与配置 LP 值之间可有任意大的加性差距，反驳 Modified Integer Round-Up Conjecture；任意固定加性误差的近似也是 NP-hard。",
  "impact": "官方 Lean 范围覆盖每个固定整数 c 的反例及 B 与 B+c 间的困难性。结论讨论加性误差与指定配置 LP，不表示不存在乘法近似方案。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "配置 LP 的统一加性界猜想",
  "after": "无界加性间隙与困难性",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026/Additive-hardness-and-unbounded-configuration-gaps-in-bin-packing-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 118 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/118.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-metric-kmedian-threshold",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布Metric k-median 的 1 + 2/e 近似阈值证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 125 族。声称对有限有理度量、指定候选设施的 metric k-median，任意固定 ε > 0 均有确定性多项式时间 (1 + 2/e + ε) 近似，且输出至多 k 个设施。",
  "impact": "Lean 说明覆盖上述算法及在 P ≠ NP 下近似因子下确界恰为 1 + 2/e。下确界不等于存在精确达到端点的算法；固定 ε 的复杂度不自动意味着对 ε 也全多项式。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "Metric k-median 近似比缺口",
  "after": "阈值下确界 1 + 2/e（条件性）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Approximation-Threshold-for-Metric-k-Median-September-24-2026/main.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 125 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/125.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-sensitivity-superquadratic",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布敏感度与块敏感度的超二次分离证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 132 族。声称构造全定义布尔函数，使块敏感度 bs(f) ≥ s(f)^α，某个固定 α > 2，并且 bs(f) 无界；从而反驳统一二次界的加强猜想。",
  "impact": "Lean 说明覆盖二次比值无界及固定超二次指数构造。反驳的是二次加强版，不否定黄皓已证明的原始敏感度猜想所断言的多项式关系。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "块敏感度是否受敏感度二次界控制",
  "after": "超二次分离（不否定原猜想）",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-superquadratic-separation-between-sensitivity-and-block-sensitivity-September-25-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 132 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/132.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "algorithms-2026-openai-etr-counting-hierarchy",
  "domain": "algorithms",
  "date": "2026-10-06",
  "title": "OpenAI 发布实数存在理论属于计数层级证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 141 族。声称实数存在理论 ETR 属于计数层级；更一般地，带存在–全称量词的实数语句可在该层级某个固定层判定，即使整数多项式由算术电路给出。",
  "impact": "这是复杂性上界，不等同 ETR 属于 P 或 NP，也不声称解决任意量词交替的完整实数理论。本次未取得第 141 族 Lean 范围文档，不标为已形式核验。 本站仅核对公开来源及形式化范围，未独立复核证明或编译 Lean。",
  "before": "实数判定的复杂性定位",
  "after": "ETR / ∃∀ 实数语句的固定计数层上界",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Existential-universal-real-sentences-in-the-counting-hierarchy-October-4-2026/etr-counting-hierarchy.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方成果目录：第 141 族",
      "url": "https://github.com/openai/math/blob/main/CONTENTS.md",
      "type": "官方目录"
    }
  ]
},
{
  "id": "math-2026-openai-goldfeld",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Goldfeld 二次扭曲秩分布证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 006 族。声称对每条有理数域椭圆曲线，其二次扭曲中解析秩 0 和 1 各占密度 1/2，平均解析秩趋于 1/2。",
  "impact": "计数采用有符号无平方因子扭曲参数，按绝对值排序；是密度与平均结果，不表示每个扭曲都只有秩 0 或 1。与已有低 Selmer 余秩 BSD 条目相关但不是同一陈述。本次未取得第 006 族 Lean 范围文档。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文 1",
      "url": "https://github.com/openai/math/blob/main/preprints/Goldfelds-analytic-density-conjecture-and-the-2-converse-for-elliptic-curves-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "原始论文 2",
      "url": "https://github.com/openai/math/blob/main/preprints/The-mean-analytic-rank-of-quadratic-twists-of-elliptic-curves-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    }
  ]
},
{
  "id": "math-2026-openai-artin-primitive-roots",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Artin 原根猜想的逐底数无穷性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 029 族。声称对每个既非 −1 也非平方数的整数 a，都有无穷多个素数以 a 为原根；每个充分大的区间 (x,2x) 中数量至少 c_a x/(log x)²。",
  "impact": "这里证明声明是逐底数无穷性及下界，不能改写成完整 Artin 预期密度渐近；同族“同时原根”的结果另带条件。本次未取得第 029 族 Lean 范围文档。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026/primitive-roots-all-integer-bases.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    }
  ]
},
{
  "id": "math-2026-openai-mahler-volume-product",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布对称与非对称 Mahler 体积积猜想证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 087 族。声称在全部维数建立对称和一般凸体的锐体积积下界，并分类等号情形：分别为 Hanner 体和单纯形的相应线性 / 仿射形式。",
  "impact": "官方 Lean 说明分别列出对称结论、一般凸体结论及极体积辛宽度。文档中较早的“不含非对称”一句仅对应前述对称陈述，后面另列一般结论；函数版不在所选陈述内，容量恰为 4 的辛嵌入也未断言。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文 1",
      "url": "https://github.com/openai/math/blob/main/preprints/The-symmetric-Mahler-conjecture-and-its-equality-cases-September-22-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "原始论文 2",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Mahler-Conjecture-for-General-Convex-Bodies-September-22-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/087.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-hadwiger-counterexample",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Hadwiger 与 Colin de Verdière 着色猜想反例证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 157 族。声称构造独立数至多 2 的有限简单图，使分数色数大于最大团 minor 阶数，从而反驳 Hadwiger 猜想；同族另反驳分数 Colin de Verdière 色数界，并给出线性列表着色上界。",
  "impact": "χ_f(G) > h(G) 蕴含普通色数版本也失败，但不改变四色定理。第 157 族 Lean 文档只覆盖 χ_list(G) ≤ C h(G) 的正面结果，没有覆盖这两项反例，不能称反例已经由该文档机检。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文 1",
      "url": "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Hadwigers-conjecture-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "原始论文 2",
      "url": "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Colin-de-Verdiere-chromatic-conjecture-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/157.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-kaplansky-zero-divisors",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Kaplansky 零因子猜想反例证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 196 族。声称构造有限表示无挠群 G，使 F₂[G] 中存在非零 α、β 而 αβ = 0；该群还有有限二维分类空间。",
  "impact": "Lean 说明覆盖该特征二群代数反例及分类空间性质。特征二反例足以否定全称猜想，但不能写成特征零或所有底域都已有反例。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/A-Torsion-Free-Group-Algebra-with-Zero-Divisors-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/196.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-thompson-nonamenable",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布Thompson 群 F 的非可和性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 248 族。声称标准 Thompson 群 F，即区间上的二进有理分段线性同胚群，不存在正的归一化左不变均值，因而非 amenable（不可和）。",
  "impact": "官方 Lean 说明覆盖该标准群的非可和性，不给出显式边界常数或指定生成集。非可和性不自动等于存在非阿贝尔自由子群，不能据此扩大群结构结论。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Thompsons-group-F-is-nonamenable-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/248.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "math-2026-openai-hilbert-smith",
  "domain": "math",
  "date": "2026-10-06",
  "title": "OpenAI 发布全部有限维的 Hilbert–Smith 猜想证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 304 族。声称局部紧、第二可数 Hausdorff 群若忠实且联合连续地作用于连通有限维拓扑流形，则必为 Lie 群。",
  "impact": "保留流形 Hausdorff、第二可数、无边界及作用忠实等假设；结论是群作用的结构，不是希尔伯特第五问题任意表述的全新解决。本次未取得第 304 族 Lean 范围文档。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Hilbert-Smith-conjecture-in-every-finite-dimension-September-23-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    }
  ]
},
{
  "id": "physics-2026-openai-spacetime-penrose",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布时空 Penrose 不等式及刚性证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 260 族。声称对空间维数 n ≥ 3 的指定光滑单端渐近平坦初始数据，以最小包围面积给出不变 ADM 质量的锐下界，并处理带电及其他伴随情形。",
  "impact": "保留主导能量、弱未来俘获、正包围面积和衰减假设；等号刚性另有视界条件。Lean 文档仅覆盖三维 CKS 类端替换与 Schwarzschild 等号例子，不覆盖一般 Bondi–Penrose 主不等式，也不能替代全部时空 Penrose 论文。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/Spacetime-Penrose-inequalities-enclosing-area-charge-and-rigidity-October-5-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/260.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-coulomb-ionization",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布电离与广义电离猜想证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 263 族。在非相对论、两种电子自旋的完整 Coulomb 模型中，声称 M 个固定核、总核电荷 Z 的分子至多严格束缚 Z + CM 个电子；并给出中性原子电离能、外电子半径及 Thomas–Fermi 渐近。",
  "impact": "Lean 说明覆盖 m → ∞ 且 Z/m → ∞ 的电离能渐近和先取 Z → ∞ 的半径渐近，不覆盖固定 m 收敛，也不单独断言基态存在。不能把所列机检范围当作 Z + CM 束缚数主张的形式证明。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文 1",
      "url": "https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "原始论文 2",
      "url": "https://github.com/openai/math/blob/main/preprints/Generalized-ionization-energies-for-full-Coulomb-atoms-September-24-2026/paper.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/263.md",
      "type": "形式化说明"
    }
  ]
},
{
  "id": "physics-2026-openai-mub-dimension-six",
  "domain": "physics",
  "date": "2026-10-06",
  "title": "OpenAI 发布六维互无偏基最大数为 3证明声明",
  "status": "review",
  "evidenceLevel": "reported",
  "actor": "OpenAI",
  "model": "OpenAI 未发布内部前沿模型",
  "summary": "目录第 266 族。声称 C⁶ 中存在三组互无偏正交基，却不存在四组，确定 N(6) = 3；排除四组依赖认证计算及指定 binary64 算术、编译器条件。",
  "impact": "关键区别：官方 Lean 说明只给出较弱的至多五组界和若干 Fourier / Hadamard 消去陈述，并明确没有建立论文的三组上界或排除任意四组的计算。因此保留论文与计算声明，不标“3 组上界已机检”。 本站核对完整概览及公开范围，未独立复核证明或编译 Lean。",
  "before": "长期开放问题 / 猜想",
  "after": "论文声明，待审阅",
  "featured": false,
  "sources": [
    {
      "title": "原始论文",
      "url": "https://github.com/openai/math/blob/main/preprints/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026/The-maximum-number-of-mutually-unbiased-bases-in-dimension-six-September-24-2026.pdf",
      "type": "证明手稿"
    },
    {
      "title": "官方完整说明 PDF",
      "url": "https://github.com/openai/math/blob/main/overview.pdf",
      "type": "官方概览"
    },
    {
      "title": "Lean 范围说明（本站未编译）",
      "url": "https://github.com/openai/math/blob/main/lean/docs/266.md",
      "type": "形式化说明"
    }
  ]
},
];

const SEED_MIGRATIONS = {
  14: ["math-2026-openai-goldfeld", "math-2026-openai-artin-primitive-roots", "math-2026-openai-mahler-volume-product", "math-2026-openai-hadwiger-counterexample", "math-2026-openai-kaplansky-zero-divisors", "math-2026-openai-thompson-nonamenable", "math-2026-openai-hilbert-smith", "physics-2026-openai-spacetime-penrose", "physics-2026-openai-coulomb-ionization", "physics-2026-openai-mub-dimension-six"],
  13: ["algorithms-2026-openai-perfect-two-to-one", "algorithms-2026-openai-three-colorable-hardness", "algorithms-2026-openai-permanent-border-cubic", "algorithms-2026-openai-perfect-matching-fpras", "algorithms-2026-openai-noncommutative-pit", "algorithms-2026-openai-uniform-sparsest-cut", "algorithms-2026-openai-bin-packing-mirup", "algorithms-2026-openai-metric-kmedian-threshold", "algorithms-2026-openai-sensitivity-superquadratic", "algorithms-2026-openai-etr-counting-hierarchy"],
  12: ["math-2026-erdos-728", "math-2026-gauss-sphere-packing", "math-2026-anderson-quasi-complete", "math-2026-alphaproof-nexus-research", "math-2026-cycle-double-cover", "math-2026-sendov-conjecture", "algorithms-2026-zero-order-oracle-bound", "algorithms-2026-goemans-cost-counterexample", "physics-2026-single-minus-gluon", "physics-2026-maxwell-counterexample", "math-2026-august-high-dimensional-packing", "math-2026-august-metric-code-bounds", "math-2026-august-nonsofic-group", "math-2026-august-connes-rigidity", "algorithms-2026-august-permanent-formula-bound", "algorithms-2026-august-quantum-parallel-repetition", "algorithms-2026-august-gap-cvp-hardness", "math-2026-august-ehrhart-volume", "math-2026-august-multicolor-triangle-ramsey", "math-2026-august-extremal-compactness-degeneracy"],
  11: ["math-2026-koethe-counterexample", "math-2026-smale-mean-value", "math-2026-critical-percolation", "math-2026-gromov-volume-growth", "algorithms-2026-strong-pr", "physics-2026-smooth-forced-euler", "physics-2026-smooth-forced-ipm", "physics-2026-pinn-euler-profile"],
  9: ["math-2026-openai-falconer", "math-2026-openai-hilbert-sixteenth", "math-2026-openai-plane-coloring", "math-2026-openai-erdos-reciprocal", "math-2026-openai-sidorenko", "cp-2026-openai-integer-multiplication", "cp-2026-openai-general-matching", "cp-2026-openai-edit-distance", "cp-2026-openai-three-machine-scheduling", "cp-2026-openai-shortest-superstring", "cp-2026-openai-finite-field-factorization", "physics-2026-openai-kerr-censorship", "physics-2026-openai-bose-condensation", "physics-2026-openai-bfss-bound-state"],
  8: ["physics-2026-openai-diluted-spin-glass", "physics-2026-openai-anderson", "physics-2026-openai-area-law", "physics-2026-openai-haldane-gap", "physics-2026-openai-laughlin-gap", "physics-2026-openai-heisenberg-magnetization", "physics-2026-openai-entropy-photon-number", "physics-2026-openai-vlasov-maxwell"],
  7: ["math-2026-openai-collection", "math-2026-openai-quasi-riemann", "math-2026-openai-hilbert-tenth-rationals", "math-2026-openai-bsd-low-corank", "math-2026-openai-hodge-cm-k3", "math-2026-openai-pi-exponent", "math-2026-openai-catalan", "math-2026-openai-chowla-two-point", "math-2026-openai-kakeya-3d-4d"],
  6: ["cp-2026-openai-ugc", "cp-2026-openai-logspace", "cp-2026-openai-matrix-nine-fourths", "cp-2026-openai-dft", "cp-2026-openai-subset-sum"],
  5: ["cp-2026-truly-subquadratic-3sum", "cp-2026-minplus-convolution", "cp-2026-truly-subcubic-apsp"],
  2: ["math-2026-jacobian-counterexample"],
  3: ["math-2026-prime-gaps-186"],
  4: ["math-2026-frontiermath-erdos", "math-2026-erdos-sos", "math-2026-amp-low-degree", "math-2026-planar-universal-points", "math-2026-erdos-sos-digraphs", "math-2026-liouville-goldbach", "math-2026-poincare-formalization", "math-2026-openai-hundred-problems", "physics-2026-nine-loop-amplitude", "biology-2026-art-enzyme"],
};

// Stable IDs retain compatibility with existing browser records and backups.
const LEGACY_ALGORITHM_DOMAINS = new Map(
  SEED_EVENTS.filter((event) => event.domain === "algorithms")
    .map((event) => [event.id, event.id.startsWith("cp-") ? "cp" : "math"])
);

function migrateAlgorithmDomain(event) {
  const previousDomain = LEGACY_ALGORITHM_DOMAINS.get(event.id);
  return previousDomain && event.domain === previousDomain
    ? { ...event, domain: "algorithms" }
    : event;
}

const state = {
  events: [],
  domain: "all",
  status: "all",
  search: "",
  descending: true,
  currentId: null,
};

const elements = {
  list: document.querySelector("#timeline-list"),
  empty: document.querySelector("#empty-state"),
  visibleCount: document.querySelector("#visible-count"),
  detailDialog: document.querySelector("#detail-dialog"),
  detailContent: document.querySelector("#detail-content"),
  formDialog: document.querySelector("#form-dialog"),
  form: document.querySelector("#event-form"),
  toast: document.querySelector("#toast"),
};

let database;
let toastTimer;

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;",
  })[character]);
}

function safeURL(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function formatDate(value, options = { year: "numeric", month: "2-digit", day: "2-digit" }) {
  return new Intl.DateTimeFormat("zh-CN", options).format(new Date(`${value}T00:00:00`));
}

function monthKey(value) {
  return value.slice(0, 7);
}

function monthLabel(value) {
  return formatDate(`${value}-01`, { year: "numeric", month: "long" });
}

function uniqueId() {
  return globalThis.crypto?.randomUUID?.() || `local-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("boundary-migration", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("milestones")) db.createObjectStore("milestones", { keyPath: "id" });
      if (!db.objectStoreNames.contains("meta")) db.createObjectStore("meta", { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function requestPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transactionPromise(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error || new Error("事务已取消"));
  });
}

async function ensureSeedData() {
  const readTransaction = database.transaction("meta", "readonly");
  const marker = await requestPromise(readTransaction.objectStore("meta").get("seed-version"));
  const currentVersion = Number(marker?.value || 0);
  if (currentVersion >= SEED_VERSION) return;

  const transaction = database.transaction(["milestones", "meta"], "readwrite");
  const store = transaction.objectStore("milestones");
  if (currentVersion === 0) {
    SEED_EVENTS.forEach((event) => store.put({ ...event, origin: "seed" }));
  } else {
    const migrationIds = new Set(Object.entries(SEED_MIGRATIONS)
      .filter(([version]) => Number(version) > currentVersion && Number(version) <= SEED_VERSION)
      .flatMap(([, ids]) => ids));
    SEED_EVENTS.filter((event) => migrationIds.has(event.id)).forEach((event) => {
      const request = store.get(event.id);
      request.onsuccess = () => {
        if (!request.result) store.put({ ...event, origin: "seed" });
      };
    });
  }
  if (currentVersion > 0 && currentVersion < 10) {
    for (const id of LEGACY_ALGORITHM_DOMAINS.keys()) {
      const request = store.get(id);
      request.onsuccess = () => {
        if (!request.result) return;
        const migrated = migrateAlgorithmDomain(request.result);
        if (migrated !== request.result) store.put(migrated);
      };
    }
  }
  transaction.objectStore("meta").put({ key: "seed-version", value: SEED_VERSION });
  await transactionPromise(transaction);
}

async function getEvents() {
  const transaction = database.transaction("milestones", "readonly");
  return requestPromise(transaction.objectStore("milestones").getAll());
}

async function putEvent(event) {
  const transaction = database.transaction("milestones", "readwrite");
  transaction.objectStore("milestones").put(event);
  await transactionPromise(transaction);
}

async function removeEvent(id) {
  const transaction = database.transaction("milestones", "readwrite");
  transaction.objectStore("milestones").delete(id);
  await transactionPromise(transaction);
}

async function replaceEvents(events) {
  const transaction = database.transaction(["milestones", "meta"], "readwrite");
  const store = transaction.objectStore("milestones");
  store.clear();
  events.forEach((event) => store.put(event));
  transaction.objectStore("meta").put({ key: "seed-version", value: SEED_VERSION });
  await transactionPromise(transaction);
}

function filteredEvents() {
  const query = state.search.trim().toLocaleLowerCase("zh-CN");
  return state.events
    .filter((event) => state.domain === "all" || event.domain === state.domain)
    .filter((event) => state.status === "all" || event.status === state.status)
    .filter((event) => {
      if (!query) return true;
      const sourceTitles = (event.sources || []).map((source) => source.title).join(" ");
      return [event.title, event.summary, event.impact, event.actor, event.model, sourceTitles]
        .join(" ")
        .toLocaleLowerCase("zh-CN")
        .includes(query);
    })
    .sort((a, b) => (state.descending ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)) || a.title.localeCompare(b.title, "zh-CN"));
}

function evidenceClass(level) {
  return ["verified", "community"].includes(level) ? level : "reported";
}

function renderEvent(event) {
  const complexity = event.before || event.after ? `
    <div class="complexity">
      ${event.before ? `<span>${escapeHTML(event.before)}</span>` : ""}
      ${event.before && event.after ? '<b aria-hidden="true">→</b>' : ""}
      ${event.after ? `<span>${escapeHTML(event.after)}</span>` : ""}
    </div>` : "";

  return `
    <article class="event-card ${escapeHTML(event.domain)} ${event.featured ? "featured" : ""}">
      <div class="event-main">
        <div class="event-meta">
          <span class="domain-tag ${escapeHTML(event.domain)}">${DOMAIN[event.domain]}</span>
          <span class="status-tag">${STATUS[event.status] || "未分类"}</span>
          <span>${escapeHTML(event.actor || "未署名")}</span>
        </div>
        <h3 class="event-title">${escapeHTML(event.title)}</h3>
        <p class="event-summary">${escapeHTML(event.summary)}</p>
        ${complexity}
        <div class="evidence-row">
          <span><i class="${evidenceClass(event.evidenceLevel)}"></i>${EVIDENCE[event.evidenceLevel] || "来源待补"}</span>
          <span>${(event.sources || []).length} 个来源</span>
        </div>
      </div>
      <div class="event-side">
        <time class="event-date" datetime="${escapeHTML(event.date)}">${formatDate(event.date)}</time>
        <button class="event-open" type="button" data-event-id="${escapeHTML(event.id)}">查看证据</button>
      </div>
    </article>`;
}

function render() {
  const events = filteredEvents();
  const groups = new Map();
  events.forEach((event) => {
    const key = monthKey(event.date);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  });

  elements.list.innerHTML = [...groups.entries()].map(([month, monthEvents]) => `
    <section class="month-group" aria-labelledby="month-${month}">
      <h3 class="month-label" id="month-${month}">${monthLabel(month)}</h3>
      <div class="month-events">${monthEvents.map(renderEvent).join("")}</div>
    </section>`).join("");

  elements.visibleCount.textContent = events.length;
  elements.empty.hidden = events.length !== 0;
  elements.list.hidden = events.length === 0;

  const hosts = new Set();
  state.events.forEach((event) => (event.sources || []).forEach((source) => {
    try { hosts.add(new URL(source.url).hostname.replace(/^www\./, "")); } catch { /* Ignore invalid local entries. */ }
  }));
  document.querySelector("#stat-total").textContent = state.events.length;
  document.querySelector("#stat-math").textContent = state.events.filter((event) => event.domain === "math").length;
  document.querySelector("#stat-cp").textContent = state.events.filter((event) => event.domain === "cp").length;
  for (const domain of ["algorithms", "physics", "biology"]) {
    document.querySelector(`#stat-${domain}`).textContent = state.events.filter((event) => event.domain === domain).length;
  }
  document.querySelector("#stat-sources").textContent = hosts.size;
}

function showDetail(id) {
  const event = state.events.find((item) => item.id === id);
  if (!event) return;
  state.currentId = id;
  const sources = (event.sources || []).map((source) => `
    <li><a href="${escapeHTML(safeURL(source.url))}" target="_blank" rel="noreferrer">
      <span>${escapeHTML(source.title)}</span><small>${escapeHTML(source.type || "来源")} ↗</small>
    </a></li>`).join("");

  elements.detailContent.innerHTML = `
    <div class="detail-domain">${DOMAIN[event.domain]} · ${formatDate(event.date)} · ${STATUS[event.status] || "未分类"}</div>
    <h2>${escapeHTML(event.title)}</h2>
    <p class="detail-lead">${escapeHTML(event.summary)}</p>
    <div class="detail-grid">
      <div><span>参与者 / 机构</span><strong>${escapeHTML(event.actor || "未注明")}</strong></div>
      <div><span>模型</span><strong>${escapeHTML(event.model || "未注明")}</strong></div>
      <div><span>旧边界</span><strong>${escapeHTML(event.before || "未量化")}</strong></div>
      <div><span>新结果</span><strong>${escapeHTML(event.after || "未量化")}</strong></div>
    </div>
    <div class="detail-impact"><h3>为什么重要</h3><p>${escapeHTML(event.impact || "尚未补充编辑说明。")}</p></div>
    <div class="source-list"><h3>证据与来源 · ${EVIDENCE[event.evidenceLevel] || "待补充"}</h3><ul>${sources || "<li>暂无来源</li>"}</ul></div>`;
  elements.detailDialog.showModal();
}

function openForm(event = null) {
  elements.form.reset();
  document.querySelector("#form-title").textContent = event ? "编辑里程碑" : "补充里程碑";
  const fields = elements.form.elements;
  if (event) {
    fields.id.value = event.id;
    ["domain", "date", "title", "status", "evidenceLevel", "actor", "model", "summary", "impact", "before", "after"].forEach((key) => {
      fields[key].value = event[key] || "";
    });
    fields.sourceTitle.value = event.sources?.[0]?.title || "";
    fields.sourceUrl.value = event.sources?.[0]?.url || "";
  } else {
    fields.id.value = "";
    fields.date.value = new Date().toISOString().slice(0, 10);
    fields.status.value = "progress";
    fields.evidenceLevel.value = "reported";
  }
  elements.formDialog.showModal();
}

async function saveForm(formData) {
  const existing = state.events.find((event) => event.id === formData.get("id"));
  const event = {
    ...(existing || {}),
    id: existing?.id || uniqueId(),
    domain: formData.get("domain"),
    date: formData.get("date"),
    title: formData.get("title").trim(),
    status: formData.get("status"),
    evidenceLevel: formData.get("evidenceLevel"),
    actor: formData.get("actor").trim(),
    model: formData.get("model").trim(),
    summary: formData.get("summary").trim(),
    impact: formData.get("impact").trim(),
    before: formData.get("before").trim(),
    after: formData.get("after").trim(),
    sources: [{ title: formData.get("sourceTitle").trim(), url: safeURL(formData.get("sourceUrl")), type: existing?.sources?.[0]?.type || "手动补充" }],
    origin: existing?.origin || "local",
    editedAt: new Date().toISOString(),
  };
  await putEvent(event);
  const index = state.events.findIndex((item) => item.id === event.id);
  if (index >= 0) state.events.splice(index, 1, event);
  else state.events.push(event);
  render();
  elements.formDialog.close();
  showToast(existing ? "里程碑已更新" : "里程碑已保存到本地");
}

function exportData() {
  const payload = JSON.stringify({
    schema: "boundary-migration/v1",
    exportedAt: new Date().toISOString(),
    milestones: state.events,
  }, null, 2);
  const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `boundary-migration-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("备份已导出");
}

async function importData(file) {
  const payload = JSON.parse(await file.text());
  if (!Array.isArray(payload.milestones)) throw new Error("文件中没有 milestones 数组");
  const valid = payload.milestones.every((event) => event.id && event.date && event.title && Object.hasOwn(DOMAIN, event.domain));
  if (!valid) throw new Error("里程碑数据格式不完整");
  if (!confirm(`将用备份中的 ${payload.milestones.length} 条记录覆盖当前本地数据，继续吗？`)) return;
  await replaceEvents(payload.milestones.map(migrateAlgorithmDomain));
  state.events = await getEvents();
  render();
  showToast("本地档案已恢复");
}

function clearFilters() {
  state.domain = "all";
  state.status = "all";
  state.search = "";
  document.querySelectorAll("[data-domain]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.domain === "all")));
  document.querySelector("#status-filter").value = "all";
  document.querySelector("#search-input").value = "";
  render();
}

function bindEvents() {
  document.querySelectorAll("[data-domain]").forEach((button) => button.addEventListener("click", () => {
    state.domain = button.dataset.domain;
    document.querySelectorAll("[data-domain]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    render();
  }));

  document.querySelector("#status-filter").addEventListener("change", (event) => {
    state.status = event.target.value;
    render();
  });

  document.querySelector("#search-input").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  document.querySelector("#sort-button").addEventListener("click", (event) => {
    state.descending = !state.descending;
    event.currentTarget.textContent = state.descending ? "最新优先 ↓" : "最早优先 ↑";
    render();
  });

  elements.list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-event-id]");
    if (button) showDetail(button.dataset.eventId);
  });

  document.querySelector("#add-button").addEventListener("click", () => openForm());
  document.querySelector("#export-button").addEventListener("click", exportData);
  document.querySelector("#clear-filters").addEventListener("click", clearFilters);

  document.querySelector("#import-input").addEventListener("change", async (event) => {
    const [file] = event.target.files;
    if (!file) return;
    try { await importData(file); } catch (error) { showToast(`导入失败：${error.message}`); }
    event.target.value = "";
  });

  elements.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try { await saveForm(new FormData(elements.form)); } catch (error) { showToast(`保存失败：${error.message}`); }
  });

  document.querySelector("#edit-event").addEventListener("click", () => {
    const event = state.events.find((item) => item.id === state.currentId);
    elements.detailDialog.close();
    if (event) openForm(event);
  });

  document.querySelector("#delete-event").addEventListener("click", async () => {
    const event = state.events.find((item) => item.id === state.currentId);
    if (!event || !confirm(`删除“${event.title}”？此操作只影响当前浏览器。`)) return;
    await removeEvent(event.id);
    state.events = state.events.filter((item) => item.id !== event.id);
    elements.detailDialog.close();
    render();
    showToast("里程碑已删除");
  });

  document.querySelectorAll(".close-dialog, .cancel-dialog").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
  document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }));
}

async function init() {
  bindEvents();
  try {
    database = await openDatabase();
    await ensureSeedData();
    state.events = await getEvents();
    render();
  } catch (error) {
    console.error(error);
    elements.list.innerHTML = '<div class="empty-state"><p>本地数据库初始化失败，请使用现代浏览器重试。</p></div>';
    showToast("本地数据库初始化失败");
  }
}

init();

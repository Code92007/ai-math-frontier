const STATUS = {
  solved: "已解决",
  progress: "实质推进",
  formalized: "形式化",
  benchmark: "基准跨越",
  community: "社区复现",
  review: "待审阅",
};

const DOMAIN = { math: "数学界", cp: "算法竞赛界", physics: "物理界", biology: "生物界" };
const EVIDENCE = {
  verified: "已核验 / 可机检",
  reported: "机构或作者发布",
  community: "社区整理 / 复现",
};

const SEED_VERSION = 5;
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
    domain: "math",
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
    "domain": "math",
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
    "domain": "cp",
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
    "domain": "cp",
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
    "domain": "cp",
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
];

const SEED_MIGRATIONS = {
  5: ["cp-2026-truly-subquadratic-3sum", "cp-2026-minplus-convolution", "cp-2026-truly-subcubic-apsp"],
  2: ["math-2026-jacobian-counterexample"],
  3: ["math-2026-prime-gaps-186"],
  4: ["math-2026-frontiermath-erdos", "math-2026-erdos-sos", "math-2026-amp-low-degree", "math-2026-planar-universal-points", "math-2026-erdos-sos-digraphs", "math-2026-liouville-goldbach", "math-2026-poincare-formalization", "math-2026-openai-hundred-problems", "physics-2026-nine-loop-amplitude", "biology-2026-art-enzyme"],
};

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
  for (const domain of ["physics", "biology"]) {
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
  await replaceEvents(payload.milestones);
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

# Pricing 页面评审问题清单

评审对象：pricing 页面最新实现（7 张截图）
参考口径：octen.ai 主站、docs.octen.ai/overview/pricing、docs.octen.ai/overview/introduction、docs.octen.ai/resources/rate-limits

---

## P0 — 上线前必须修

### 1. `Get Start` 语法错误（两处）

| 位置 | 现状 | 改为 |
| --- | --- | --- |
| Hero CTA | `Get Start` | `Start Building` |
| 末尾 CTA | `Get Start` | `Start Building` |

主站用的是 `Start Building` / `Get started` / `Get API key`，没有 `Get Start`。

---

### 2. Embedding 卡模型明细不完整

现状只列了两个模型，漏掉 `octen-embedding-4b`：

```
octen-embedding-8b     $0.07 / 1M tokens
octen-embedding-0.6b   $0.01 / 1M tokens
```

两个方案任选，**不要停在现在这个状态**（既透出又不完整）：

- **方案 A（推荐）**：不列模型明细，只保留区间 `$0.01 – $0.07 / 1M tokens` + 一句 `Smaller models cost less, larger models rank better`，明细指向 docs。后续新增模型不用改页面。
- **方案 B**：补齐第三行 `octen-embedding-4b  $0.04 / 1M tokens`。

---

### 3. 末尾 CTA 承诺了联系方式但没有入口

文案：`For custom QPS plans, higher rate limits, or billing inquiries, please contact us.`
按钮：`Get Start` + `View Docs` —— 没有任何联系入口。

改为：

```
Start building with Octen
For custom QPS plans, higher rate limits, or billing questions, talk to us.
[ Start Building ]   [ Contact sales ]
```

`View Docs` 可去掉，页面各处已有 docs 链接。

---

### 4. 八张 API 卡缺体验入口

已确认每个 API 有独立的 API / APP playground 链接。八张卡目前一个按钮都没有。

统一用 `Get started`，放在卡片底部带的右侧：

| 卡片 | 目标 |
| --- | --- |
| Web Search | Web Search playground |
| Image & Video Search | Image Search playground（无权限时页内有申请入口） |
| Extract | Extract playground |
| Embedding | Embedding playground |
| VL Embedding | VL Embedding playground |
| Answer & Multimodal Chat | APP playground |
| Deep Research | APP playground |
| Grounded Generation | APP playground |

---

### 5. QPS 卡权益重复四遍

`Dedicated priority queue` / `Guaranteed throughput and SLA` / `Standard email support` 在 Startup、Pro、Scale 三张卡里逐字重复，下方 `All paid plans include` 条又说了一遍。

**改法**：三张付费卡内只保留 QPS 数字和价格，共同权益只在说明条出现一次。

**附带收益**：目前 Pro（$13,999）和 Scale（$33,999）相对 Startup（$2,099）的权益列表一字不差，四张卡并排时这件事一眼可见，销售无法解释价差。抽掉重复即消除这个暴露面。

> 注：权益本身的差异化（SLA 等级、支持响应时长、ZDR 下放等）是商业决策，需另行确认，不阻塞本次修改。

---

### 6. How Octen works 副标题

现状：`To use Octen, you need both pay-as-you-go API credits and a monthly QPS Plan`

两个问题：

1. `need` 暗示一个必须完成的动作。Free 档是自动分配、$0、无需操作，配上 `monthly` 读者第一反应是"两笔钱"，出现在漏斗最上层。
2. 只用 Embedding / Extract 的客户，QPS Plan 不管他任何实际调用（那些走 TPM / RPM），把 Octen 描述成"credits + QPS Plan"对他不适用。

改为：

```
Usage is billed as you go. Your QPS Plan sets reserved search throughput — Free by default.
```

更短的版本：

```
Pay as you go for usage. Add QPS when you need reserved search throughput.
```

> 同屏内两张卡本身是准确的（`Covers actual API and token usage` / `Reserves your max search QPS`），只有副标题不准。

---

## P1 — 建议本次一并修

### 7. Extract 单位

`$1 / 1k successful URLs` → `$1 / 1k URLs`

描述里已有 `Only successful parses are billed`，"successful" 说了两遍；同时避免口径未来变化要改单位。

### 8. Free 卡 `Standard community support`

有 Discord / 论坛就给链接，没有就删掉。同时注意：付费档写 `Standard email support`，反向暗示免费用户发邮件不会有人回 —— 确认这是否是实际做法。

### 9. tab 必须 SSR + URL hash

- 四个 tab 的内容全部 SSR 进 HTML，用 CSS 控制显隐，**不要条件渲染**。否则爬虫和 LLM 只能拿到 Search 一屏，而客户会让 AI 读价格页做选型。
- tab 状态写进 URL hash（`/pricing#embedding`），销售才能发定向链接。

### 10. FAQ 孤儿题

`How do Prompt Cache Read and Write discounts work?` —— 整页从未提 prompt cache（Model Gateway 费率已移至 docs）。移到 docs。

### 11. FAQ 与 Hero 术语不一致

| 位置 | 现状 | 问题 |
| --- | --- | --- |
| Hero | `$5 free balance` | — |
| FAQ | `How do I claim my $5 free credit?` | `credit` 与 `balance` 不一；`claim` 暗示手动领取，实际是注册自动到账 |

FAQ 改为 `Is the $5 free balance automatic?`

### 12. Enterprise QPS 表述自相矛盾

`Up to 1M+ QPS` —— `Up to` 是上限、`1M+` 是下限。改为 `1M+ QPS`。

### 13. Hero 副标题定位偏移

现状：`Enhance your AI Engineering with Octen's Real-Time Search Engine`

- 主站从头到尾说 **search infrastructure**，一次没说 `search engine`。后者听起来像消费级产品。
- 主站语域是陈述式名词短语（`Search infrastructure for AI`、`The complete retrieval stack`、`Built to Perform`），没有 `Enhance your…` 这种泛动词开头。
- `AI Engineering` 首字母大写当专有名词，主站无此习惯。

建议：

```
Plans and Pricing
Usage-based pricing for the search infrastructure behind your agents.
Sign up and get $5 in free balance.
[ Start Building ]
```

### 14. 末尾 CTA 标题

`Ready to enhance your AI Engineering with Octen?` —— 与 #13 同一问题。改为 `Start building with Octen`。

### 15. `Subscribe QPS Plan` 缺介词

改为 `Subscribe to a QPS Plan`（docs 里就是这个写法）。

### 16. Web Search 价格排版

`$1 $5 / 1k calls` —— 划线原价夹在现价和单位之间，读起来是三段。改为现价 + 单位连在一起，划线原价放后面或前面。

---

## P2 — 打磨

| # | 位置 | 问题 | 建议 |
| --- | --- | --- | --- |
| 17 | Model Gateway 条 | 过长，且用了 `&` | 压成 `One API for top-tier models, with Octen Search built in. Powers the models behind Answer, Deep Research, and Grounded Generation.` |
| 18 | 术语 | tab 写 `Embedding`（单数），说明条写 `Embeddings`（复数） | 统一 |
| 19 | PAYG 分节描述 | `Real-time retrieval from the live web.` 浮在 tab 条右侧，和它描述的卡片区脱离 | 移到 tab 条下方、卡片上方，左对齐 |
| 20 | H1 | `Plan and Pricing` 单数，但页面有多个 plan | `Plans and Pricing` |
| 21 | Multimodal Chat / Grounded Generation | 主站标 Early Access，价格页未体现 | 确认是否需要标注，以及 playground 有无申请入口 |
| 22 | 促销 | `80% Off` / `30% Off` 无任何期限说明 | 页头加一条 `Launch pricing — discounted rates, subject to change`。无期限促销会被当成常规价，未来恢复原价迁移成本高 |

---

## 非页面问题 — 需另行确认

| 项 | 说明 |
| --- | --- |
| Deep Research 并发 | rate limits 文档写「Only a single concurrent request is supported」。$2.50 / 次的定价配单并发，对想跑量的客户是硬阻塞。确认是文档过时还是现状；若是现状，Deep Research 卡可能需要一句说明 |
| QPS Plan 覆盖范围的结构性误解 | QPS Plan 只管 Broad Search + Web Search，其余走 TPM / RPM 且不随套餐分档。付 $33,999 买 Scale 的客户，Extract 仍是 100 RPM、Deep Research 仍是单并发。文案已披露，但"套餐 = 账号档位"的心智很难靠副标题消除。可考虑套餐改名 `Search QPS Plan`（涉及 console / docs 一并改名） |
| Pro / Scale 价格曲线 | QPS 涨 4 倍、价格涨 6.7 倍，单位 QPS 成本反而更高（Startup $42、Pro $70、Scale $68），且无额外权益 |
| Volume discounts 覆盖范围 | 若折扣只对 Model Gateway 生效、不覆盖 search，放在 Enterprise 通用清单会被理解成所有用量可谈 |
| 后付费 | 上线后 Enterprise 可加 `Pay by invoice (NET 30)`；未上线前不写 |

---

## 已确认无需改动

- 四分节结构（Search / Extract / Embedding / Applications）与卡片形态
- `1 call / request` vs `1 call / sub-query` 的并列句式
- Full Content 作为 add-on 独立成行
- Embedding / VL Embedding 的 `SOTA on RTEB` / `SOTA on MMEB-v2` 背书
- Answer → `Broad Search + LLM`、Multimodal Chat → `Multimodal Search + LLM`
- Enterprise 六条清单与 `Custom` 价格位
- QPS 说明条的范围限定与 `429` 表述
- `Upgrades take effect immediately; downgrades take effect the following month`

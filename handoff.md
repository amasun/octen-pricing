# 项目交接文档 (Project Handoff Document) - Octen Pricing

## 1. 📌 项目概览
- **项目名称**: Octen Pricing Mobile-Friendly Web Application
- **技术栈**: React 19 + Vite 8 + TypeScript 5.7 + Tailwind CSS v4 + GSAP + Lenis
- **远程仓库**: `https://github.com/amasun/octen-pricing.git`
- **主分支**: `master`

---

## 2. 🛠️ 快速启动与构建指南
```bash
# 1. 安装依赖（推荐使用 pnpm）
pnpm install

# 2. 本地开发调试
pnpm dev

# 3. 生产环境构建
pnpm build
```

---

## 3. 📁 关键目录与组件架构
- `src/App.tsx` - 主应用页面逻辑与分节组合
- `src/components/Navbar.tsx` - 导航栏及移动端响应式菜单
- `src/components/HeroSection.tsx` - 头部 Hero 区块与动效
- `src/components/ApiExplorer.tsx` - API 定价卡片（含 Web Search、Broad Search、Full Content、Image & Video Search）
- `src/components/QpsPricingGrid.tsx` - QPS 阶梯定价表及计算逻辑
- `src/components/FaqSection.tsx` - 常见问题手风琴组件
- `pricing-review-checklist.md` - 定价方案评审与对齐清单

---

## 4. 🎨 核心修改记录与设计规范
1. **命名规范对齐**：
   - 将原 `Full Content (Add-on)` 规范为 `Full Content`。
2. **Early Access 标识样式**：
   - Image & Video Search 卡片统一配置为绿底黑字/绿字高亮徽章（字间距 `tracking-tighter`）。
3. **响应式与排版优化**：
   - 优化了卡片在窄屏/移动端下的文本自动折行与对齐规范。
4. **Pay-As-You-Go 方案对比与三套架构 (Plan A vs Plan B vs Plan C)**：
   - 页面左侧内容区外提供全英文、极简垂直列表悬浮对比控件（Layout: Plan A / Plan B / Plan C）。
   - **Plan A**：顶部吸顶分类 Tabs 栏 + 直排 Bento 平铺卡片布局。
   - **Model Tokens 统称拉齐 (Token Naming Unification)**：
     - 在 Plan A 与 Plan B 的 `MultimodalChatCard` 及 `AnswerCard` 中，将原 `Vision tokens` 统一调整为 `Model tokens`，下挂于 `Search calls + model tokens` 总览下，计费说明统一显示为 `Gateway rates`。
   - **Enterprise Custom 卡片精简为 4 条特性（2×2 栅格排列） (Enterprise Features 4 Items 2x2 Grid)**：
     - 精简 Enterprise 卡片中间的特性条目为指定的 4 项：
       1. `1M+ QPS`（分支架构图标）
       2. `Zero Data Retention (ZDR)`（数据安全图标）
       3. `Dedicated Slack channel support`（Slack 专属渠道图标）
       4. `Volume discounts`（折扣图表图标）
     - 排版采用 `2 行 × 2 列`（`sm:grid-rows-2 sm:grid-cols-2`）的纵向优先栅格布局，与提供的设计参考图 100% 对齐。
   - **QPS Plan 卡片价格 $ 符号顶对齐与 / month 原始样式保留 (QPS Plan Price Alignment & Period Style)**：
     - 在 QPS Plan 卡片价格展示区，通过 `self-start` 将 `$` 美元符号与大号价格数字的顶部精准对齐；
     - 同时完全保留了大号数字的行高基准与 `/ month` 周期文案的原有字号、行高（`text-[14px] leading-[20px] text-[#57575E]`）及底部基线对齐位置，确保整体排版稳定不跳动。
   - **QPS Plan 卡片行动按钮文案统一为 `Get started` (QPS Plan Cards Button Label)**：
     - 将 **Startup**、**Pro**、**Scale** 卡片底部的行动按钮文案由 `Subscribe` 统一修改为 **`Get started`**；
     - 保持 **Free** 卡片的 `Start Free` 与 **Enterprise** 卡片的 `Contact Sales` 不变。
   - **How Octen Works 卡片原生 HTML 锚点定位优化 (How Octen Works Native Anchor Fix)**：
     - 将卡片主体改为原生 HTML `<a href="#pay-as-you-go">` 和 `<a href="#qps-plans">` 超链接标签，彻底摒弃 JS 滚动状态单次锁死的缺陷；
     - 目标容器统一配置 `scroll-mt-[90px]`，配合全局 `scroll-behavior: smooth`，无论是首次点击还是反复多次点击，均能 100% 稳定平滑滚动定位到准确视图位置；
     - 内置行动按钮采用标准 `<button type="button">` + `window.open` 隔离事件冒泡，互不干扰。
   - **How Octen Works 卡片双重交互逻辑规范 (How Octen Works Dual Interaction Model)**：
     - **按钮点击**（`Get an API key` / `Get higher QPS`）：携带 `e.stopPropagation()` 独立触发新标签页跳转（分别至 `/platform/api-keys` 和 `/platform/billing`）；
     - **卡片其余区域点击**：触发平滑锚点滚动，左侧卡片滚至 `#pay-as-you-go`（API 计费区），右侧卡片滚至 `#qps-plans`（QPS 价格方案区）；
     - 卡片整体保持手型指针 `cursor-pointer` 与悬浮微动浮起反馈，交互层次严密清晰。
   - **How Octen Works 卡片行动按钮文案更新 (How Octen Works Action Button Label)**：
     - 将 **Subscribe to a QPS Plan** 卡片底部的行动按钮文案由 `Get started` 更新为 **`Get higher QPS`**（跳转至 `https://octen.ai/platform/billing`）。
   - **How Octen Works 卡片行动按钮跳转链接配置 (How Octen Works Action Button Links)**：
     - **Get an API key**（Pay as you go 卡片）：跳转至 **`https://octen.ai/platform/api-keys`**；
     - **Get started**（Subscribe to a QPS Plan 卡片）：跳转至 **`https://octen.ai/platform/billing`**；
     - 均配置 `target="_blank"` 与 `rel="noopener noreferrer"`，保持用户体验流畅。
   - **Plan C 矩阵表格顶部圆角白色背景溢出修复 (Plan C Table Corner Radius Overflow Fix)**：
     - 移除了 `thead` 和 `tr` 上全局方角 `bg-white` 造成的溢出层；
     - 将顶层左右两端 `th` 及底层两端 `td` 的圆角内径精准设为 `15px / 19px`（完美贴合外容器 `16px / 20px` 减去 1px 边框）；
     - 移除动态圆角动画过渡造成的浏览器渲染延迟残影，确保在滚动置顶和回滚至初始位置时圆角始终贴合严密，绝无白底溢出。
   - **Plan C 矩阵表格双层表头背景色调换与全量统一 (Plan C Dual-Header Color Swap & Fix)**：
     - **第一层表头（Main Sticky Column Header: Endpoint/Model, Unit Price, Details）**：背景色统一为 **纯白 `bg-white`**；
     - **第二层表头（Category Sticky Rows: Search, Extract, Embedding, VL Embedding, Applications）**：背景色全部统一为 **原第一层的质感灰色 `bg-[#F8F8F5]`**，修复了遗留的 VL Embedding 分类行背景色差异。
   - **Plan A-C 移除 Model Gateway 卡片 Hover 状态样式变化 (Model Gateway No Hover Effects)**：
     - 在 Plan A、Plan B、Plan C 中，彻底移除了 `Model Gateway` 卡片容器本身的 `hover:shadow` 及 `hover:border` 等悬浮变化效果，保持卡片背景与边框在鼠标滑过时静止沉稳，仅保留内部可点击链接（View model rates / View rebate details）的文字交互反馈。
   - **Model Gateway 卡片内边距调整为 20px (Model Gateway Padding = 20px)**：
     - 将 Model Gateway 卡片的内边距统一设为 **`p-[20px]`**，与子卡片内边距视觉比例更均衡统一。
   - **Model Gateway 标题新增专有像素 SVG 图标 (Model Gateway Title Icon)**：
     - 在 `Model Gateway` 标题前方添加了专属网关矩阵矢量图标（`18px` 黑色矢量路径），与各分类图标规范保持一致。
   - **Plan B 4 大分类默认移除投影 & Model Gateway 背景设为外壳一致灰 (Plan B Shells Shadow Removal & #F4F4F4 Gray Box)**：
     - 将 Plan B 中 4 大分类外壳（Search、Extract、Embedding、Applications）默认自带的 `shadow-[0_2px_12px_rgba(0,0,0,0.02)]` 统一移除，使外壳呈现更干净平整的现代高级质感；
     - 将 Applications 外壳内部的 `Model Gateway` 模块背景色设为与 Applications 外壳**完全一致的默认背景灰 `#F4F4F4`**（`bg-[#F4F4F4]`，边框对齐 `border-[#E2E2DE]`），使其与外壳色调融为一体，同时与上方 4 张白色子卡片形成清晰自然的层次对比。
   - **Plan B 将 Model Gateway 合并入 Applications 外壳大卡片 (Plan B Model Gateway In-Shell Merge)**：
     - 将 Model Gateway 介绍与返利卡片移入 Plan B 的 `Applications` 外壳大卡片（Amber Gold -> Sunset Coral 渐变发光外壳）内部，位于 4 张应用卡片下方；
     - 样式设为 `bg-white` 配合 `hover:border-[#F59E0B]/70`，与 Applications 外壳内其他白底子卡片保持一致的内边距与间隙（`8px` 内边距 + `12px` 间距），整体视觉更具层级与完整度。
   - **Model Gateway 说明卡片正文文字样式调整 (Model Gateway Box Typography)**：
     - 将 Model Gateway 介绍卡片中的正文段落（`One API for top-tier LLM and multimodal models, with Octen Search built in — ...`）字号统一调整为 **`14px`**（`text-[14px] leading-[21px]`），颜色调整为 **`#57575E`**（`rgb(87, 87, 94)`）。
   - **Plan B Applications 分类 Search API + Model Gateway 标签背景透明度调整 (Plan B Badge 0.5 Opacity)**：
     - 将 Plan B 中 Applications 外壳标题右侧的 `Search API + Model Gateway` 标签背景色从 `bg-white/90` 调整为 **`bg-white/50`**（0.5 半透明磨砂质感），与外壳的弥散渐变背景更加融合自然。
   - **Plan A / Plan B 卡片辅助文字改为自动高度并收紧下边距 (Card Subtitle Auto Height & Tight Spacing)**：
     - 移除了 `WebSearchCard` 和 `ImageVideoSearchCard` 原先的 `min-h-[36px]` 固定最小高度，改为纯自然内容自适应高度；
     - 将 Plan A / Plan B 所有卡片标题下方的辅助文案下边距从 `mb-[18px]` 精细优化为 **`mb-[14px]`**；
     - 彻底消除了因字号减小后原最小高度造成的上下空旷大间距问题，价格区块与上方副标题视觉联系更紧凑、精致。
   - **Hero 区域 Pad / 平板端严重错位与文字垂直折叠 Bug 修复 (Hero Section Pad / Tablet Responsive Fix)**：
     - **Bug 根因分析**：
       - `HeroSection` 外层容器此前存在硬编码类名 `sm:px-[320px]`，在 Pad / 平板（640px ~ 1024px，如 iPad 768px）宽度下，左右内边距合计占用了 `640px`，导致可用内容区仅剩 100px 左右；
       - `HeroHeader` 标题区同时存在 `md:px-[156px]`（左右内边距 312px），导致可用排版宽度被完全挤压至负数/零，强制 `Plans and Pricing` 逐字折行为 6 行（`S \n an \n d \n Pr \n ici \n ng`）并纵向顶起覆盖了顶部导航栏。
     - **修复方案**：
       - 移除 `HeroSection` 的硬编码 `sm:px-[320px]`，替换为自适应响应式内边距 `px-4 sm:px-6 md:px-8`，设置合理的 `pt-[84px] pb-[44px]` 与 `min-h-[440px] sm:min-h-[480px]` 呼吸间距，彻底杜绝与吸顶 Navbar 碰撞；
       - 移除 `HeroHeader` 的 `md:px-[156px]`，标题字号调整为阶梯式自适应 `text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] leading-tight`，副标题最大宽度设为 `max-w-[720px]`；
       - 优化 Navbar 内部链接间距在 `md`（平板）断点下的 `gap`（`gap-[20px] md:gap-[28px] lg:gap-[48px]`），确保 Pad 端全屏无任何重叠、无水平溢出、标题单行优美排版。
   - **Plan B 4 大分类右侧辅助文字规范调整 (Plan B Category Subtitle Typography)**：
     - 将 Plan B 中 4 大外壳分类（Search、Extract、Embedding、Applications）右侧的辅助说明文字字号设置为 **`14px`**（`text-[14px] leading-[21px]`），颜色设置为 **`rgb(87, 87, 94)`**（`#57575E`）。
   - **Plan B Search 外壳大卡片 Hover Border 颜色调整 (Plan B Search Outer Shell Hover Border)**：
     - 将 Plan B 中 Search 模块外壳大卡片的悬浮边框颜色从 `hover:border-[#70FE7E]/70` 调整为更深更沉稳的翡翠绿 **`hover:border-[#1FBC2E]/70`**。
   - **Plan A 与 Plan B 标题下方辅助说明样式与 Plan C 全量对齐 (Plan A & B Subtitle Helper Text Alignment with Plan C)**：
     - 将方案 A 和方案 B 中所有卡片（Web Search, Image/Video Search, Extract, Embedding, VL Embedding, Answer, Multimodal Chat, Deep Research, Grounded Gen）标题下方的辅助说明段落，以及 ModelGatewayBox、Plan A 吸顶栏描述、Plan B 外壳分类栏描述，统一调整为方案 C 标准规范（`12px` / `leading-[18px]` / `#8B8B8B`）。
   - **Applications 4 列卡片 Early Access 标签防折行自适应优化 (Applications 4-Col Early Access Single-Line Layout)**：
     - 优化 `Multimodal Chat` 与 `Grounded Gen` 两个带有 `Early Access` 标签的卡片：
       - 将 Applications 4 列卡片内边距调整为更贴合 4 栏紧凑栅格的 `p-[18px] sm:p-[20px]`；
       - 标题容器配置 `flex-nowrap` 与 `shrink-0`，标题字号设为 `text-[16px] sm:text-[17px] xl:text-[18px]`；
       - `Early Access` 胶囊优化为高质感紧凑尺寸（`h-[19px] px-[5px] text-[10.5px]`），在 PC 端各分辨率（1024px ~ 1920px+）下标题与标签均保持整洁的一行显示，彻底杜绝折行下掉问题。
   - **Plan C 搜索计费单行精简规范（方案 A · Option A Simplification）**：
     - **Web Search API**：`$1 $5 / 1k calls [80% Off]` | `Full content: $0.5 / 1k results (10 free results / call)`
     - **Broad Search API**：**`$1 $5 / 1k sub-queries [80% Off]`** | `Full content: $0.5 / 1k results (10 free results / sub-query)`
     - **Image / Video Search API**：`$5 / 1k calls`
     - 语法规范严谨（复数 `/ 1k sub-queries`，单数 `10 free results / sub-query`），单行视觉通透整洁，与其它端点保持完全一致的高端版面风格。
   - **VL Embedding 专属多模态矢量图标替换 (VL Embedding Custom SVG Icon)**：
     - 为 `VL Embedding` 独立接入专用多模态视觉网格与节点连接 SVG 图标（`VlEmbeddingCategoryIcon`），替换原先与通用 Embedding 混用的单一网络图标。
   - **Applications 计费标签样式对齐 (Applications Tag Style Alignment between Plan B & C)**：
     - 将方案 C（桌面大表与移动端卡片）中的 `[Search API + Model Gateway]` 胶囊标签样式与方案 B 严格拉齐对齐：统一使用 **`bg-white/90`** 半透白卡片底色、**`border-[#DCDCD6]`** 清晰描边、**`rounded`** 圆角与 **`text-[#100F09]`**，在灰底分类栏（`#F8F9FA` / `#F4F4F4`）上呈现出统一、通透且具层次感的高质感胶囊外观。
   - **Plan C 标题下方辅助说明字号调优为 12px (Plan C Subtitle Helper Copy 12px Hierarchy)**：
     - 将方案 C（桌面大表与移动端卡片）中所有 14 个端点/模型主标题（16px 加粗）下方的单行功能辅助描述文本（如 `Real-time LLM-ready web search with live crawling`）独立设为 **`12px` (`text-[12px] leading-[18px]`)**，使标题与副标题层级区分更加鲜明紧凑；
     - 价格、单位后缀（`/ 1k calls`）、Free Tier 说明、分类右侧说明等其余所有辅助字段继续保持规范的 **`14px`**，不受任何影响。
   - **Applications 分类标签全面同步 (Applications Billing Tag Refinement across Plan A, B, C)**：
     - 在方案 A 吸顶分类栏、方案 B 外壳头部以及方案 C 表格与移动端卡片标题栏中，将 Applications 的计费方式标签胶囊文案全量统一为 **`[Search API + Model Gateway]`**（完整文案：`Complete workflows built on the APIs above. Billed per outcome via [Search API + Model Gateway].`）。
   - **Plan C 辅助文字弱化调色 (#8B8B8B Helper Copy Refinement)**：
     - 将 Plan C 表格与移动端卡片中的全部次级辅助说明文字（包括端点业务描述、计费单位后缀 `/ 1k calls`、Details & Free Tier 特性描述、表头字段标签等）由原 `#57575E` 统一弱化调优为 **`#8B8B8B`**，提升主次信息层级对比度，整体视觉观感更轻盈通透。
   - **Plan C 表头置顶滚动修复 (Plan C Sticky Header Overflow Fix)**：
     - 根本原因分析：父容器存在 `overflow-x-auto` / `overflow-x-hidden` 会在浏览器中建立独立的溢出滚动上下文，导致子元素（`thead` 与分类行 `tr`）的 `position: sticky` 无法跟随浏览器窗口（Window Viewport）吸顶；
     - 解决方案：
       1. 将根层级容器及 `html` 的溢出策略统一由 `overflow-x: hidden` 升级为现代安全的 **`overflow-x: clip`**（既彻底杜绝横向溢出白边，又绝不阻断 `sticky` 吸顶机制）；
       2. 移除 Plan C 桌面表格容器上的 `overflow-x-auto`，表格使用 100% 宽度自适应排版；
       3. 将 5 个分类行（Search、Extract、Embedding 等）的吸顶偏移量精准设定为 **`top-[106px]`**（顶部 58px Navbar + 48px 表头 thead），滚动时紧贴在 4 列主表头正下方平滑吸顶推进。
   - **Plan C 表格字号层级规范化 (Plan C 16px / 14px Typography System)**：
     - **主要标题与价格 (16px / `text-[16px]`)**：分类主标题（Search, Extract 等）、端点/模型名称（Web Search API, embedding-8b 等）以及主要单价数字统一定为 16px 加粗，视觉识别更清晰利落；
     - **辅助说明与费率详情 (14px / `text-[14px]`)**：业务描述文本、计费单位后缀（`/ 1k calls`, `/ 1M tokens`）、Details & Free Tier 特性描述统一调整为 14px（从原 12px/13px 提升），大幅增强移动端与桌面端的通读性与高级感；
     - **状态徽章 (11px / `text-[11px]`)**：保留 Mono 紧凑微标规范（`80% Off`, `Early Access`, `Best Accuracy` 等）。
   - **Plan C 去除冗余 Billing Metric 列与移动端精简 (Plan C Rate Matrix Column Refinement)**：
     - **桌面端大表**：精简为 4 列核心结构（`Endpoint / Model`、`Unit Price (USD)`、`Details & Free Tier`、`Action`），去除了与 Unit Price 表达重叠的 `Billing Metric` 独立列，表格横向信息流更紧凑高效；
     - **移动端卡片**：单价与计费单位直接融合成单行气泡（如 `$1 $5 / 1k calls`、`$0.07 / 1M tokens`、`Lite: $0.20 / task`），去除了独立的多余 metric 胶囊。
   - **Plan C 统一费率矩阵表移动端深度适配 (Plan C Dual-Track Mobile Matrix Adaptation)**：
     - **移动端极佳体验 (`block md:hidden`)**：在手机视口（<768px）下，不再强制压缩宽表格，而是自动切换为**原生级分类卡片列表（Mobile Rate Matrix Cards）**：
       - 按 5 大分类（Search、Extract、Embedding、VL Embedding、Applications）结构化分组；
       - 每张端点/模型卡片清晰呈现：标题 + 状态徽章 + `Get started` 触控胶囊 + 描述 + 专属价格与计费单位浅灰气泡行 + 免费额度/关键特性说明；
     - **桌面/平板端完整大表 (`hidden md:block`)**：保留 5 列完整吸顶矩阵大表，并配置 `overflow-x-auto min-w-[840px]` 防溢出机制，确保平板与窄屏横向平滑滚动不挤压换行。
   - **Web Search 卡片 `80% Off` 徽章置于标题行 (Web Search 80% Off Badge Alignment)**：
     - 将 **`80% Off`** 绿色高亮折扣药丸从原先的价格行移动至顶部 **`Web Search` 主标题后方**；
     - 与 `Multimodal Chat` 和 `Grounded Gen` 标题后的 `Early Access` 标签规范完全拉齐，同时使价格行（`$1 $5 / 1k calls`）纯粹聚焦于数值呈现与底对齐排版。
   - **Web Search 卡片价格行严格底对齐对齐 (Web Search Price Row Baseline Alignment)**：
     - 将 Web Search 价格容器的对齐方式从 `items-center` 修正为与全站其他卡片完全一致的 **`items-baseline`（基线底对齐）**；
     - 确保主要价格 `$1`、原价划线 `$5` 以及单位 `/ 1k calls` 底部严格水平对齐，`80% Off` 折扣标签保持适中垂直居中（`self-center`），彻底消除小字悬浮居中带来的视觉错位。
   - **Answer 与 Multimodal Chat 卡片底层费率明细拆解升级 (Answer & Multimodal Chat Specific Rate Breakdown)**：
     - **Answer 卡片**：`Search fees + Model rates`；
     - **Multimodal Chat 卡片**：`Search fees + Model rates`；
     - 采用与全站完全一致的微圆角参数标签样式（`bg-[#F6F6F3] border-[#E7E7E3]`）。

5. **最新文案与结构对齐（2026-09-01 全量对齐 https://octen.ai/pricing）**：
   - **Git v1 版本基准固化**：已完成当前工程版本提交与 `v1` 标签打标并推送至远程仓库 `master`。
   - **Pay-As-You-Go 官方表述与费率全量对齐**：
     - **分类与副标题**：
       - `Search`: `Real-time retrieval from live web`
       - `Extract`: `Clean structured content from any URL`
       - `Embedding`: `Top-ranked embedding models for text and multimodal retrieval`
       - `Application`: `Complete workflows built on the APIs above. Billed per outcome via Search API + Model Gateway.`
     - **Search API**：
       - `Web Search API`：`$1`（原价 `$5` 划线）`/ 1k calls` + `80% Off` 标签，详情：`Full content: $0.5 / 1k results (10 full-content results free per call)`；
       - `Broad Search API`：`$1`（原价 `$5` 划线）`/ 1k sub-queries` + `80% Off` 标签，详情：`Full content: $0.5 / 1k results (10 full-content results free per sub-query)`；
       - `Image Search API`：`$5 / 1k calls` + `Early Access` 标签；
       - `Video Search API`：`$5 / 1k calls` + `Early Access` 标签。
     - **Extract API**：
       - `Extract API`：`$1 / 1k URLs`，详情：`Failed URLs are always free`（绿色加粗）。
     - **Embedding API**：
       - `Embedding API`（`SOTA on RTEB`）：`$0.01 – $0.07 / 1M tokens`，明细：`octen-embedding-0.6b` $0.01、`octen-embedding-4b` $0.04、`octen-embedding-8b` $0.07；
       - `VL Embedding API`（`SOTA on MMEB-v2`）：Text: `$0.05 – $0.10 / 1M tokens`，Visual: `$0.12 – $0.25 / 1M tokens`，明细：`octen-vl-embedding` $0.05 / $0.12、`octen-vl-embedding-large` $0.10 / $0.25。
     - **Application**：
       - `Answer`：`Search fees + Model rates`；
       - `Multimodal Chat`（`Early Access`）：`Search fees + Model rates`；
       - `Deep Research`：`$0.20 – $3.00 / request`，明细：Lite $0.20、Standard $1.00、Pro $2.50、Pro-visual $3.00；
       - `Grounded Generation`（`Early Access`）：`$0.25 – $1.00 / output`，明细：Image $0.25、Video $1.00。
     - **Plan C 费率矩阵表格结构与样式**：
       - 列头标准化：`Endpoint` | `Unit price (USD)` | `PRICING DETAILS`（大写）| `Action`（`Get started` 胶囊按钮）；
       - 费率详情（PRICING DETAILS）单元格采用规范的双列对齐网格（模型/规格名称左对齐，数值等宽字体右对齐）；
       - 移动端自动切换为结构清晰的原生分类卡片。
     - **Model Gateway 模块**：
       - 15% 返利徽章：`15% Rebate Back`；
       - 官方文档超链接：`View model rates`（`https://docs.octen.ai/overview/pricing#model-gateway`）、`View rebate details`（`https://docs.octen.ai/overview/model-gateway-rebate`）；
       - 说明文案 1：`One API for top-tier LLM and multimodal models, with Octen Search built in — powering Answer, Multimodal Chat, Deep Research, and Grounded Generation.`
       - 说明文案 2：`Get 15% of your Model Gateway spend back, credited automatically to your balance each month across all models.`
     - **FAQ 问答内容更新**：
       - 对齐官方 6 个核心问答（计费模式、5美元赠金、Model Gateway Prompt Cache 优惠、QPS 升级/降级、403 欠费处理与最低充值 $5、支持的支付方式）。
   - **PRICING DETAILS 列格式统一与两端对齐 (Pricing Details Column Normalization & Space-Between Alignment)**：
     - **两端对齐 (Space-Between Alignment)**：多规格/多模型行（Embedding、VL Embedding、Deep Research、Grounded Generation）统一采用 `w-full max-w-[280px]` 容器及 `justify-between` 两端对齐，左侧名称左对齐，右侧金额右对齐。
      - **字体与颜色标准化**：
        - 名称标签：统一采用等宽字体 `font-['JetBrains_Mono',monospace]` 与二级暗色 `text-[#57575E]`；
        - 金额数值：统一采用等宽数字 `font-['JetBrains_Mono',monospace] font-medium text-[#100F09] tabular-nums`；
        - 免费额度/特权（Search & Extract）：统一采用 `text-[#039855] font-medium`；
        - 附加说明（`text / visual` 图标化）：统一采用专用 11×11px 矢量图标替代文字，内联标注在每行金额后方 `(<TextTokenIcon /> / <VisualTokenIcon />)`，兼具极简与直观性；
        - 无详情占位符：统一使用标准破折号 `—`（`text-[#9C9CA4]`）。
      - **单元格与移动端卡片完全拉齐**：移动端自适应卡片与桌面端表格均遵循同一设计系统规范。
    - **价格与费率字体全量统一为 JetBrains Mono (Price Typography Standardized to JetBrains Mono)**：
      - **全平台数字等宽对齐**：所有价格数字（包括 Bento 卡片主价格与划线原价、桌面 Matrix 表格所有单价、移动端自适应分类卡片价格、Full content 附加费率、Text/Visual 多模态向量费率）全量统一使用等宽字体 **`font-['JetBrains_Mono',monospace]`**（在静态 HTML 表格中对齐 `var(--mono)`）。
      - **字号与层级规则**：
        - 桌面端主价格：`16px` 加粗（`font-['JetBrains_Mono',monospace] font-bold text-[16px] text-[#0A0A0A]`）
        - 划线原价：`14px` 划线（`font-['JetBrains_Mono',monospace] text-[14px] text-[#9C9CA4] line-through`）
        - 计费单位（`/ 1k calls`, `/ 1M tokens` 等）：`14px`（`text-[14px] text-[#8B8B8B]`）
        - 次级规格价格（Full content, Text, Visual）：`16px` 加粗 + `14px` 单位 + `14px` 标签（如 `$0.5 / 1k results (full content)`）
      - **模型名称精简**：移除 `octen-` 前缀（`embedding-0.6b/4b/8b`, `vl-embedding/vl-embedding-large`），排版更紧凑利落。
    - **四大分类标题字号规范为 18px (Category Header Typography Standardized to 18px)**：
      - **分类层级鲜明**：`Search`、`Extract`、`Embedding`、`Application` 四大分类在 Plan C 桌面端 Sticky 分类行、移动端自适应卡片顶栏以及 Plan B 外壳头部的标题字号全量统一为 **`18px`**（`font-['DM_Sans',sans-serif] font-bold text-[18px] text-[#100F09]`），与下方的端点名称（16px）和次级辅助说明（12px/14px）形成严谨的三级视觉阶梯。

---

## 6. 📦 部署与发布
- 项目已配置 `vercel.json`（静态产物目录 `dist`，构建命令 `pnpm build`）。
- 关联 Vercel 的生产分支为 `master`，Push 到 `master` 自动触发部署。

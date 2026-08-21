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
     - **主要标题与价格 (16px / `text-[16px]`)**：分类主标题（Search, Extract 等）、端点/模型名称（Web Search API, octen-embedding-8b 等）以及主要单价数字统一定为 16px 加粗，视觉识别更清晰利落；
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
     - **去除重复语义与文字截断**：将原来卡片底部重复笼统的 `Broad Search + LLM` / `Multimodal Search + LLM` 重构为结构清晰的**底层单价计费拆解项**，彻底消除词汇冗余与 `Multimodal Ch...` 标题截断问题：
       - **Answer 卡片底部**：
         - `Broad Search` ➔ `$1 / 1k calls`
         - `Model tokens` ➔ `Gateway rates`
       - **Multimodal Chat 卡片底部**：
         - `Visual Search` ➔ `$5 / 1k calls`
         - `Vision tokens` ➔ `Gateway rates`
     - 采用与全站完全一致的微圆角参数标签样式（`bg-[#F6F6F3] border-[#E7E7E3]`），使卡片在 4 列排版下极度清爽、信息量充足且排版规整。
   - **Applications 大类综合计费说明与标签升级 (Applications Comprehensive Billing Subtitle & Tag Pill - Option A)**：
     - 在 **Plan A 顶部吸顶 Tabs 辅助描述** 与 **Plan B Applications 外壳标题栏** 中全面更新文案为最优的 **方案 A**：
       `Complete workflows built on the APIs above. Billed per outcome via [Search + LLMs].`
     - 其中 `Search + LLMs` 采用精致的等宽字体内嵌微圆角标签药丸（Badge Pill）呈现，全句语法连贯自然、语义毫无冲突。
   - **Plan A / Plan B 卡片 Hover 边框精细化解耦系统 (Plan A Unified vs. Plan B Contextual Borders)**：
     - **Plan A（极简平铺 Bento）**：全部 9 张卡片保持 **100% 绝对统一的温润中灰 Hover 描边（`hover:border-[#B5B5B0]`）**，确保整页色调平衡和谐，毫无杂色突兀感；
     - **Plan B（4 大流光外壳）**：卡片与外壳主题流光精准呼应，其中 **Search 分类卡片在 Plan B 中采用专属的 `color-mix(in oklab, #4CAF50 70%, transparent)`（`hover:border-[#4CAF50]/70`）**，与外壳翡翠光晕浑然一体；
     - **右上角外链指示微圆钮（Hover-only & 12px 边距）**：全部卡片统一采用 `absolute top-[12px] right-[12px]`，保持与卡片右上角边框 **12px 绝对间距**，Hover 时丝滑淡入曜石黑圆底 + 白色小箭头 `↗`（`group-hover:opacity-100`）；
   - **Model Gateway 模块静态化纯粹呈现 (Model Gateway Static Info Display)**：
     - 彻底移除了 `Model Gateway` 横幅容器的 `hover:border-[#B5B5B0]` 动效，使其作为全静态的费率与 15% 返利信息公告栏纯粹展示，仅保留内部绿色超链接的 Hover 交互。
   - **Plan A / B / C 4 大分类标题统一内嵌 Figma 原生业务图标 (Figma Node 13418:141867 Exact Vector Icons)**：
     - 已精准对齐 Figma 原生 4 个分类图标源码（包含 100% 贴合官方的 `tabler:world-search` 地球经纬网 + 放大镜双 path 结构），并在 Plan A（置顶吸顶药丸 Tabs）、Plan B（各分类外壳标题栏）、Plan C（全景表格分类分割吸顶行）中全局统一呈现：
       1. **Search (搜索)**：`SearchCategoryIcon`（Figma `tabler:world-search` 原生 28×28 地球经纬网 + 放大镜搜索矢量组合）；
       2. **Extract (提取)**：`ExtractCategoryIcon`（Figma `tabler:grid-dots` 6 节点复合矩阵连线抽取矢量图标）；
       3. **Embedding (向量化)**：`EmbeddingCategoryIcon`（Figma `embedding` 3 轴 6 晶体节点高维向量空间星群矢量图标）；
       4. **Applications (应用智能体)**：`ApplicationsCategoryIcon`（Figma `application` 复合几何智能工作流矩阵：星芒、圆形、三角与圆角矩形）；
   - **Plan B 4 大分类外壳容器静止与悬浮动态流光系统 (Plan B Uniform Gray Resting + Hover-Activated Duotone Mesh Gradients)**：
     - **常态（Resting State）**：4 大分类外壳容器统一采用低调纯净的原生灰色背景（`bg-[#F4F4F4]`）与微投影（`shadow-[0_2px_12px_rgba(0,0,0,0.02)]`），整体界面视觉统一、收敛且毫无色块干扰；
     - **悬浮（Hover State 无多余大投影）**：彻底移除了外层容器的重阴影扩散（`hover:shadow-[0_8px_30px_...]`），仅保留丝滑淡入的内部双色相流光（`ShellHoverGlow`）与彩色主题微边框，整体视觉极其清爽利落、纯净高端：
       1. **Search 外壳**：`Emerald Neon ➔ Aqua Teal` 翡翠荧光绿 ➔ 春天薄荷水绿（`#70FE7E` ➔ `#2DD4BF`）；
       2. **Extract 外壳**：`Electric Cyan ➔ Royal Indigo` 电光青蓝 ➔ 皇家靓蓝紫（`#38BDF8` ➔ `#818CF8`）；
       3. **Embedding 外壳**：`Cosmic Purple ➔ Rose Magenta` 宇宙紫 ➔ 落日洋红玫瑰（`#C084FC` ➔ `#FB7185`）；
       4. **Applications 外壳**：`Amber Gold ➔ Tangerine Coral` 耀金琥珀 ➔ 暖阳落日橙红（`#FBBF24` ➔ `#EA580C`）；
   - **Plan C**：源数据 100% 对齐 `pricing.md` 的**全景统一大表格（Unified Rate Matrix Table）**：
     - **Plan C 纯净无重复置顶表头体系 (Clean Non-repeating Sticky Table & Category Headers)**：
       - **智能动态圆角吸顶机制 (Adaptive Smart Rounded Sticky Header)**：
         - **未吸顶静止状态（At Rest）**：表头首行左右单元格呈现精致的 `rounded-tl-[16px] sm:rounded-tl-[20px]` 与 `rounded-tr-[16px] sm:rounded-tr-[20px]`，与表格外层容器圆角 100% 严密贴合呈现完整圆角形态；
         - **吸顶置顶状态（Sticky Pinned）**：页面向下滚动、表头吸附于 `top-[58px]` 时，表头自动平滑过渡为平直直角贯通形态（`rounded-tl-none rounded-tr-none`），左右两侧无任何多余缺口，浑然一体；
       - **主表头与分类子表头背景色层级区分 (Differentiated Background Colors)**：
         - **主列标题吸顶行**（`thead th`）：采用浅色清爽灰底 `bg-[#F8F8F5]`，`z-30`，固定呈现 `Endpoint / Model` 等 5 列字段定义；
         - **业务分类通栏行**（`Search`、`Extract`、`Embedding`、`VL Embedding`、`Applications`）：采用纯色实底 `bg-[#F8F9FA]`，`z-20`。该颜色由 `#edeff05e` 在白底（#FFFFFF）上严格按照 Alpha 合成公式精确折算（$237 \times 0.37 + 255 \times 0.63 = 248$），**白底下视觉呈现 100% 完全一致**，同时为 100% 不透明实底，彻底杜绝滚动吸顶时文字透出的问题；
         - **数据行**：纯白底色 `bg-white` + 悬浮高亮 `hover:bg-[#F8F8F5]`；三层背景清晰区分，层次分明；
       - **视觉效果**：
         - 处于顶部时，清晰呈现 `主表头` ➔ `Search 行` ➔ `数据行`（**无任何重复**）；
         - 随着向下滚动，`Search` 吸附在主表头下方，滚动到 `Extract` 时平滑自然顶替吸附，当前所属区域与列字段一目了然！
       - **零阴影纯净风格**：去除所有阴影，以清晰的 `border-b border-[#E2E2DE]` 实现极致现代化设计；
     - **全案标准化徽章规范（跨 Plan A / Plan B / Plan C 100% 统一对齐）**：
       - **Applications 板块拆分为 4 个独立项目**：`Answer`、`Multimodal Chat`（带 `Early Access` 徽章）、`Deep Research`、`Grounded Generation`（带 `Early Access` 徽章），在 Plan A/B 卡片流（4列响应式网格）和 Plan C 大表格（4行明细）中均已统一对齐呈现；
     - **全表格与卡片统一状态徽章盒模型 (Unified Badge Layout & Box Model)**：
       - 所有状态徽章（`Early Access`、`80% Off`、`Best Accuracy`、`Ultra Fast`、`SOTA on RTEB`、`SOTA on MMEB-v2`、`15% Rebate Back`）的**整体高度统一为 `20px`**，水平内边距统一为 **`px-[6px]`**（6px），圆角统一为 `rounded`，行高统一为 `leading-none`，采用 `inline-flex items-center justify-center box-border`；
       - 所有徽章文字统一为 `font-['JetBrains_Mono',monospace] text-[11px] tracking-tight shrink-0`；
       - **各徽章精准配色体系**：
         - `80% Off`：`bg-[#70FE7E] text-[#100F09] border border-[#70FE7E]`
         - `Early Access`：`bg-[#E3FFE2] border border-[#6FD1A5] text-[#1B9C62]`
         - `SOTA 评测徽章`（`SOTA on RTEB`、`SOTA on MMEB-v2`）：`bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E]`
         - `Best Accuracy`：`bg-[#FFF7ED] border border-[#ffc29f] text-[#C2410C]`
         - `Ultra Fast`：`bg-[#FAF5FF] border border-[#d9bafb] text-[#6B21A8]`
       - **VL Embedding 规则**：仅保留 `SOTA on MMEB-v2` 琥珀黄评测徽章，无 `Early Access` 标签；
       - **Applications 规则**：仅 `Grounded Generation` 保留 `Early Access` 标签；
       - **标题栏视觉净化**：全面移除了所有数量胶囊徽章（`4 APIs`、`2 APIs`、`1 API`、`3 Models`、`2 Models`、`3 Endpoints`），视觉更加呼吸与现代化；
       - 调用量指标（`1 call / request`、`Per 1M tokens` 等）及模型名称（`octen-embedding-8b` 等）**100% 统一定义为 `JetBrains Mono` 等宽字体**；
       - 所有服务标题（`Web Search API` 等）、表头、描述文本、定价与操作按钮**统一定义为 `DM Sans` 字体**；
     - **表头优化**：去除了最右侧操作列的可见 `Action` 表头文字（保留列对齐与无障碍结构），使表头更加极简呼吸；
     - 统一标准化表头：`Endpoint / Model`、`Category`、`Billing Metric`、`Unit Price (USD)`、`Details & Free Tier`；
     - 严格横纵列对齐，分类行间隔（Search、Extract、Embedding、Applications、Model Gateway）；
     - 集成折扣标签（`80% Off`）、免费额度高亮（`10 free results / call`）、状态标签（`Early Access`）与快速接入按钮。
5. **最新文案与结构对齐（2026-08-21）**：
   - **Full Content 免费额度规范统一为 `10 free / call` (Standardized to `10 free / call`)**：
     - `Web Search API`：`Full content: $0.5 / 1k results (10 free / call)`（绿色高亮 `10 free / call`）；
     - `Broad Search API`：`Full content: $0.5 / 1k results (10 free / call)`（绿色高亮 `10 free / call`）；
     - `WebSearchCard (Plan A/B)`：`$0.5 / 1k results (10 free / call)`（绿色高亮 `10 free / call`）；
     - 含义统一指代：每次检索调用返回的**前 10 条搜索结果全文免费（First 10 search results full content free / call）**；
   - **Model Gateway 间距规范统一为 12px (Standardized 12px Top Spacing)**：
     - 在 **Plan A**（平铺卡片）、**Plan B**（Figma 外壳）与 **Plan C**（统一大表格）三个方案中，`Model Gateway` 与上方卡片/表格的**垂直间距已统一且严格设置为 `12px`**；
     - 文案规范："One API for top-tier LLM and multimodal models, with Octen Search built in — powering Answer, Deep Research, and Grounded Generation."
     - 按钮文字统一：`View model rates` / `View rebate details`；
     - 移除了卡片下方的 `* Launch pricing — discounted rates, subject to change` 免责声明。
   - **QPS 说明框**：
     - 移除了第一句泛化描述，直接阐明："Applies to **Broad Search** and **Web Search**." 并保留 rate limits 文档链接；
     - 移除了 QPS 区块底部的 `* Launch pricing` 免责声明。
   - **QPS Free 卡片**：
     - 第二行文案更新为：`Starts at 10 QPS. Add credits to unlock Base (up to 20 QPS)`；
     - 移除了第二行前面的对勾图标，左侧对齐。
   - **Footer 导航栏**：
     - 将 `Pricing` 移至 `DEVELOPERS` 栏目下，顺序排列为：`API Platform` / `Docs` / `Pricing` / `Status` / `GitHub`。

---

## 5. 📦 部署与发布
- 项目已配置 `vercel.json`（静态产物目录 `dist`，构建命令 `pnpm build`）。
- 关联 Vercel 的生产分支为 `master`，Push 到 `master` 自动触发部署。

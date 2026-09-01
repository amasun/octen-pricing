# 项目交接文档 (Project Handoff Document) - Octen Pricing

## 1. 📌 项目概览
- **项目名称**: Octen Pricing Mobile-Friendly Web Application
- **技术栈**: React 19 + Vite 8 + TypeScript 5.7 + Tailwind CSS v4 + GSAP + Lenis
- **远程仓库**: `https://github.com/amasun/octen-pricing.git`
- **主分支**: `master`
- **Figma 设计稿源文件**: `https://www.figma.com/design/jnIlRSuXffn5g2OxnsqYIE/Octen_%E6%B1%87%E6%80%BB?node-id=13350-2947&t=zHKsLMgbWwv2HovN-4`

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
- `src/components/HeroSection.tsx` - 头部 Hero 区块与 3 张入口卡片
- `src/components/ApiExplorer.tsx` - API 定价卡片（含 Plan A / B / C 及双击唤出控制）
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
   - 页面左侧内容区外提供全英文、极简垂直列表悬浮对比控件（Layout: Plan A / Plan B / Plan C，**默认完全隐藏，双击页面任意空白处唤出/收起**）。
   - **Plan A**：顶部吸顶分类 Tabs 栏 + 直排 Bento 平铺卡片布局。
   - **Model Tokens 统称拉齐 (Token Naming Unification)**：
     - 在 Plan A 与 Plan B 的 `MultimodalChatCard` 及 `AnswerCard` 中，将原 `Vision tokens` 统一调整为 `Model tokens`，下挂于 `Search calls + model tokens` 总览下，计费说明统一显示为 `Gateway rates`。
   - **Enterprise Custom 卡片特性条目扩充为 6 条（3×2 栅格排列）**：
     - Enterprise 卡片中间特性条目扩展为 6 项：
       1. `1M+ QPS`（分支架构图标 `BranchIcon`）
       2. `Custom data`（数据库立体圆柱图标 `DataIcon`）
       3. `Zero Data Retention (ZDR)`（斜杠护盾/不留存眼睛图标 `ZdrIcon`）
       4. `Custom SLA`（闪电护盾 SLA 保障图标 `FlashIcon`）
       5. `Dedicated Slack channel support`（Slack 专属渠道图标 `SlackIcon`）
       6. `Volume discounts`（折扣图表图标 `ChartIcon`）
     - 排版采用 `3 行 × 2 列`（`sm:grid-rows-3 sm:grid-cols-2 sm:grid-flow-col`）纵向优先栅格布局；
     - **容器右内边距**：设置右侧 padding 为 24px（`sm:pr-6`）。
   - **QPS Plan 卡片价格 $ 符号顶对齐与 / month 原始样式保留**：
     - 在 QPS Plan 卡片价格展示区，通过 `self-start` 将 `$` 美元符号与大号价格数字的顶部精准对齐；
     - 完全保留大号数字的行高基准与 `/ month` 周期文案的原有字号、行高（`text-[14px] leading-[20px] text-[#57575E]`）及底部基线对齐位置。
   - **QPS Plan 卡片行动按钮文案统一为 `Get started`**：
     - 将 **Builder**（原 Startup）、**Pro**、**Scale** 卡片底部的行动按钮文案由 `Subscribe` 统一修改为 **`Get started`**；
     - 保持 **Free** 卡片的 `Start Free` 与 **Enterprise** 卡片的 `Contact Sales` 不变。
   - **Free 卡片副文案左对齐与色彩降重**：
     - 将 Free 卡片中 `Starts at 10 QPS. Add credits to unlock Base (up to 20 QPS)` 通过 20px 占位结构与首行 `Up to 20 QPS Limit` 文本严格像素级左对齐；
     - 文字色彩精确调整为 `rgb(139, 139, 139)`。
   - **Hero 顶部文案精简**：
     - 移除了主标题下方的冗余文案 Usage-based pricing for the search infrastructure behind your agents.；
   - **三张入口卡片统一 Octen Hub 规范与 Card 3 动态细节 (3 Cards Unified Hub & Card 3 Motion)**：
     - **全卡片统一 Octen Engine Hub**：三张卡片全面统一采用共享的 `<OctenCenterHub />` 组件，尺寸严格统一为 `size-[60px]`（`rounded-[14px]`），内置高质感 Octen 芯片矢量路径（`#70FE7E`, 32x26px）；
     - **全卡片统一背景中心聚光灯与 20px 网格纹理 (Unified Spotlight & 20px Grid)**：以卡片 3 为视觉基准，三张卡片黑色视口区域均统一垫入中心绿色径向光斑（`radial-gradient(circle at 50% 50%, rgba(112, 254, 126, 0.22) 0%, rgba(3, 152, 85, 0.08) 45%, transparent 75%)`）以及 **20px 大小、1px 描边、0.07 色彩通透度的精致暗色科技网格纹理**（`linear-gradient to right/bottom, rgba(255,255,255,0.07) 1px, transparent 1px`，`backgroundSize: 20px 20px`）；
     - **中心 Logo 光晕按需激活机制**：默认常态下光晕完全隐藏（`opacity: 0` / `shadow-none`）；当卡片被 Hover 悬浮时，中心 Logo 平滑放大至 `1.06x`，并渐显淡雅精致的翡翠绿高光微晕（`bg-[#70FE7E]/25 blur-[10px]` + `shadow-[0px_0px_18px_rgba(112,254,126,0.25)]`）；
     - **严格像素级对齐 Figma (node 13519:907)**：
       - **左侧 Data 盒子**：`left: 36.58px`（`top: 71px`，`size: 40px`，`rounded-[8px]`，`border-2 border-[rgba(112,254,126,0.5)]`），内嵌 Figma 官方 24x24 渐变圆柱 Data 图标；
       - **右侧 Message 盒子**：`left: 312.42px / right: 36.58px`（`top: 71px`，`size: 40px`，`rounded-[8px]`，`border-2 border-[rgba(112,254,126,0.5)]`），内嵌 Figma 官方 24x24 渐变 Fluent Person Chat 图标；
       - **中心 Octen Hub**：`left: calc(50% - 0.5px)`（`top: 59px`，`size: 60px`）；
     - **卡片 3 默认静止 · 悬浮激活动态机制 (Hover-Triggered Motion)**：
       - **默认常态（Default State）**：28 颗粒子与左右反向激光线呈静态点位定格在轨道上（`animationPlayState: 'paused'`），两端盒子涟漪隐形（`opacity: 0`），画面宛如高精密电子架构蓝图；
       - **悬浮动态（Hover State）**：鼠标 Hover 移入时，左右扩散涟漪淡入荡漾（`opacity: 1`），28 颗粒子瞬时匀速注入中心，右侧双线激光瞬时反向穿梭（`animationPlayState: 'running'`），中心 Logo 光晕同步升起放大；
     - **去除底部冗余文字**：彻底移除底部 `ENTERPRISE LAYER` 标签，视觉画面更纯粹利落；
   - **How Octen Works 3 张卡片布局与去按钮化极简交互**：
     - 容器宽度扩展为最大 `max-w-[1280px]`；
     - 布局由 2 张卡片平滑扩展为 3 张卡片：
       1. **Card 1**：`Pay as you go`（Covers actual API and token usage）
       2. **Card 2**：`Subscribe to a QPS Plan`（Reserves your max search QPS）
       3. **Card 3**：`Enterprise Plan`（Adds custom data and dedicated support）
     - **原生 HTML 锚点定位与精准跳转**：
       - 点击 **Pay as you go** 卡片直接平滑滚动定位至 `#pay-as-you-go`（API 计费区）；
       - 点击 **Subscribe to a QPS Plan** 卡片平滑滚动定位至 `#qps-plans`（QPS 阶梯方案总览区）；
       - 点击 **Enterprise Plan** 卡片精准平滑滚动定位至 `#enterprise-plan`（Enterprise Custom 卡片专属锚点）；
       - 卡片整体保持手型指针 `cursor-pointer`，移除整体 Y 轴位移跳动（无 `-translate-y`），完整保留平滑柔和的投影浮现与边框过渡反馈（`hover:shadow-[0px_12px_28px_rgba(0,0,0,0.08)]` 与 `hover:border-[#D1D5DB]`）；
       - 卡片之间的 `+` 与 `/` 分隔符圆标外轮廓移除了投影（无 `shadow-2xs`），呈现扁平极简利落质感。

---

## 5. 📦 部署与发布
- 项目已配置 `vercel.json`（静态产物目录 `dist`，构建命令 `pnpm build`）。
- 关联 Vercel 的生产分支为 `master`，Push 到 `master` 自动触发部署。

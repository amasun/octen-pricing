# ⚡ Octen AI Infrastructure Pricing

> **Octen AI 官方定价与方案展示页面** —— 专为 AI Agent 搜索与数据基础设施打造的高性能、全响应式现代 Web 应用。

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=flat-square)
![Package Manager](https://img.shields.io/badge/pnpm-ready-F69220?style=flat-square&logo=pnpm&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 📖 目录 (Table of Contents)

1. [项目概览 (Project Overview)](#1-项目概览-project-overview)
2. [技术栈与架构选型 (Tech Stack & Architecture)](#2-技术栈与架构选型-tech-stack--architecture)
3. [项目目录结构 (Project Directory Structure)](#3-项目目录结构-project-directory-structure)
4. [核心功能与业务模块 (Core Modules & Business Logic)](#4-核心功能与业务模块-core-modules--business-logic)
5. [动效、着色器与交互引擎 (Animations, Shaders & Interactions)](#5-动效着色器与交互引擎-animations-shaders--interactions)
6. [移动端与响应式设计规范 (Mobile-First Responsive Standards)](#6-移动端与响应式设计规范-mobile-first-responsive-standards)
7. [快速启动与构建 (Quick Start & Commands)](#7-快速启动与构建-quick-start--commands)
8. [部署与发布 (Deployment & CI/CD)](#8-部署与发布-deployment--cicd)
9. [评审与交接文档 (Review & Handoff Reference)](#9-评审与交接文档-review--handoff-reference)

---

## 1. 📌 项目概览 (Project Overview)

Octen Pricing 页面面向开发者、初创团队与大型企业客户，清晰透出 Octen 搜索与数据基础设施的**双层计费模型**：

1. **Pay-As-You-Go 按量计费**：调用多少支付多少，涵盖 Web Search、Broad Search、Full Content、Image & Video Search、Extract、Embedding、VL Embedding、Deep Research 与 Chat 等丰富 API 能力。
2. **Monthly QPS 保障方案**：提供并发搜索速率上限及吞吐 SLA 保证，涵盖 `Free`（默认分配 $0）、`Startup`（$2,099/月）、`Pro`（$13,999/月）、`Scale`（$33,999/月）与 `Enterprise` 定制方案。
3. **新用户冷启动激励**：注册即可获赠 **$5 免费余额**，提供一键直达各个 API Playground 与控制台的无缝体验链路。

> [!NOTE]
> **设计规范参考**：
> 开发与审核过程中，Navbar (顶栏) 与 Footer (页脚) 的特定细节样式统一参考 Figma 最新设计稿；核心关注区域包括 Hero 动态光效、QPS 卡片层级、Pay-As-You-Go 吸顶分类与 API 卡片交互。

---

## 2. 🛠️ 技术栈与架构选型 (Tech Stack & Architecture)

| 类别 | 技术 / 库 | 版本 / 说明 |
| :--- | :--- | :--- |
| **核心框架** | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | `React 19` + `TypeScript 5.7`，严格类型安全 |
| **构建工具** | [Vite](https://vitejs.dev/) | `Vite 8`，极速 HMR 热更新与构建优化 |
| **样式系统** | [Tailwind CSS v4](https://tailwindcss.com/) | `@tailwindcss/vite` 原生集成，极致编译速度与 OKLCh 调色支持 |
| **动效引擎** | [GSAP](https://gsap.com/) + ScrollTrigger | 视差滚动、卡片入场 Stagger 与序列动效编排 |
| **平滑滚动** | [Lenis](https://lenis.darkroom.engineering/) | 高性能物理惯性平滑滚动，深度绑定 GSAP Ticker |
| **Canvas / Shader** | WebGL2 GLSL Shader + Canvas 2D | 自研流体光轨 (`CurvedLightTrailsCanvas`) 与 Dither 点阵粒子特效 |
| **图标库** | [Lucide React](https://lucide.dev/) + Inline SVG | 高清矢量图标与定制 SVG 微交互 |
| **代码格式化** | `oxfmt` | 超快 Rust 级代码格式化工具 |
| **包管理** | `pnpm` | 强制使用 `pnpm` 进行全局硬链接与依赖管理 |

### 🎨 设计令牌 (Design Tokens)

* **字体系统 (Typography)**：
  * **正文 / 全局 UI**：`DM Sans` (`'DM Sans', system-ui, -apple-system, sans-serif`)
  * **标题 / Serif 艺术字**：`Fraunces` (`'Fraunces', serif`, 支持 `WONK` / `SOFT` 变量字形)
  * **代码 / 价格等宽数值**：`JetBrains Mono` / `DM Mono`
* **色彩基调 (Color Palette)**：
  * **Obsidian Dark**：`#06090A` / `#080B12` / `#100F09`
  * **Cyber Emerald / Neon Green**：`#60FF70` / `#00E599` / `#70FE7E` / `#039855`
  * **Glassmorphism Border & Accent**：`rgba(255, 255, 255, 0.08)` / `#2A2A2A` / `#E5E7EB`

---

## 3. 📁 项目目录结构 (Project Directory Structure)

```
05-pricing/
├── public/                          # 静态资源
├── src/
│   ├── components/                  # 核心业务与视图组件
│   │   ├── Navbar.tsx               # 顶部毛玻璃导航栏（含移动端响应式抽屉菜单）
│   │   ├── HeroSection.tsx          # 头部 Hero 区域、双机制卡片与注册赠金入口
│   │   ├── ApiExplorer.tsx          # 4 大 API 分类吸顶导航与 8 张定价详情卡片
│   │   ├── QpsPricingGrid.tsx       # QPS 阶梯计划卡片（Free ~ Enterprise）与权益矩阵
│   │   ├── FaqSection.tsx           # 计费常见问题手风琴组件 (FAQ)
│   │   ├── CtaSection.tsx           # 底部转化入口与 Contact Sales 联系通道
│   │   ├── FooterSection.tsx        # 官方页脚导航与合规资质
│   │   ├── CurvedLightTrailsCanvas.tsx # 卡片贝塞尔曲线光轨动画 Canvas
│   │   ├── DitherBackgroundCanvas.tsx   # Hero 底部渐隐 WebGL2 Dither 着色器点阵
│   │   ├── TableDitherAccent.tsx       # 表格质感背景点缀组件
│   │   └── svgPaths.ts              # 共享 SVG 路径定义库
│   ├── utils/                       # 通用工具函数
│   ├── App.tsx                      # 应用主入口（Lenis 滚动、GSAP 动画与聚光灯监听）
│   ├── main.tsx                     # React 根节点挂载
│   ├── index.css                    # Tailwind CSS v4 入口与全局字体/主题定义
│   └── vite-env.d.ts                # Vite TypeScript 环境声明
├── imports/                         # 页面级骨架编排与静态图片资源
│   └── index.tsx                    # OctenAiInfrastructurePricing 顶层布局
├── pricing-review-checklist.md      # 定价规范评审与对齐问题清单 (P0/P1)
├── handoff.md                       # 跨账号/跨会话交接上下文文档
├── package.json                     # 依赖与命令配置
├── tsconfig.json                    # TypeScript 编译配置
├── vite.config.ts                   # Vite 8 构建与插件配置
└── vercel.json                      # Vercel 静态托管与路由配置
```

---

## 4. 🧩 核心功能与业务模块 (Core Modules & Business Logic)

### 4.1 头部 Hero 区块 (`HeroSection.tsx`)
* **主视觉标语**：大字号 `Fraunces` 金属渐变标题 + DM Sans 副标题。
* **冷启动高亮**：突出显示 `Sign up and get $5 in free balance` 注册福利。
* **核心机制双卡展示**：
  1. `Subscribe QPS Plan`：包含动态光轨速线 Canvas，透出专属并发队列与 SLA 吞吐保障。
  2. `Pay as you go`：动态 SVG 脉冲光效，透出多模态实时搜索、网页抓取与模型调用。
* **桌面/移动端智能布局**：桌面端呈现横向对比配合连贯 `+` 连接线；移动端自动收拢为垂直流动布局。

### 4.2 API 定价探索器 (`ApiExplorer.tsx`)
* **吸顶分类导航**：在滚动至视口顶部时自动 Sticky 吸顶（`top-[58px]`），支持点击平滑锚点定位与滚动状态自动同步高亮。
* **4 大业务分类与 8 张 API 卡片**：
  1. **Search**：Web Search（`$1.50 / 1k searches`）、Broad Search、Full Content（`$1.50 / 1k calls`）、Image & Video Search（带 `Early Access` 徽章）。
  2. **Extract**：Clean content extraction from any URL。
  3. **Embedding**：`octen-embedding` 系列向量模型与 `VL Embedding` 多模态向量模型。
  4. **Applications**：Deep Research（Lite / Standard / Pro 智能体）、Answer & Multimodal Chat。
* **直达体验入口**：每张 API 卡片底部均配备精准对应的 `Get started` 直达链接，直通各自 API / APP Playground。

### 4.3 QPS 阶梯计划网格 (`QpsPricingGrid.tsx`)
* **梯队覆盖**：
  * **Free**：0/月，默认分配基础吞吐。
  * **Startup**：$2,099/月，适合快速起步的生产级 Agent。
  * **Pro**：$13,999/月，保障高并发稳定。
  * **Scale**：$33,999/月，超大规模并发集群。
  * **Enterprise**：定制化 QPS 与专属 SLA 支持。
* **权益精简对齐**：公共权益抽取至底栏统一透出，消除卡片间无意义重复，突出 QPS 吞吐和性价比核心。

### 4.4 常见问题与底部转化 (`FaqSection.tsx` & `CtaSection.tsx`)
* **FAQ 手风琴**：解答 QPS 计算规则、API Credits 扣费逻辑、退款政策与发票支持。
* **CTA 转化入口**：包含 `Start Building`（直达 Billing 控制台）与 `Contact sales` 双通道。

---

## 5. 💫 动效、着色器与交互引擎 (Animations, Shaders & Interactions)

### 5.1 Lenis 丝滑平滑滚动
* 初始化 `Lenis` 物理惯性滚动引擎（`duration: 1.2`）。
* 将 Lenis 渲染循环与 `gsap.ticker` 深度绑定（`gsap.ticker.add((time) => lenis?.raf(time * 1000))`），彻底杜绝滚动丢帧与画面撕裂。
* 拦截内部 `#` 锚点点击，自动调用 `lenis.scrollTo(el, { duration: 1.2, offset: -40 })` 执行无抖动精确跳转。

### 5.2 GSAP ScrollTrigger 滚动触发入场
* **Hero Content**：页面加载即触发 `y: 40, duration: 1.0, stagger: 0.15, ease: 'power3.out'`。
* **Section Headers & Cards**：滚动至视口 `top 85%` / `top 80%` 时触发上浮渐显入场动画。
* **无障碍降级**：自动感知系统 `prefers-reduced-motion: reduce` 设置，对无障碍需求用户自动禁用强烈动效。

### 5.3 WebGL2 Dither 着色器与光轨 Canvas
* **DitherBackgroundCanvas**：基于 GLSL Fragment Shader 实时计算 Bayer 矩阵 Dither 点阵粒子，在移动端自动按屏幕比例缩放空心半径（`clamp(aspectRatio, 0.45, 1.0)`），防止窄屏遮挡关键内容。
* **CurvedLightTrailsCanvas**：基于二次贝塞尔曲线渲染动态光束，配合 `IntersectionObserver` 在离屏时自动挂起渲染帧，保障极端省电与低 GPU 占用。

### 5.4 Mouse Spotlight 鼠标聚光灯微交互
* 全局监听 `mousemove`，将鼠标相对于卡片盒模型的物理坐标动态注入为 `--mouse-x` 与 `--mouse-y` CSS 变量，使卡片边框与按钮呈现随光标游动的科技感光晕。

---

## 6. 📱 移动端与响应式设计规范 (Mobile-First Responsive Standards)

* **触控目标优化**：所有按钮、切换 Tab、卡片外链均满足移动端最小 44×44px 舒适点击热区。
* **防截断横向滚动 (Table Overflow Protection)**：
  * 表格容器统一配置 `overflow-x-auto [webkit-overflow-scrolling:touch]`。
  * 右侧列设置充足留白与最小宽度防护，确保小屏滑动到底部时不会裁切文本。
* **光学对齐补偿**：Icon 与标题在小屏折行时使用 `items-start` + `mt-[4px]` 光学补偿，杜绝图标悬空。

---

## 7. 🚀 快速启动与构建 (Quick Start & Commands)

### 7.1 环境准备
* **Node.js**：`>= 18.0.0`
* **包管理器**：`pnpm >= 8.0.0`（强制使用 pnpm）

### 7.2 安装依赖
```bash
pnpm install
```

### 7.3 本地启动开发服务器
```bash
pnpm dev
```
开发服务器将运行在 `http://localhost:5173/`（支持局域网 `--host 0.0.0.0` 移动端真机联调）。

### 7.4 生产打包与验证
```bash
pnpm build
```
打包产物将自动生成并校验至 `dist/` 目录。

### 7.5 本地预览打包产物
```bash
pnpm preview
```

### 7.6 代码格式化
```bash
pnpm format
```

---

## 8. 📦 部署与发布 (Deployment & CI/CD)

* **托管平台**：[Vercel](https://vercel.com/)
* **配置文件**：[vercel.json](file:///x:/XCoding/Octen/05-pricing/vercel.json)
* **生产分支**：`master`
* **部署流程**：将代码 Push 至 `origin/master` 后，Vercel 自动触发 CI/CD 构建流水线（执行 `pnpm build` 并发布 `dist/` 目录）。

---

## 9. 📚 评审与交接文档 (Review & Handoff Reference)

* 📋 **定价方案对齐清单**：[pricing-review-checklist.md](file:///x:/XCoding/Octen/05-pricing/pricing-review-checklist.md)（记录 P0/P1 文案、入口及商业模型对齐状态）
* 🔄 **跨账号上下文交接**：[handoff.md](file:///x:/XCoding/Octen/05-pricing/handoff.md)（记录关键修改记录、设计决策与开发注意事项）
* 🤖 **AI 协作规范**：[AGENTS.md](file:///x:/XCoding/Octen/05-pricing/AGENTS.md)

---

<div align="center">
  <sub>Built with ❤️ by Octen AI Team. Powering the next-generation AI Search Infrastructure.</sub>
</div>

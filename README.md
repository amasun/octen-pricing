# Octen Pricing Page - 移动端适配与项目开发指南

本文档记录了 Octen Pricing 移动端响应式改造的技术框架、交互规范、GSAP 与 Lenis 动画平滑滚动体系、Hero WebGL2 Shader 与 Pass4 Mouse Liquify 流体拖尾引擎、移动端适配原则以及开发维护注意事项。

> [!NOTE]
> **设计规范关注说明**：
> 请注意，开发与审核过程中**无需过分关注 Navbar (顶栏) 与 Footer (页脚) 的特定细节样式**，其规范与最终展现效果请**统一参考 Figma 设计稿**。重点关注页面核心区域（Hero 响应式、QPS 方案卡片密度压缩、Pay-As-You-Go 2×2 Tab 与表格横向滑动防截断）的逻辑与表现。

---

## 🛠️ 1. 技术框架 (Technical Stack)

- **核心框架**：React 18 + TypeScript + Vite 8
- **动画引擎**：GSAP 3 (`gsap`) + ScrollTrigger 插件 (滚动触发入场动画)
- **平滑滚动**：Lenis (`lenis` ^1.3.25) 丝滑平滑滚动引擎，与 GSAP Ticker 高帧率同步
- **WebGL2 Shader 特效引擎**：
  - `ditherShaderEngine.ts`：Bottom-Fade WebGL2 Dither 着色器引擎
  - `Pass4MouseLiquify` (`pass4-mouse-liquify.js`)：Pass 4 乒乓 FBO 鼠标液化流体轨迹模拟器
  - `CurvedLightTrailsCanvas`：弧形光轨与二次贝塞尔扭曲速线引擎
- **样式系统**：Tailwind CSS v4 + Custom Utility Classes
- **字体系统**：DM Sans (正文/表格/按钮/全局 UI 字体), JetBrains Mono (代码/等宽价格/模型标识), Fraunces (大标题/Serif 风格)
- **图标系统**：Lucide React (`lucide-react`) + 精准 SVG Icon 组件 (TextIcon, ImageIcon, VideoIcon, CodeIcon, ChevronIcon 等)
- **包管理器**：pnpm

---

## 💫 2. 动画与平滑滚动体系 (GSAP, Lenis & Shader Architecture)

### 2.1 Hero WebGL2 Bottom-Fade Dither 着色器与 Pass 4 液化流体拖尾引擎
- **Bottom-Fade Dither 着色器背景 (`DitherBackgroundCanvas` & `ditherShaderEngine.ts`)**：
  - 基于 WebGL2 GLSL Fragment Shader，在 Hero 背景层渲染具有 2-Tone 调色（霓虹绿 `#38ef7d` 与黄绿 `#d4f952`）的稀疏离散斑块点阵及银灰像素网格线框（`#a8a8a8`）。
  - **核心参数配置**：
    - `hollowRadius: 0.26` (中心空出半径为 26%，具备移动端宽高比响应式自适应算法 `uHollowRadius * clamp(aspectRatio, 0.45, 1.0)`，防止窄屏手机擦除两侧斑块)
    - `rippleFrequency: 2.50` (Blob Threshold = 2.50 斑块密度)
    - `edgeColorWidth: 0.98` (Edge Color Width 边缘色彩宽度占比)
    - `ditherScale: 0.31` (Bayer 矩阵采样缩放)
    - `noiseSpeed: 0.135` (湍流流动速度)

- **Pass 4 鼠标液化流体轨迹引擎 (`Pass4MouseLiquify`)**：
  - 深度集成 `X:\XCoding\shader\unicorn\pass4-mouse-liquify.js`。利用 WebGL2 Ping-Pong FBO 帧缓冲区，每帧对鼠标划过的物理移动矢量、速度衰减（`uTailParam: 70`）、动量与域扭曲（Domain-Warped Liquify）进行实时流体力学求解。
  - 将流体运动矢量纹理实时注入 Dither Fragment Shader，当鼠标在 Hero / Navbar 划过时，流体力学漩涡与液化动量直接驱动 Bayer 矩阵 Dither 粒子发光与旋转，形成顺滑流动的液化拖尾气泡效果。
  - **边界平滑销毁机制 (`_deactivateMouse`)**：实时判定鼠标是否位于 Hero 视口内。当鼠标离开 Hero 区域（`mouseleave`）或向下滚动离开视口时，瞬移坐标并清空速度差，使余晖在几毫秒内自然自然平滑淡出，彻底解决拖尾贴附/粘附在 Hero 下边缘的问题。

### 2.2 卡片 Speed Line 弧形速线 (`CurvedLightTrailsCanvas`)
- 渲染二次贝塞尔弯曲光轨与波浪动效，在鼠标 Hover 卡片时动态穿梭变幻。
- **视口性能感知 (IntersectionObserver)**：自动监听 Canvas 视口，屏外自动挂起 WebGL `requestAnimationFrame` 渲染帧，极大节省 GPU 资源。不支持 WebGL2 时无缝降级展示高清静态 PNG 图。

### 2.3 Hero SVG 矢量动效与鼠标聚光灯 (SVG Animations & Mouse Spotlight)
- **矢量 Icon 微交互**：Hero 区域内的同类 Label 标签（Text, Image, Video, Code）统一替换为高分辨率 Lucide 矢量 SVG 路径，支持高分屏无损显示。
- **鼠标聚光灯 (Mouse Spotlight)**：`App.tsx` 动态监听 `mousemove` 事件，将鼠标在 Hero 卡片与按钮内的物理坐标实时注入为 `--mouse-x` 与 `--mouse-y` CSS 变量，结合卡片边框实现光晕随鼠标移动的科技感微交互。

### 2.4 Lenis 丝滑平滑滚动 (Lenis Smooth Scroll)
- **配置与参数**：在 `App.tsx` 中初始化 `Lenis`（`duration: 1.2`, `easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))`），提供现代极简的平滑滚轮体验。
- **与 GSAP 帧同步**：通过 `gsap.ticker.add((time) => lenis.raf(time * 1000))` 将 Lenis 渲染循环挂载至 GSAP Ticker，并在 `scroll` 事件中触发 `ScrollTrigger.update()`，彻底避免滚动撕裂或动画落后现象。
- **锚点平滑跳转**：拦截 `#` 锚点链接点击，优先调用 `lenis.scrollTo(el, { duration: 1.2, offset: -40 })` 实现精准偏移定位。

---

## 🖱️ 3. 交互与 UI 设计规范 (UI & Interaction Specifications)

### 3.1 Hero 双卡片标题 Figma 金属渐变与零布局影响修饰
- **Figma 双重线性渐变裁剪**：
  - 标题 `Subscribe QPS Plan` 与 `Pay as you go` 严格应用 Figma 规范中的双重线性渐变 `linear-gradient(90deg, #535353 28.33%, #000000 56.07%, rgba(0, 0, 0, 0.67) 70.75%), linear-gradient(...)` 结合 `-webkit-background-clip: text`，呈现出高级金属质感。
- **零布局影响文本不切边技术 (Zero Layout Impact)**：
  - 使用 `py-[2px] -my-[2px] overflow-visible` 组合：`py-[2px]` 为字体艺术字伸展部提供绘制空间；`-my-[2px]` 在 DOM 盒模型中对冲抵消，确保卡片原始高度与标题-辅助文字间距（统一为 `gap-[8px]`）**0px 改变**。

### 3.2 Hero 区域双卡片与引导连接
- **PC 桌面端**：双卡片左右横向对比，中间放置连贯的加号 (`+`) 与左右连接线。
- **移动端**：自动切换为上下纵向排列，中间的连接线与加号调整为横向跨越两个卡片中间，逻辑连贯且顺畅。

### 3.3 透明 Glassmorphic Navbar (顶栏)
- Navbar 背景设为透明，移除了背景模糊 `backdrop-blur`，使 Hero 顶部的 Dither 着色器粒子与银灰网格清晰透出。

### 3.4 Footer (页脚) 布局重构
- 移除了底部容器的分割线，将背景 Dither 图片上移 30px。
- 将 `SOC 2 Certified` 认证徽章重构为独立块级元素，置于 Privacy & Terms 链接上方，整体高度收紧 50px。

### 3.5 Unified LLM Model Gateway 动态交互与响应式适配 (`ModelGatewayMarquee`)
- **缓速帧驱动与双向手势/鼠标拖拽引擎**：
  - **帧驱动慢速平移**：基于 `requestAnimationFrame` 渲染步进化，以 **`0.45px/帧`** 的极缓速度平滑滚屏。
  - **双向手势与鼠标拖拽 Scrubbing**：支持桌面端 `cursor-grab / cursor-grabbing` 鼠标按住左右随意拖拽 hold 住前后查看，以及移动端单指触控滑动 (`onTouchStart/Move/End`)。松手或离开后在当前位置自然接续滚屏。
  - **四倍数组无缝闭环**：采用 4 倍品牌数组组合结合 `scrollWidth / 2` 模运算回弹逻辑，实现左右双向无缝无限循环，拖拽无边界断层。
- **全屏突破与移动端响应式适配**：
  - **桌面端（`≥ 640px`）**：采用全视口突破算法（`sm:w-[calc(100vw-40px)] sm:relative sm:left-1/2 sm:-translate-x-1/2`），两侧向内收缩 20px 安全边距，配备 `68px` 左右两端渐隐蒙版 (`sm:[mask-image:linear-gradient(...)]`)；
  - **移动端（`< 640px`）**：突破父级 16px 内边距（`w-screen relative left-1/2 -translate-x-1/2`），实现左右 0 边距全屏平铺全宽显示，同时完全移除渐隐遮罩 (`[mask-image:none]`)，确保小屏毫无视线遮挡。

---

## 📱 4. 移动端适配原则 (Mobile Adaptation Principles)

### 4.1 Pay-As-You-Go Tab 2×2 网格与标题描述
- **2×2 网格布局**：移动端采用 2×2 网格（Pill 胶囊风格按钮），取消原本易被忽略的横向滚屏，使 4 个分类一目了然。
- **描述单行防护**：桌面端描述文字设为 `sm:whitespace-nowrap` 单行不换行，移动端使用 `whitespace-normal text-center` 自动折行，彻底消除 360px 小屏下的白边溢出问题。

### 4.2 表格横向滚动与容器留白 (Table Overflow Safety)
- **整体卡片滚动**：最外层包裹 `w-full overflow-x-auto [webkit-overflow-scrolling:touch]`，内部的绿边渐变顶栏与白色内容块 (`Content Container`) 作为统一整体同步滚动，防止露底。
- **右侧截断防护**：为各 Tab 表格定义充足的最小宽度 (`min-w-[1005px ~ 1240px]`)，且最后一列分配足够列宽与 `20px` 侧边内边距，确保滑动到最右侧时保留视觉余量。

---

## ⚠️ 5. 项目构建与命令 (Build & Commands)

1. **开发启动**
   ```bash
   pnpm dev
   ```

2. **生产构建**
   ```bash
   pnpm build
   ```
   打包产物将自动生成并校验至 `dist/` 目录。

3. **Git 版本追踪**
   项目已初始化本地 Git 仓库，所有交互调整与 Shader 特效更新均以语义化 Commit 提交保存。

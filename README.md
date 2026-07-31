# Octen Pricing Page - 移动端适配与项目开发指南

本文档记录了 Octen Pricing 移动端响应式改造的技术框架、交互规范、GSAP 与 Lenis 动画平滑滚动体系、Hero WebGL2 Shader 与 SVG 微动效、移动端适配原则以及开发维护注意事项。

> [!NOTE]
> **设计规范关注说明**：
> 请注意，开发与审核过程中**无需过分关注 Navbar (顶栏) 与 Footer (页脚) 的特定细节样式**，其规范与最终展现效果请**统一参考 Figma 设计稿**。重点关注页面核心区域（Hero 响应式、QPS 方案卡片密度压缩、Pay-As-You-Go 2×2 Tab 与表格横向滑动防截断）的逻辑与表现。

---

## 🛠️ 1. 技术框架 (Technical Stack)

- **核心框架**：React 18 + TypeScript + Vite 8
- **动画引擎**：GSAP 3 (`gsap`) + ScrollTrigger 插件 (滚动触发入场动画)
- **平滑滚动**：Lenis (`lenis` ^1.3.25) 丝滑平滑滚动引擎，与 GSAP Ticker 高帧率同步
- ** Shader 特效**：WebGL2 高性能 Fragment Shader (`CurvedLightTrailsCanvas` 弧形光轨与扭曲速线引擎)
- **样式系统**：Tailwind CSS v4 + Custom Utility Classes
- **字体系统**：DM Sans (正文/表格/按钮/全局 UI 字体), JetBrains Mono (代码/等宽价格/模型标识), Fraunces (大标题/Serif 风格)
- **图标系统**：Lucide React (`lucide-react`) + 精准 SVG Icon 组件 (TextIcon, ImageIcon, VideoIcon, CodeIcon, ChevronIcon 等)
- **动态特效**：HTML5 Canvas 动态粒子与光轨效果 + 鼠标光晕跟动手感 (Mouse Spotlight)
- **包管理器**：pnpm

---

## 💫 2. 动画与平滑滚动体系 (GSAP, Lenis & Shader Architecture)

### 2.1 Hero WebGL2 Shader 背景与光轨引擎 (`DitherBackgroundCanvas` & `CurvedLightTrailsCanvas`)
- **Bottom-Fade Dither 着色器背景 (`DitherBackgroundCanvas` & `ditherShaderEngine.ts`)**：
  - 源自 `bottom-dither-demo.html` 的 WebGL2 GLSL Fragment Shader。在 Hero 背景层渲染具有 2-Tone 调色（霓虹绿 `#38ef7d` 与黄绿 `#d4f952`）的稀疏斑块点阵及银灰像素网格线框（`#a8a8a8`）。
  - 支持湍流流速 (`noiseSpeed: 0.135`)、Bayer 矩阵 Dither 采样 (`ditherScale: 0.31`)、中心空出羽化掩码 (`hollowRadius: 0.21`) 与底部向上的平滑渐变掩码。
- **卡片 Speed Line 弧形速线 (`CurvedLightTrailsCanvas`)**：
  - 渲染二次贝塞尔弯曲光轨与波浪动效，在 hover 时动态穿梭变幻。
- **视口性能感知 (IntersectionObserver)**：
  - 自动监听 Canvas 视口，屏外自动挂起 WebGL `requestAnimationFrame` 渲染帧，极大节省 GPU 资源。不支持 WebGL2 时无缝降级展示高清静态 PNG 图。

### 2.2 Hero SVG 矢量动效与鼠标聚光灯 (SVG Animations & Mouse Spotlight)
- **矢量 Icon 微交互**：Hero 区域内的同类 Label 标签（Text, Image, Video, Code）全部替换为高分辨率 Lucide 矢量 SVG 路径，支持高分屏无损显示。
- **鼠标聚光灯 (Mouse Spotlight)**：`App.tsx` 动态监听 `mousemove` 事件，将鼠标在 Hero 卡片与按钮内的物理坐标实时注入为 `--mouse-x` 与 `--mouse-y` CSS 变量，结合卡片边框实现光晕随鼠标移动的科技感微交互。

### 2.3 Lenis 丝滑平滑滚动 (Lenis Smooth Scroll)
- **配置与参数**：在 `App.tsx` 中初始化 `Lenis`（`duration: 1.2`, `easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))`），提供现代极简的平滑滚轮体验。
- **与 GSAP 帧同步**：通过 `gsap.ticker.add((time) => lenis.raf(time * 1000))` 将 Lenis 渲染循环挂载至 GSAP Ticker，并在 `scroll` 事件中触发 `ScrollTrigger.update()`，彻底避免滚动撕裂或动画落后现象。
- **锚点平滑跳转**：拦截 `#` 锚点链接点击，优先调用 `lenis.scrollTo(el, { duration: 1.2, offset: -40 })` 实现精准偏移定位。

### 2.4 GSAP ScrollTrigger 滚动入场动画
- **Hero 视口入场**：`[data-name="hero"]` 元素按顺序 `y: 40 -> 0`, `stagger: 0.15`, `ease: 'power3.out'` 依次渐现。
- **QPS 方案卡片**：`#qps-plans` 视口滚动至 80% 时，卡片组按 `y: 50 -> 0`, `stagger: 0.1` 错落渐现。
- **Pay-As-You-Go & FAQ 模块**：当视口滚动至 85% 时，触发展示平滑向上升起动画（`y: 30 -> 0`, `duration: 0.8`）。
- **动效减弱适配 (a11y)**：自动识别系统的 `prefers-reduced-motion: reduce` 设置，当用户开启减弱动画时自动跳过 GSAP / Lenis / Canvas 动画，保证可访问性。

---

## 🖱️ 3. 交互规范 (Interaction Specifications)

### 3.1 Hero 区域双卡片与引导连接
- **PC 桌面端**：双卡片左右横向对比，中间放置连贯的加号 (`+`) 与左右连接线。
- **移动端**：自动切换为上下纵向排列，中间的连接线与加号调整为横向跨越两个卡片中间，逻辑连贯且顺畅。

### 3.2 Hero 标签格式与 Icon 规范
- **同类标签格式**：统一采用 `inline-flex items-center gap-[4px] px-[6px] py-[4px] h-[22px] rounded-[4px] bg-white border border-[#C5CCD2]` 样式。
- **图标替换**：文字/类型标签图标统一替换为 Lucide 家族的 Type Icon SVG 路径，保持视觉统一与高分辨率。

### 3.3 Subscribe QPS Plan 卡片
- **移动端间距压缩**：收紧内边距与垂直间距，在保持高可读性的前提下显著降低卡片高度，提高移动端视口内容利用率。
- **PC 端样式保持**：桌面端像素与间距规范 100% 不变。

### 3.4 Pay-As-You-Go Tab 导航
- **2×2 网格布局**：移动端采用 2×2 网格（Pill 胶囊风格按钮），取消原本易被忽略的横向滚屏，使 4 个分类一目了然。
- **状态高亮**：激活态配备清晰的高亮背景与无障碍属性 (`role="tab"`, `aria-selected`)。

---

## 📱 4. 移动端适配原则 (Mobile Adaptation Principles)

### 4.1 文字意外折行防护 (Anti-Wrapping Safety)
- 所有数据单元格（模型 Identifier、价格公式、QPS 速率、缓存读写率、计费单位等）显式设置 `shrink-0 whitespace-nowrap`，杜绝单词或关键数字在小屏下折行挤压。

### 4.2 表格横向滚动与容器留白 (Table Overflow & Margin Safety)
- **整体卡片滚动**：最外层包裹 `w-full overflow-x-auto [webkit-overflow-scrolling:touch]`，内部的绿边渐变顶栏与白色内容块 (`Content Container`) 作为统一整体同步滚动，防止露底。
- **右侧截断防护**：为各 Tab 表格定义充足的最小宽度 (`min-w-[1005px ~ 1240px]`)，且最后一列（Description / Best Architectural Fit / Cache Write）分配足够列宽与 `20px` 侧边内边距。当滑动到最右侧时，文字右侧依然保有舒适留白，绝对不被裁切。

### 4.3 响应式断点控制 (Breakpoint Strategy)
- 严格遵循 `sm:` (640px) 断点隔离原则。移动端样式使用默认 CSS 类，桌面端样式前缀添加 `sm:`，确保 PC 端视口 100% 像素级对齐。

---

## ⚠️ 5. 其他注意事项 (Other Precautions)

1. **项目构建与验证**
   - 开发启动：`pnpm dev`
   - 生产打包：`pnpm build`
   - 打包产物位于 `dist/` 目录，构建时自动进行 Vite & TypeScript 编译检查。

2. **Canvas 性能与生命周期管理**
   - `CurvedLightTrailsCanvas` 组件内部已封装 `requestAnimationFrame` 循环与窗口 resize 事件监听，在组件卸载时会自动销毁 animation frame 防止内存泄漏。
   - `App.tsx` 销毁钩子中包含 `gsap.context.revert()` 和 `lenis.destroy()`，确保单页应用或重新挂载时不留遗留监听器。

3. **SVG 路径与样式一致性**
   - 新增图标时优先提取至 `src/components/svgPaths.ts` 或使用 `lucide-react`，确保 fill/stroke 与父级 `currentColor` 绑定，方便 hover 与主题色响应。

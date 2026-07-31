# Octen Pricing 项目交接文档 (Handoff Document)

本文档整理了 Octen Pricing 移动端响应式项目的最新开发进度、核心架构设计决策、已解决的问题及后续可扩展计划，方便同事快速接手与维护。

> [!NOTE]
> **关于 Navbar 与 Footer 样式的说明**：
> 请注意，在审查或后续开发中**无需过分关注 Navbar (顶栏) 与 Footer (页脚) 的特定细节样式**，其准确规范请**统一参考 Figma 设计稿**。

---

## 📌 1. 项目基础信息与启动命令

- **项目路径**：`Convert to mobile-friendly HTML/`
- **核心框架**：React 18 + TypeScript + Vite 8 + Tailwind CSS v4 + GSAP + Lenis
- **启动与打包命令**：
  ```bash
  # 安装依赖
  pnpm install

  # 本地开发
  pnpm dev

  # 构建打包
  pnpm build
  ```

---

## 🛠️ 2. 核心架构与设计决策

1. **全套动画与丝滑滚动 (GSAP + Lenis)**
   - `App.tsx` 中初始化 `Lenis` 丝滑平滑滚动，并与 `gsap.ticker` 绑在同一渲染帧循环中，避免滚动撕裂。
   - 自动检测 `prefers-reduced-motion`，若系统开启减弱动画则优雅挂起动画，保障 a11y 无障碍体验。

2. **WebGL2 着色器与优雅降级**
   - `CurvedLightTrailsCanvas.tsx` & `curvedLightTrails.ts` 实现了基于 WebGL2 GLSL Shader 的弧形光轨与扭曲速线。
   - 使用 `IntersectionObserver` 监测视口，屏外自动挂起 `rAF` 渲染帧，极大地释放 GPU。不支持 WebGL2 时无缝降级为 PNG 静态图片。

3. **字体统一规范**
   - 全局 UI、表格、正文与按钮统一采用 Google Fonts `DM Sans` 字体。
   - 大标题采用 `Fraunces` (Serif 风格)，代码/等宽价格/模型标识采用 `JetBrains Mono`。

---

## 📱 3. 已解决的关键问题与移动端优化

1. **Hero 区域双卡片与引导连接**
   - 移动端自动转为纵向单列布局，中间的连接线与加号横向跨越两个卡片之间，引导逻辑连贯。
   - 同类 Tag 标签统一替换为 Lucide 矢量图标，保持高清晰度。

2. **Subscribe QPS Plan 卡片高度收缩**
   - 在保持高可读性的前提下压缩移动端内边距与间距，降低卡片高度，提高可视密度。
   - PC 桌面端样式 100% 保持原有像素规范。

3. **Pay-As-You-Go 2×2 网格与表格截断修复**
   - **Tab 导航**：移动端改为 2×2 Pill 网格布局，取消横向滚屏。
   - **防折行**：所有关键单元格（模型 ID、价格、QPS、缓存读写率）显式设置 `shrink-0 whitespace-nowrap`。
4. **Unified LLM Model Gateway 模块移除与引导跳转**
   - 移除了独立的 `Unified LLM Model Gateway` 模块与跑马灯。
   - 在 `Applications & Deep Research` 表格下方新增了带跳转链接的文本提示：“For Applications requiring LLM generation, access 20+ leading AI models through a unified gateway, [click to see the model gateway price](https://docs.octen.ai/overview/pricing#model-gateway)”。

---

## 📁 4. 转交项目时需要忽略的路径

在打包或发送压缩包给同事时，仅需忽略以下由本地生成的目录：
- ❌ `node_modules/`（本地依赖包，体积大，同事解压后运行 `pnpm install` 自动生成）
- ❌ `dist/`（打包产物，运行 `pnpm build` 重新生成）
- ❌ `.figma/`（缓存文件）
- ❌ `.DS_Store` / `Thumbs.db`（系统隐形文件）

已在项目根目录创建标准 `.gitignore` 文件。

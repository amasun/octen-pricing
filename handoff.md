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

---

## 5. 📦 部署与发布
- 项目已配置 `vercel.json`（静态产物目录 `dist`，构建命令 `pnpm build`）。
- 关联 Vercel 的生产分支为 `master`，Push 到 `master` 自动触发部署。

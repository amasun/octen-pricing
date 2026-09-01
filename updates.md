# Octen Pricing 页面更新与优化记录

- **Figma 设计稿源文件**：`https://www.figma.com/design/jnIlRSuXffn5g2OxnsqYIE/Octen_%E6%B1%87%E6%80%BB?node-id=13350-2947&t=zHKsLMgbWwv2HovN-4`

本文档总结了本阶段定价页面的核心功能迭代、视觉优化与交互升级，并汇总了后续待调整的线上事项。

---

## 🚀 一、本阶段已完成更新

### 1. How Octen Works 模块升级
- **新增第三张入口卡片（Enterprise Plan）**
  - 入口卡片平滑扩展为三卡片布局（Pay-as-you-go、QPS Plan、Enterprise Plan）；
  - 新增卡片 3 专属动态视口，支持点击后精准平滑滚动定位至企业级方案。
- **默认静止 · 悬浮激活动态机制**
  - 卡片 3 默认状态下保持静态架构蓝图呈现；
  - 仅在鼠标悬浮（Hover）时，平滑激活左侧粒子流注入、右侧双向流光激光与两端盒子的扩散涟漪，交互流畅克制。
- **中心 Octen Logo 悬浮交互微光**
  - 三张卡片的中心 Logo 在默认态保持深邃纯粹；
  - 鼠标悬浮时触发柔和微放大与翡翠绿氛围高光微晕，三张卡片视觉响应严格统一。
- **统一深邃科技网格底纹 (Grid Texture)**
  - 三张卡片黑色视口区域统一垫入通透的 20px 科技网格纹理与中心径向聚光灯，大幅提升画面的层次感与极客质感。
- **去除卡片悬浮跳动位移**
  - 卡片整体在 Hover 时位置保持稳固（无跳动上浮），完整保留柔和的投影浮现与边框过渡反馈。
- **卡片间隙与布局优化**
  - 彻底移除了卡片间隙的 `+` 与 `/` 符号，三张卡片间距统一调整为清晰规整的 `16px`。

### 2. Pay-as-you-go 计费模块细节优化
- **金额与文案对齐**
  - 重新梳理并校准了 Unit Price 与 Pricing Details 中的各计费项排版，确保金额、单位与折后价严格横向对齐，信息层级更清晰易读。

### 3. Enterprise 独立旗舰区域与 3×2 Bento 卡片重构
- **独立专属 Section**
  - 将 Enterprise Custom 由原先附属于 QPS Plan 下方的横条卡片重构升级为完全独立的专属旗舰模块（`#enterprise-plan`），拥有独立的标题区与架构定位；
- **六大指标独立卡片化（3×2 Bento Grid）**
  - 将企业级权益拆解为 6 张独立的科技感功能卡片（包含 Higher Throughput SLA、Custom Data Sources Integration、Dedicated & Isolated Pipelines、Dedicated Slack & 24/7 Support、Custom Contract & Invoicing、Volume Tier Discounts）；
  - 每张卡片配备专属图标容器、等宽状态标签（如 `99.99% UPTIME`、`ZERO CONTENTION` 等）、标题与详细技术说明，支持悬浮微光流转动效；
- **底部通栏专属 CTA Banner**
  - 新增独立通栏咨询卡片，配置皇冠金微光标识、引导文案与一键直连商务咨询通道（`Contact Sales` + `support@octen.ai`）。


---

## 📌 二、后续 / 线上待调整事项

1. **QPS Plan 价格符与字体校准**
   - 线上环境中的 `$` 货币符号垂直对齐基线需要调整为与价格数字顶部平齐，并校准等宽字体规范。
2. **Model Gateway 图标补齐**
   - 为 Model Gateway 计费及说明模块补全对应的专属功能矢量图标。

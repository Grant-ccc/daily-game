# 🎮 My Everyday GAME - 个人游戏展柜

这是一个基于 **React + Vite + TypeScript** 开发的响应式网页，用于展示我日常喜爱的国产恋爱/律政手游收藏。

## 🌟 项目亮点
* **精选收藏**：收录了《恋与制作人》、《未定事件簿》及《恋与深空》等热门作品。
* **响应式设计**：使用 CSS Flexbox 布局，适配不同屏幕尺寸。
* **自动化部署**：通过 `gh-pages` 实现了代码变更后的快速在线更新。

## 🛠️ 技术栈
* **框架**: React 18
* **构建工具**: Vite
* **语言**: TypeScript (确保了数据流的类型安全)
* **部署**: GitHub Pages

## 🚀 快速开始

### 1. 克隆项目
git clone https://github.com/Grant-ccc/daily-game.git

### 2. 安装依赖
npm install

### 3. 本地开发
npm run dev

### 4. 打包部署
npm run deploy

## 📂 文件结构说明
* `src/data.ts`: 存储所有游戏的核心数据（标题、公司、描述、链接）。
* `src/components/`: 包含 `Navbar`（导航栏）和 `Entry`（信息展示卡片）等组件。
* `src/img/`: 存放游戏精美海报及图标资源。

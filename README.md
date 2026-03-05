# 🎮 My Everyday GAME - 个人游戏展柜 
>Scrimba课程中React练习


这是一个基于 **React + Vite + TypeScript** 开发的响应式网页，用于展示我日常喜爱的国产恋爱/律政手游。该练习项目主要是尝试构建一个可维护的应用。本项目核心练习了：**React 数据驱动渲染、TypeScript 类型管理、以及基于 GitHub Pages 的自动化部署流**。

## 项目预览
https://grant-ccc.github.io/daily-game/

## 项目练习重点
* **组件复用**；拆分成Entry和Navbar两个独立组件，在Entry里面通过props将数据传递数据给Entry组件。对于后期增删添改只需要对data.ts文件内部修改，而不用动到App和Entry组件
* **数据分离**：将数据放入data.js文件里面，数据更集中更清晰更方便修改
* **循环渲染**：在App.tsx里面使用.map()方法
* **响应式设计**：使用 CSS Flexbox 布局，适配不同屏幕尺寸。
* **自动化部署**：通过 `gh-pages` 实现了代码变更后的快速在线更新。

## 技术栈
* **框架**: React 18
* **构建工具**: Vite
* **语言**: TypeScript (确保了数据流的类型安全)
* **部署**: GitHub Pages

## 工具链和工程化
* **Vite**：学习了如何使用现代构建工具快速启动项目。
* **TypeScript**：虽然一开始报了错，但学会了如何给代码加“约束”（比如 props: any），这是大型项目防止 Bug 的利器。
* **Git/GitHub**：从 git init 到 git push，你掌握了程序员最重要的“存盘”和“协作”技能。
* **CI/CD 部署**：虽然只是简单的 gh-pages，体验自动化部署。

## 快速开始

### 1. 克隆项目
git clone https://github.com/Grant-ccc/daily-game.git

### 2. 安装依赖
npm install

### 3. 本地开发
npm run dev

### 4. 打包部署
npm run deploy

## 文件结构说明
* `src/data.ts`: 存储所有游戏的核心数据（标题、公司、描述、链接）。
* `src/components/`: 包含 `Navbar`（导航栏）和 `Entry`（信息展示卡片）等组件。

#### 练习指导来源
Section 2 Data-Driven React
https://scrimba.com/learn-react-c0e

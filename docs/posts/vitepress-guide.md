---
title: VitePress 入门指南
date: 2024-01-20
tags: [VitePress, 教程]
---

# VitePress 入门指南

[VitePress](https://vitepress.dev/) 是 Vue 团队推出的新一代静态网站生成器，特别适合构建技术文档和博客。

## 为什么选择 VitePress？

### 1. 极速的开发体验

基于 [Vite](https://vitejs.dev/)：
- ⚡ 即时的服务器启动
- 🔥 闪电般的热更新 (HMR)
- 📦 优化的生产构建

### 2. Vue 3 支持

- 使用 Composition API
- TypeScript 原生支持
- 组件化开发

### 3. Markdown 增强

VitePress 对 Markdown 进行了强大的扩展：

#### 代码高亮

```typescript
interface User {
  name: string
  age: number
  email?: string
}

const user: User = {
  name: '张三',
  age: 25,
}
```

#### 自定义容器

::: info 信息
这是一个信息提示框。
:::

::: tip 提示
这是一个提示框。
:::

::: warning 警告
这是一个警告框。
:::

::: danger 危险
这是一个危险警告框。
:::

::: details 点击查看详情
这里是折叠的内容。
:::

## 项目结构

```
website/
├── docs/                  # 源文件目录
│   ├── .vitepress/       # 配置文件
│   │   ├── config.ts     # 主配置
│   │   └── theme/        # 主题定制
│   ├── public/           # 静态资源
│   ├── posts/            # 博客文章
│   ├── index.md          # 首页
│   └── about.md          # 关于页面
├── package.json
└── .github/
    └── workflows/        # CI/CD 配置
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |

## 总结

VitePress 是构建个人博客和技术文档的优秀选择。它结合了现代前端技术的优势，提供了出色的开发体验和最终性能。

---

*感谢阅读！更多文章请查看[文章列表](/posts/)*

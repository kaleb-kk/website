# 🌐 我的个人博客

基于 [VitePress](https://vitepress.dev/) 构建的个人博客网站，托管在 **GitHub Pages**。

## ✨ 特性

- ⚡ **VitePress** - 基于 Vue 3 + Vite 的现代静态站点生成器
- 📝 **Markdown** - 使用 Markdown 撰写文章，支持代码高亮、表格等
- 🎨 **深色模式** - 支持明暗主题切换
- 📱 **响应式** - 完美适配手机、平板、桌面
- 🔍 **全文搜索** - 内置搜索功能
- 🚀 **自动部署** - 推送到 main 分支自动部署

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:5173)
npm run dev
```

### 发布新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 文件名会成为文章的 URL 路径（如 `my-post.md` → `/posts/my-post`）
3. 在文件开头添加 frontmatter：

```markdown
---
title: 文章标题
date: 2024-01-20
tags: [标签1, 标签2]
---

# 文章内容

这里是你的文章内容...
```

4. 提交并推送到 `main` 分支，自动触发部署

### 构建与预览

```bash
# 构建
npm run build

# 预览构建结果
npm run preview
```

## 🌏 中国网络访问优化

GitHub Pages 在中国大陆访问可能较慢或不稳定。以下是一些解决方案：

### 方案一：使用自定义域名 + Cloudflare CDN（推荐）

1. 注册一个域名（如通过阿里云、腾讯云等）
2. 将域名 DNS 托管到 Cloudflare（免费）
3. 在 GitHub 仓库 Settings > Pages 中设置自定义域名
4. Cloudflare 会自动为你的网站提供全球 CDN 加速

### 方案二：使用 Vercel 镜像部署

[Vercel](https://vercel.com) 在国内访问相对稳定：

1. 导入 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`docs/.vitepress/dist`
4. Vercel 会提供 `*.vercel.app` 域名或支持自定义域名

### 方案三：Gitee 镜像同步

使用 Gitee 作为国内镜像：

1. 在 Gitee 创建同名仓库
2. 使用 GitHub Actions 同步代码到 Gitee
3. 开启 Gitee Pages 服务

### 方案四：Cloudflare Proxy（免费且简单）

即使没有自定义域名，也可以使用 Cloudflare：
1. 注册 Cloudflare 账号
2. 选择免费域名（如 `*.pages.dev`）
3. 或者使用 Cloudflare Workers 代理

## 📁 项目结构

```
website/
├── docs/                      # 源文件目录
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.ts         # 主配置（导航、侧边栏等）
│   │   └── theme/            # 主题定制
│   ├── public/               # 静态资源（图片、favicon 等）
│   ├── posts/                # 博客文章存放目录
│   │   ├── index.md          # 文章列表页
│   │   ├── hello-world.md    # 示例文章
│   │   └── vitepress-guide.md
│   ├── index.md              # 首页
│   └── about.md              # 关于页面
├── .github/
│   └── workflows/
│       └── deploy.yml        # 自动部署工作流
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ 自定义配置

### 修改网站信息

编辑 [config.ts](docs/.vitepress/config.ts)：

```typescript
export default defineConfig({
  title: '你的网站标题',
  description: '网站描述',

  themeConfig: {
    nav: [...],      // 顶部导航
    sidebar: [...],  // 侧边栏
    socialLinks: [...] // 社交链接
  }
})
```

### 修改主题颜色

在 [theme/index.ts](docs/.vitepress/theme/index.ts) 中可以扩展默认主题。

## 📄 License

MIT License

---

*用 ❤️ 和 VitePress 构建*

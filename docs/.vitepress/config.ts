import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// 自动导入博客文章
import fs from 'fs'
import path from 'path'

const postsDir = fileURLToPath(new URL('../posts', import.meta.url))
const posts = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.md') && file !== 'index.md')
  .sort((a, b) => b.localeCompare(a))
  .map(file => ({
    text: file.replace(/\.md$/, ''),
    link: `/posts/${file.replace(/\.md$/, '')}`
  }))

// GitHub Pages 用 /website/，Vercel / Cloudflare Pages 用根路径
const isGitHub = !process.env.CF_PAGES && !process.env.VERCEL
const base = isGitHub ? '/website/' : '/'

export default defineConfig({
  base,
  title: "我的个人博客",
  description: "记录技术、生活与思考",
  lang: 'zh-CN',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      {
        text: '更多',
        items: [
          { text: '关于我', link: '/about' },
          {
            text: '外部链接',
            items: [
              { text: 'GitHub', link: 'https://github.com' },
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '文章列表',
        items: posts
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2024-Present My Blog'
    },

    editLink: {
      pattern: 'https://github.com/<your-username>/website/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

# 個人網站專頁

這是一個使用 Next.js、TypeScript、Tailwind CSS 建立的個人網站，包含互動遊戲展示和部落格系統。

## 功能特色

- 🎨 暗色系設計風格
- 📱 響應式設計
- 🎮 互動遊戲展示
- 📝 部落格系統（MDX）
- 💼 作品集展示
- ⚡ 快速載入與 SEO 優化

## 技術棧

- **Next.js 14** - React 框架
- **TypeScript** - 型別安全
- **Tailwind CSS** - 樣式框架
- **MDX** - Markdown + JSX（使用 gray-matter 和 next-mdx-remote）
- **Framer Motion** - 動畫效果
- **shadcn/ui** - UI 組件庫

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置

```bash
npm run build
```

### 部署

專案已配置好 Vercel 部署，可以直接連接 GitHub 自動部署。

詳細部署指南請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 專案結構

```
├── app/              # Next.js App Router
├── components/       # React 組件
│   ├── layout/      # 布局組件
│   ├── sections/    # 頁面區塊
│   └── ui/          # UI 組件
├── content/         # MDX 內容文件
│   ├── blog/        # 部落格文章
│   ├── works/       # 作品內容
│   └── games/       # 遊戲資訊
└── lib/             # 工具函數
```

## 內容管理

### 新增部落格文章

在 `content/blog/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "文章標題"
date: 2024-01-15
description: "文章摘要"
tags: ["標籤1", "標籤2"]
---

文章內容...
```

### 新增作品

在 `content/works/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "作品標題"
description: "作品描述"
category: "分類"
tech: ["技術1", "技術2"]
featured: true
---

作品詳細內容...
```

### 新增遊戲

在 `content/games/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "遊戲標題"
description: "遊戲描述"
externalLink: "https://example.com"
category: "分類"
---

遊戲介紹...
```

## 自訂設定

### 修改品牌名稱

- `components/layout/Navbar.tsx` - 導航列標題
- `components/layout/Footer.tsx` - Footer 內容
- `app/layout.tsx` - Meta 資訊

### 修改顏色主題

編輯 `tailwind.config.ts` 中的顏色設定。

### 修改 Hero 區塊

編輯 `components/sections/Hero.tsx`。

## 授權

MIT License


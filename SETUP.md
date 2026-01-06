# 安裝與設定指南

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 開發模式

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 3. 建置專案

```bash
npm run build
```

## 自訂內容

### 修改品牌名稱

1. **導航列標題**：編輯 `components/layout/Navbar.tsx`
   ```tsx
   <Link href="/" className="text-xl font-bold text-text-accent">
     你的品牌名稱
   </Link>
   ```

2. **Footer**：編輯 `components/layout/Footer.tsx`

3. **Meta 資訊**：編輯 `app/layout.tsx`
   ```tsx
   export const metadata: Metadata = {
     title: "你的網站標題",
     description: "你的網站描述",
   };
   ```

### 修改 Hero 區塊

編輯 `components/sections/Hero.tsx` 中的標題和描述文字。

### 新增內容

#### 新增部落格文章

在 `content/blog/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "文章標題"
date: 2024-01-15
description: "文章摘要"
tags: ["標籤1", "標籤2"]
---

文章內容使用 Markdown 語法...
```

#### 新增作品

在 `content/works/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "作品標題"
description: "作品描述"
category: "遊戲" # 或 "工具"、"其他"
tech: ["Next.js", "TypeScript"]
featured: true # 是否在首頁顯示
image: "/images/work-image.jpg"
link: "https://example.com"
---

## 專案背景

專案介紹...

## 技術亮點

- 技術點 1
- 技術點 2
```

#### 新增遊戲

在 `content/games/` 目錄下建立新的 `.mdx` 文件：

```mdx
---
title: "遊戲標題"
description: "遊戲描述"
externalLink: "https://your-game.vercel.app"
category: "密室逃脫" # 或 "算命工具" 等
image: "/images/game-image.jpg"
---

遊戲介紹內容...
```

### 修改顏色主題

編輯 `tailwind.config.ts` 中的顏色設定，所有顏色都已經定義在配置中。

### 添加圖片

將圖片放在 `public/images/` 目錄下，然後在內容文件中引用：

```mdx
image: "/images/your-image.jpg"
```

## 部署到 Vercel

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 連接你的 GitHub 倉庫
3. Vercel 會自動偵測 Next.js 專案並部署
4. 在專案設定中添加自訂網域（可選）

## 注意事項

- 所有使用「個人網站」、「範例」等代稱的地方，請根據實際需求修改
- 圖片路徑請確保正確，建議使用相對路徑 `/images/...`
- 社交連結在 `components/layout/Footer.tsx` 中，請修改為實際連結
- 確保所有外部連結（遊戲連結等）都是有效的


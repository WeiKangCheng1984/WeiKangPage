# 網站維護教學指南

## 📁 專案結構概覽

```
專案根目錄/
├── content/              # 內容文件（你主要維護的地方）
│   ├── blog/            # 部落格文章
│   ├── works/           # 作品集
│   └── games/           # 遊戲/工具
├── public/              # 靜態資源（圖片、檔案）
│   └── images/          # 圖片存放位置
└── app/                 # 頁面路由（版面調整）
```

---

## 📝 一、更新部落格文章

### 1.1 新增文章

**步驟：**
1. 在 `content/blog/` 資料夾中創建新的 `.mdx` 文件
2. 檔案名稱 = URL slug（例如：`my-new-post.mdx` → `/blog/my-new-post`）

**範例檔案：`content/blog/my-new-post.mdx`**

```mdx
---
title: "我的新文章標題"
date: 2024-01-20
description: "文章簡短描述，會顯示在卡片和預覽中"
tags: ["標籤1", "標籤2", "標籤3"]
---

# 文章標題

這是文章的內容，使用 **Markdown** 語法撰寫。

## 子標題

- 列表項目 1
- 列表項目 2

### 程式碼範例

\`\`\`javascript
console.log("Hello World");
\`\`\`

## 插入圖片

![圖片描述](/images/my-image.jpg)
```

**Frontmatter 欄位說明：**
- `title`: 文章標題（必填）
- `date`: 發布日期，格式：`YYYY-MM-DD`（必填）
- `description`: 文章描述，顯示在卡片上（必填）
- `tags`: 標籤陣列（選填）

### 1.2 編輯現有文章

**步驟：**
1. 找到 `content/blog/` 中對應的 `.mdx` 文件
2. 直接編輯內容
3. 儲存後，開發伺服器會自動重新載入

**範例：編輯 `content/blog/first-post.mdx`**

```mdx
---
title: "歡迎來到我的部落格（已更新）"
date: 2024-01-15
description: "更新後的描述"
tags: ["介紹", "規劃", "更新"]
---

# 更新後的內容

這裡是更新後的內容...
```

### 1.3 刪除文章

**步驟：**
1. 刪除 `content/blog/` 中對應的 `.mdx` 文件
2. 重新建置網站（`npm run build`）

---

## 🖼️ 二、處理圖片

### 2.1 圖片存放位置

**推薦結構：**
```
public/
└── images/
    ├── blog/           # 部落格圖片
    │   ├── post-1.jpg
    │   └── post-2.png
    ├── works/          # 作品圖片
    │   └── work-1.jpg
    └── games/          # 遊戲截圖
        └── game-1.jpg
```

### 2.2 在文章中插入圖片

**方法 1：使用 Markdown 語法**

```mdx
![圖片描述](/images/blog/my-image.jpg)
```

**方法 2：使用 HTML（更多控制）**

```mdx
<img 
  src="/images/blog/my-image.jpg" 
  alt="圖片描述" 
  className="rounded-lg my-4"
/>
```

### 2.3 在 Frontmatter 中設定封面圖

**部落格文章：**
```mdx
---
title: "我的文章"
date: 2024-01-20
description: "描述"
image: "/images/blog/cover.jpg"  # 封面圖（選填）
tags: ["標籤"]
---
```

**作品集：**
```mdx
---
title: "我的作品"
description: "描述"
image: "/images/works/work-cover.jpg"  # 卡片顯示的圖片
category: "工具"
---
```

### 2.4 圖片最佳實踐

**圖片格式建議：**
- 使用 `.jpg` 或 `.webp`（較小檔案）
- 圖片寬度建議：1200-1600px（文章內圖）
- 卡片封面圖：800-1200px
- 檔案大小：盡量壓縮到 200KB 以下

**圖片優化工具：**
- [TinyPNG](https://tinypng.com/) - 線上壓縮
- [Squoosh](https://squoosh.app/) - Google 圖片優化工具

---

## 🎨 三、更新作品集

### 3.1 新增作品

**步驟：**
1. 在 `content/works/` 創建新的 `.mdx` 文件
2. 填寫 Frontmatter 和內容

**範例：`content/works/my-work.mdx`**

```mdx
---
title: "我的新作品"
description: "作品簡短描述"
category: "工具"              # 分類：工具、遊戲、其他
tech: ["Next.js", "TypeScript"] # 使用的技術（選填）
featured: true                 # 是否為精選作品（選填）
image: "/images/works/my-work.jpg"  # 封面圖（選填）
link: "https://example.com"    # 外部連結（選填）
---

## 專案背景

這裡是專案的詳細介紹...

## 設計思考

設計理念和思考過程...

## 技術亮點

使用的技術和特色...

## 成果展示

專案成果和反饋...
```

**Frontmatter 欄位說明：**
- `title`: 作品標題（必填）
- `description`: 作品描述（必填）
- `category`: 分類（必填）
- `tech`: 技術棧陣列（選填）
- `featured`: 是否精選，`true` 或 `false`（選填）
- `image`: 封面圖路徑（選填）
- `link`: 外部連結（選填）

### 3.2 編輯作品

直接編輯 `content/works/` 中的 `.mdx` 文件即可。

---

## 🎮 四、更新遊戲/工具

### 4.1 新增遊戲

**範例：`content/games/my-game.mdx`**

```mdx
---
title: "我的新遊戲"
description: "遊戲描述"
externalLink: "https://my-game.vercel.app"  # 遊戲連結（必填）
category: "密室逃脫"                         # 分類（選填）
image: "/images/games/my-game.jpg"          # 封面圖（選填）
---

## 遊戲介紹

遊戲的詳細介紹...

## 遊戲特色

- 特色 1
- 特色 2
```

**Frontmatter 欄位說明：**
- `title`: 遊戲標題（必填）
- `description`: 遊戲描述（必填）
- `externalLink`: 外部連結（必填）
- `category`: 分類（選填）
- `image`: 封面圖（選填）

---

## 🎨 五、版面更新

### 5.1 調整首頁區塊順序

**檔案：`app/(home)/page.tsx`**

```tsx
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />              {/* Hero 區塊 */}
      <FeaturedGames />     {/* 精選遊戲 */}
      <Portfolio />         {/* 作品集 */}
      <BlogPreview />       {/* 最新文章 */}
    </div>
  );
}
```

**調整方式：** 重新排列組件順序即可

### 5.2 修改區塊標題

**檔案：`components/sections/FeaturedGamesClient.tsx`**

```tsx
<GradientText size="3xl" gradient="blue">
  精選互動體驗  {/* 修改這裡 */}
</GradientText>
```

**其他區塊：**
- `PortfolioClient.tsx` - 精選作品標題
- `BlogPreviewClient.tsx` - 最新文章標題

### 5.3 調整卡片樣式

**檔案：`components/ui/GameCard.tsx`、`WorkCard.tsx`、`BlogCard.tsx`**

可以調整：
- 卡片大小
- 間距
- 顏色
- 動畫效果

### 5.4 修改導航列

**檔案：`components/layout/Navbar.tsx`**

```tsx
const navItems = [
  { href: "/", label: "首頁" },
  { href: "/works", label: "作品集" },
  { href: "/games", label: "遊戲" },
  { href: "/blog", label: "部落格" },
  { href: "/about", label: "關於" },
];
```

### 5.5 修改顏色主題

**檔案：`app/globals.css`**

修改 CSS 變數：

```css
:root {
  --background: 10 10 10;      /* 背景色 */
  --primary: 65 105 225;        /* 主色（藍色） */
  --card: 26 26 26;             /* 卡片背景 */
  /* ... 其他顏色 */
}
```

**檔案：`tailwind.config.ts`**

調整 Tailwind 顏色配置。

---

## 🚀 六、開發與部署流程

### 6.1 本地開發

```bash
# 啟動開發伺服器
npm run dev

# 瀏覽器開啟
http://localhost:3000
```

**開發時：**
- 修改內容文件後，頁面會自動重新載入
- 修改組件後，需要手動重新載入

### 6.2 預覽建置

```bash
# 建置專案
npm run build

# 預覽建置結果
npm start
```

### 6.3 部署到 Vercel

**自動部署（推薦）：**
1. 將專案推送到 GitHub
2. 在 Vercel 連接 GitHub 倉庫
3. 每次 `git push` 會自動部署

**手動部署：**
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

---

## 📋 七、常用操作快速參考

### 7.1 新增文章
1. 在 `content/blog/` 創建 `.mdx` 文件
2. 填寫 Frontmatter
3. 撰寫 Markdown 內容

### 7.2 新增作品
1. 在 `content/works/` 創建 `.mdx` 文件
2. 填寫 Frontmatter（包含 `category`）
3. 上傳封面圖到 `public/images/works/`
4. 撰寫內容

### 7.3 新增遊戲
1. 在 `content/games/` 創建 `.mdx` 文件
2. 填寫 Frontmatter（包含 `externalLink`）
3. 上傳截圖到 `public/images/games/`
4. 撰寫內容

### 7.4 更新圖片
1. 將圖片放到 `public/images/` 對應資料夾
2. 在 MDX 文件中使用 `/images/...` 路徑引用

### 7.5 調整版面
1. 修改 `app/(home)/page.tsx` 調整區塊順序
2. 修改 `components/sections/` 中的組件調整內容
3. 修改 `components/ui/` 中的組件調整樣式

---

## ⚠️ 八、常見問題

### Q1: 圖片顯示不出來？
**A:** 檢查：
- 圖片路徑是否正確（從 `/images/` 開始）
- 圖片是否放在 `public/images/` 資料夾
- 檔案名稱大小寫是否正確

### Q2: 文章更新後沒顯示？
**A:** 
- 開發模式：重新載入頁面（F5）
- 生產模式：重新建置（`npm run build`）

### Q3: 如何設定文章排序？
**A:** 目前按日期排序，可以在 `lib/content.ts` 中修改排序邏輯。

### Q4: 如何隱藏某篇文章？
**A:** 暫時將 `.mdx` 文件移到其他資料夾，或刪除檔案。

### Q5: 如何修改卡片顯示數量？
**A:** 修改 `components/sections/` 中的組件，調整 `slice()` 參數。

---

## 📚 九、Markdown 語法參考

### 基本語法

```markdown
# 一級標題
## 二級標題
### 三級標題

**粗體** 或 __粗體__
*斜體* 或 _斜體_

- 無序列表
- 項目 2

1. 有序列表
2. 項目 2

[連結文字](https://example.com)

![圖片描述](/images/example.jpg)

`程式碼`

\`\`\`javascript
// 程式碼區塊
console.log("Hello");
\`\`\`

> 引用文字
```

### 進階語法

```markdown
| 表格 | 標題 |
|------|------|
| 內容 | 內容 |

- [ ] 待辦事項
- [x] 已完成

---

水平線
```

---

## 🎯 十、維護檢查清單

### 新增內容時
- [ ] 檔案名稱使用小寫和連字號（`my-new-post.mdx`）
- [ ] Frontmatter 欄位填寫完整
- [ ] 圖片路徑正確
- [ ] 內容格式正確（Markdown）
- [ ] 本地測試無誤

### 更新版面時
- [ ] 修改前先備份
- [ ] 測試響應式設計（手機、平板、桌面）
- [ ] 檢查顏色對比度
- [ ] 確認動畫效果正常

### 部署前
- [ ] 本地建置成功（`npm run build`）
- [ ] 所有連結正常
- [ ] 圖片載入正常
- [ ] 無 Console 錯誤

---

## 📞 需要幫助？

如果遇到問題：
1. 檢查檔案路徑和名稱
2. 查看終端機錯誤訊息
3. 確認 Frontmatter 格式正確
4. 檢查圖片路徑和檔案是否存在

---

**最後更新：2024-01-20**


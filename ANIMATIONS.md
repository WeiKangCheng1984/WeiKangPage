# 動畫系統說明

## 已整合的動畫庫

### 1. Framer Motion
- **用途**：主要動畫庫，處理所有頁面動畫
- **特色**：
  - 流暢的進入動畫
  - 懸停效果
  - 交錯動畫（Stagger）
  - 導航列動畫

### 2. React Particles (tsparticles)
- **用途**：粒子背景效果
- **特色**：
  - 只在首頁顯示（效能優化）
  - 50 個粒子（平衡視覺與效能）
  - 滑鼠互動效果
  - 神秘紫色主題

### 3. Lenis
- **用途**：平滑滾動
- **特色**：
  - 全站平滑滾動
  - 慣性滾動效果
  - 優雅的滾動體驗

### 4. Shadcn/ui
- **用途**：現代 UI 組件庫
- **特色**：
  - 可複製的組件
  - 與 Tailwind 完美整合
  - 無障礙支援

## 動畫組件

### FadeIn
漸入動畫組件，用於文字和區塊的進入效果。

```tsx
<FadeIn delay={0.2}>
  <h1>標題</h1>
</FadeIn>
```

### StaggerContainer + StaggerItem
交錯動畫，用於列表項目的依次出現。

```tsx
<StaggerContainer>
  <StaggerItem>
    <Card />
  </StaggerItem>
  <StaggerItem>
    <Card />
  </StaggerItem>
</StaggerContainer>
```

### HoverScale
懸停縮放效果。

```tsx
<HoverScale scale={1.05}>
  <Button />
</HoverScale>
```

## 效能優化

1. **動態載入**：Particles 組件使用 dynamic import
2. **條件渲染**：粒子背景只在首頁顯示
3. **FPS 限制**：粒子系統限制在 60 FPS
4. **視窗失焦暫停**：當視窗失焦時暫停粒子動畫
5. **will-change**：使用 CSS will-change 提示瀏覽器優化

## 動畫效果位置

- **Hero 區塊**：漸入動畫 + 粒子背景
- **卡片組件**：懸停上浮 + 圖片縮放
- **導航列**：滑入動畫 + 活動指示器
- **區塊標題**：漸入動畫
- **列表項目**：交錯動畫

## 自訂動畫

可以在 `components/animations/` 目錄下建立新的動畫組件，或修改現有組件的動畫參數。


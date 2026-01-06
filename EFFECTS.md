# 動態視覺效果說明

## 已整合的效果（方案B）

### 1. 發光邊框動畫（GlowingBorder）
- **位置**：所有卡片（GameCard、WorkCard、BlogCard）
- **效果**：懸停時顯示動態發光邊框，邊框顏色流動
- **強度**：可設定 low、medium、high
- **特色**：精選作品使用 high 強度

### 2. 漸變文字動畫（GradientText）
- **位置**：
  - Hero 標題（rainbow 漸變）
  - 區塊標題（purple、pink、cyan）
- **效果**：文字顏色漸變並流動
- **漸變類型**：purple、pink、gold、cyan、rainbow
- **特色**：動態吸引注意力

### 3. 粒子軌跡效果（ParticleTrail）
- **位置**：全站（僅首頁）
- **效果**：滑鼠移動產生紫色粒子軌跡
- **特色**：互動性強，科技感

### 4. 幾何圖形背景（GeometricBackground）
- **位置**：全站背景
- **效果**：動態幾何圖形（圓形、三角形、正方形、六邊形）緩慢移動和旋轉
- **特色**：
  - 15 個圖形（效能平衡）
  - 4 種顏色（purple、pink、gold、cyan）
  - 半透明設計，不干擾內容

## 效果層級（z-index）

```
-20: GeometricBackground（幾何背景）
-10: ParticleTrail（粒子軌跡）
-10: ParticleBackground（粒子背景）
0: 內容層
50: Navbar（導航列）
```

## 效能優化

1. **幾何圖形**：限制 15 個圖形
2. **粒子軌跡**：每次移動產生 2 個粒子
3. **粒子背景**：50 個粒子
4. **動畫**：使用 `will-change` 提示瀏覽器優化
5. **條件渲染**：粒子軌跡和粒子背景只在首頁顯示

## 自訂選項

### GlowingBorder
```tsx
<GlowingBorder intensity="high">
  {/* 內容 */}
</GlowingBorder>
```

### GradientText
```tsx
<GradientText size="6xl" gradient="rainbow">
  標題文字
</GradientText>
```

## 顏色主題

所有效果都使用統一的顏色主題：
- **Purple**: #8b5cf6（主要）
- **Pink**: #ec4899（強調）
- **Gold**: #fbbf24（精選）
- **Cyan**: #06b6d4（次要）

## 注意事項

1. 幾何背景和粒子效果會增加 GPU 負擔，但已優化為平衡視覺與效能
2. 所有動畫都使用硬體加速（transform、opacity）
3. 移動裝置上會自動降低動畫強度


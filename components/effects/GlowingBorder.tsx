"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

/**
 * 方案B：簡化版本
 * - 移除所有動畫（靜態效果）
 * - 只在懸停時顯示輕微發光
 * - 使用固定顏色（不流動）
 * - 最簡潔的視覺效果
 */
export default function GlowingBorder({
  children,
  className = "",
  intensity = "medium",
}: GlowingBorderProps) {
  // 方案B：漸層藍色（使用圖片中的中藍）
  const intensityMap = {
    low: "rgba(139,157,195,0.15)",    // #8B9DC3 長春花藍
    medium: "rgba(139,157,195,0.2)",
    high: "rgba(139,157,195,0.25)",
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* 內層內容 */}
      <div className="relative bg-card-DEFAULT rounded-lg border border-border overflow-hidden group">
        {children}
      </div>
      
      {/* 靜態發光邊框 - 只在懸停時顯示，無動畫 */}
      <div
        className="absolute -inset-[0.5px] rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${intensityMap[intensity]}, transparent)`,
          backgroundSize: "100% 100%",
        }}
      />
    </motion.div>
  );
}


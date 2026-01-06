"use client";

import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  title?: string;
  category?: string;
  variant?: "game" | "work" | "blog";
}

export default function ImagePlaceholder({ 
  title, 
  category,
  variant = "game" 
}: ImagePlaceholderProps) {
  // 根據不同類型選擇不同的圖標或樣式
  const getIcon = () => {
    switch (variant) {
      case "game":
        return "🎮";
      case "work":
        return "💼";
      case "blog":
        return "📝";
      default:
        return "✨";
    }
  };

  return (
    <div className="aspect-video overflow-hidden bg-gradient-to-br from-accent-blue-DEFAULT/20 via-accent-cyan-DEFAULT/15 to-accent-sky-DEFAULT/10 rounded-t-lg relative flex items-center justify-center">
      {/* 背景裝飾圖案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-blue-DEFAULT/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-cyan-DEFAULT/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* 主要內容 */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl md:text-5xl">{getIcon()}</div>
        {category && (
          <span className="px-3 py-1 bg-accent-blue-DEFAULT/30 text-accent-cyan-DEFAULT text-xs rounded-full backdrop-blur-sm">
            {category}
          </span>
        )}
      </motion.div>
      
      {/* 底部漸變遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card-DEFAULT/50 to-transparent"></div>
    </div>
  );
}


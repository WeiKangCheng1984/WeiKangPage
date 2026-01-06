"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  gradient?: "purple" | "pink" | "gold" | "cyan" | "rainbow" | "blue" | "muted-blue" | "gradient-blue";
}

export default function GradientText({
  children,
  className = "",
  size = "md",
  gradient = "purple",
}: GradientTextProps) {
  const sizeMap = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const gradientMap = {
    purple: "from-purple-400 via-pink-400 to-purple-400",
    pink: "from-pink-400 via-purple-400 to-pink-400",
    gold: "from-yellow-400 via-orange-400 to-yellow-400",
    cyan: "from-cyan-400 via-blue-400 to-cyan-400",
    rainbow: "from-purple-400 via-pink-400 via-yellow-400 to-cyan-400",
    // 方案B：漸層藍色（使用圖片中的四個色階）
    blue: "from-[#4169E1] via-[#8B9DC3] to-[#4169E1]", // 深藍到中藍
    "muted-blue": "from-[#8B9DC3] via-[#B0C4DE] to-[#8B9DC3]", // 中藍到淺藍
    "gradient-blue": "from-[#4169E1] via-[#8B9DC3] via-[#B0C4DE] to-[#E6F2FF]", // 完整漸層（深→淺）
  };

  return (
    <motion.span
      className={`${sizeMap[size]} font-bold bg-gradient-to-r ${gradientMap[gradient]} bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}


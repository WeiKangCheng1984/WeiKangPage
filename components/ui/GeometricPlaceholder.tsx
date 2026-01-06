"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GeometricPlaceholderProps {
  title?: string;
  category?: string;
  variant?: "work" | "game" | "blog";
}

export default function GeometricPlaceholder({
  title,
  category,
  variant = "work",
}: GeometricPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 設定畫布大小
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();

    // 顏色配置（使用藍色漸層系統）
    const colors = {
      primary: "rgba(65, 105, 225, 0.15)",    // 皇家藍
      secondary: "rgba(139, 157, 195, 0.12)", // 長春花藍
      accent: "rgba(176, 196, 222, 0.1)",    // 天空藍
      stroke: "rgba(139, 157, 195, 0.25)",   // 邊框色
    };

    // 繪製幾何圖形
    const drawShapes = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // 繪製多個幾何圖形，創造層次感
      const shapes = [
        // 大圓形（背景）
        {
          type: "circle",
          x: width * 0.2,
          y: height * 0.3,
          size: Math.min(width, height) * 0.25,
          color: colors.primary,
          rotation: 0,
        },
        // 六邊形（中層）
        {
          type: "hexagon",
          x: width * 0.7,
          y: height * 0.4,
          size: Math.min(width, height) * 0.2,
          color: colors.secondary,
          rotation: Math.PI / 6,
        },
        // 正方形（前景）
        {
          type: "square",
          x: width * 0.5,
          y: height * 0.7,
          size: Math.min(width, height) * 0.15,
          color: colors.accent,
          rotation: Math.PI / 4,
        },
        // 三角形（點綴）
        {
          type: "triangle",
          x: width * 0.15,
          y: height * 0.75,
          size: Math.min(width, height) * 0.12,
          color: colors.secondary,
          rotation: Math.PI / 3,
        },
        // 小圓形（裝飾）
        {
          type: "circle",
          x: width * 0.85,
          y: height * 0.25,
          size: Math.min(width, height) * 0.1,
          color: colors.accent,
          rotation: 0,
        },
      ];

      shapes.forEach((shape) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = 1;
        ctx.fillStyle = shape.color;
        ctx.strokeStyle = colors.stroke;
        ctx.lineWidth = 1;

        const radius = shape.size / 2;

        switch (shape.type) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -radius);
            ctx.lineTo(-radius * 0.866, radius * 0.5);
            ctx.lineTo(radius * 0.866, radius * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          case "square":
            ctx.fillRect(-radius, -radius, shape.size, shape.size);
            ctx.strokeRect(-radius, -radius, shape.size, shape.size);
            break;
          case "hexagon":
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });
    };

    drawShapes();

    // 監聽視窗大小變化
    const handleResize = () => {
      resizeCanvas();
      drawShapes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aspect-video overflow-hidden bg-gradient-to-br from-accent-blue-DEFAULT/10 via-accent-cyan-DEFAULT/8 to-accent-sky-DEFAULT/5 rounded-t-lg relative">
      {/* Canvas 幾何圖形背景 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent" }}
      />

      {/* 頂部裝飾光暈 */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-accent-blue-DEFAULT/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan-DEFAULT/8 rounded-full blur-3xl"></div>

      {/* 底部裝飾光暈 */}
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-accent-sky-DEFAULT/8 rounded-full blur-3xl"></div>

      {/* 分類標籤（可選） */}
      {category && (
        <motion.div
          className="absolute bottom-4 left-4 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="px-3 py-1.5 bg-accent-blue-DEFAULT/20 backdrop-blur-sm text-accent-cyan-DEFAULT text-xs font-medium rounded-full border border-accent-cyan-DEFAULT/20">
            {category}
          </span>
        </motion.div>
      )}

      {/* 底部漸變遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card-DEFAULT/60 to-transparent"></div>
    </div>
  );
}


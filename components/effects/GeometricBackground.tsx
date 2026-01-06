"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 設定畫布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 幾何圖形類別
    class GeometricShape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "circle" | "triangle" | "square" | "hexagon";
      color: string;
      opacity: number;
      speedX: number;
      speedY: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.type = ["circle", "triangle", "square", "hexagon"][
          Math.floor(Math.random() * 4)
        ] as "circle" | "triangle" | "square" | "hexagon";
        this.size = Math.random() * 80 + 20;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // 方案B：漸層藍色（使用圖片中的四個色階）
        const colors = [
          "rgba(65, 105, 225, 0.1)",   // 深藍：皇家藍（圖片左側）
          "rgba(139, 157, 195, 0.1)",  // 中藍：長春花藍（圖片中左二）
          "rgba(176, 196, 222, 0.1)",  // 淺藍：天空藍（圖片中左三）
          "rgba(230, 242, 255, 0.1)",  // 極淺藍：冰藍（圖片右側）
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // 邊界檢查
        if (this.x < -this.size) this.x = this.canvasWidth + this.size;
        if (this.x > this.canvasWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = this.canvasHeight + this.size;
        if (this.y > this.canvasHeight + this.size) this.y = -this.size;
      }

      draw() {
        if (!ctx) return;
        
        // 確保 size 是正數
        if (this.size <= 0) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color.replace("0.1", "0.3");
        ctx.lineWidth = 1;

        const radius = Math.max(0.1, this.size / 2);

        switch (this.type) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          case "triangle":
            ctx.beginPath();
            ctx.moveTo(0, -radius);
            ctx.lineTo(-radius, radius);
            ctx.lineTo(radius, radius);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          case "square":
            ctx.fillRect(-radius, -radius, this.size, this.size);
            ctx.strokeRect(-radius, -radius, this.size, this.size);
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
      }
    }

    // 建立幾何圖形陣列
    const shapes: GeometricShape[] = [];
    const shapeCount = 15; // 效能平衡：15 個圖形

    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new GeometricShape(canvas.width, canvas.height));
    }

    // 動畫循環
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}


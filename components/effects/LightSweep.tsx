"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LightSweepProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
}

export default function LightSweep({
  children,
  className = "",
  direction = "left",
}: LightSweepProps) {
  const gradientMap = {
    left: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    right: "linear-gradient(270deg, transparent, rgba(255,255,255,0.2), transparent)",
    top: "linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent)",
    bottom: "linear-gradient(0deg, transparent, rgba(255,255,255,0.2), transparent)",
  };

  const initialPosition = {
    left: { x: "-100%", y: "0%" },
    right: { x: "100%", y: "0%" },
    top: { x: "0%", y: "-100%" },
    bottom: { x: "0%", y: "100%" },
  };

  const hoverPosition = {
    left: { x: "100%", y: "0%" },
    right: { x: "-100%", y: "0%" },
    top: { x: "0%", y: "100%" },
    bottom: { x: "0%", y: "-100%" },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: gradientMap[direction],
          width: direction === "left" || direction === "right" ? "100%" : "200%",
          height: direction === "top" || direction === "bottom" ? "100%" : "200%",
        }}
        variants={{
          initial: initialPosition[direction],
          hover: {
            ...hoverPosition[direction],
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.div>
  );
}


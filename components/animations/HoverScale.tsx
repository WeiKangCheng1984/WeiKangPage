"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export default function HoverScale({
  children,
  className = "",
  scale = 1.05,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import GradientText from "@/components/effects/GradientText";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32 relative z-10">
      <div className="max-w-3xl">
        <FadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GradientText size="6xl" gradient="gradient-blue" className="block mb-6">
              創造互動體驗的開發者
            </GradientText>
          </motion.div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <motion.p
            className="text-xl text-text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            這裡是簡短的個人介紹，描述你的核心價值和定位。可以提到你專注於創造有趣的互動體驗、遊戲開發或工具設計等。
          </motion.p>
        </FadeIn>
        
        <FadeIn delay={0.6}>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button asChild size="lg">
              <Link href="/games">探索遊戲</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">關於我</Link>
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}


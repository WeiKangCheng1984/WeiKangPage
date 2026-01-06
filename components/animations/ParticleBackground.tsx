"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import type { Engine } from "@tsparticles/engine";

// 動態載入 Particles 組件以優化效能
const Particles = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), {
  ssr: false,
});

export default function ParticleBackground() {
  const pathname = usePathname();

  const particlesInit = useCallback(async (engine: Engine) => {
    const { loadSlim } = await import("@tsparticles/slim");
    await loadSlim(engine);
  }, []);

  // 效能優化：只在首頁顯示粒子
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 will-change-transform">
      <Particles
        id="tsparticles"
        {...({ init: particlesInit } as any)}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60, // 限制 FPS 以平衡效能
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#8B9DC3", // 長春花藍（圖片中左二）
            },
            links: {
              color: "#8B9DC3",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 50, // 效能平衡：50 個粒子（視覺 60% 效能 40%）
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          pauseOnBlur: true, // 視窗失焦時暫停以節省效能
        }}
        className="w-full h-full"
      />
    </div>
  );
}


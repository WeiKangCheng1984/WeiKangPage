import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // 主色調（方案B：柔和灰階 + 漸層藍色）
        background: {
          DEFAULT: "hsl(var(--background))",
          dark: "#0a0a0a", // 深灰黑
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          light: "#2a2a2a", // 中灰
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          // 方案B：漸層藍色系統（使用圖片中的四個色階）
          blue: {
            DEFAULT: "#4169E1",      // 深藍：皇家藍（圖片左側）
            light: "#5B7FE8",        // 稍淺的皇家藍
          },
          cyan: {
            DEFAULT: "#8B9DC3",      // 中藍：長春花藍（圖片中左二）
            light: "#A8B8D8",        // 淺長春花藍
          },
          sky: {
            DEFAULT: "#B0C4DE",      // 淺藍：天空藍（圖片中左三）
            light: "#C8D8E8",        // 淺天空藍
          },
          ice: {
            DEFAULT: "#E6F2FF",      // 極淺藍：冰藍（圖片右側）
            light: "#F0F8FF",        // 粉藍
          },
          // 保留原有顏色以備不時之需
          purple: {
            DEFAULT: "#8b5cf6",
            light: "#a78bfa",
          },
          pink: {
            DEFAULT: "#ec4899",
            light: "#f472b6",
          },
          gold: {
            DEFAULT: "#fbbf24",
            light: "#fcd34d",
          },
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // 文字（方案B：柔和灰階）
        text: {
          primary: "#e5e5e5",      // 淺灰
          secondary: "#a3a3a3",    // 中灰
          accent: "#ffffff",        // 白色
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;


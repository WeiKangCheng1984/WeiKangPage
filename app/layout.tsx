import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ParticleBackground from "@/components/animations/ParticleBackground";
import GeometricBackground from "@/components/effects/GeometricBackground";
import ParticleTrail from "@/components/effects/ParticleTrail";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "個人作品集網站",
  description: "品牌專頁 + 互動遊戲入口 + 作品集 + 長文",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={inter.variable}>
      <body>
        <SmoothScroll>
          <GeometricBackground />
          <ParticleBackground />
          <ParticleTrail />
          <Navbar />
          <main className="min-h-screen relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}


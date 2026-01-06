"use client";

import WorkCard from "@/components/ui/WorkCard";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import GradientText from "@/components/effects/GradientText";
import type { Work } from "@/lib/content";

interface PortfolioClientProps {
  works: Work[];
}

export default function PortfolioClient({ works }: PortfolioClientProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <FadeIn>
        <div className="flex justify-between items-center mb-12">
          <GradientText size="3xl" gradient="muted-blue">精選作品</GradientText>
          <Link
            href="/works"
            className="text-accent-blue-DEFAULT hover:text-accent-cyan-DEFAULT transition-colors"
          >
            查看全部 →
          </Link>
        </div>
      </FadeIn>
      <StaggerContainer>
        <div className="grid grid-cols-12 gap-8">
          {works.map((work, index) => (
            <StaggerItem 
              key={work.slug}
              className={index === 0 
                ? "col-span-12 md:col-span-8 lg:col-span-7" 
                : index === 1
                ? "col-span-12 md:col-span-4 lg:col-span-5"
                : "col-span-12 md:col-span-4 lg:col-span-5"
              }
            >
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}


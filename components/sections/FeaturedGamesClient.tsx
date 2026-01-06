"use client";

import GameCard from "@/components/ui/GameCard";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import GradientText from "@/components/effects/GradientText";
import type { Game } from "@/lib/content";

interface FeaturedGamesClientProps {
  games: Game[];
}

export default function FeaturedGamesClient({ games }: FeaturedGamesClientProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <FadeIn>
        <div className="flex justify-between items-center mb-12">
          <GradientText size="3xl" gradient="blue">精選互動體驗</GradientText>
          <Link
            href="/games"
            className="text-accent-blue-DEFAULT hover:text-accent-cyan-DEFAULT transition-colors"
          >
            查看全部 →
          </Link>
        </div>
      </FadeIn>
      <StaggerContainer>
        <div className="grid grid-cols-12 gap-8">
          {games.map((game, index) => (
            <StaggerItem 
              key={game.slug}
              className={index === 0 
                ? "col-span-12 md:col-span-8 lg:col-span-7" 
                : index === 1
                ? "col-span-12 md:col-span-4 lg:col-span-5"
                : "col-span-12 md:col-span-4 lg:col-span-5"
              }
            >
              <GameCard game={game} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}


"use client";

import Link from "next/link";
import type { Game } from "@/lib/content";
import { motion } from "framer-motion";
import GlowingBorder from "@/components/effects/GlowingBorder";
import GeometricPlaceholder from "@/components/ui/GeometricPlaceholder";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <GlowingBorder className="h-full group" intensity="medium">
      <Link
        href={`/games/${game.slug}`}
        className="block h-full flex flex-col"
      >
        <GeometricPlaceholder title={game.title} category={game.category} variant="game" />
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-text-accent group-hover:text-accent-cyan-DEFAULT transition-colors">
            {game.title}
          </h3>
          <p className="text-text-secondary text-xs line-clamp-2 flex-1">
            {game.description}
          </p>
          {game.category && (
            <span className="inline-block mt-2 px-2 py-0.5 bg-accent-blue-DEFAULT/20 text-accent-cyan-DEFAULT text-xs rounded w-fit">
              {game.category}
            </span>
          )}
        </div>
      </Link>
    </GlowingBorder>
  );
}


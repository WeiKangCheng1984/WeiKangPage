import { getAllGames } from "@/lib/content";
import GameCard from "@/components/ui/GameCard";

export default function GamesPage() {
  const games = getAllGames();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-text-accent">互動遊戲</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}


import { getAllGames } from "@/lib/content";
import FeaturedGamesClient from "./FeaturedGamesClient";

export default function FeaturedGames() {
  const featuredGames = getAllGames().slice(0, 3);

  if (featuredGames.length === 0) {
    return null;
  }

  return <FeaturedGamesClient games={featuredGames} />;
}


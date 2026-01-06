import { getAllGames, getGameBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default function GameDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-text-accent">{game.title}</h1>
      <p className="text-text-secondary mb-8">{game.description}</p>
      {game.image && (
        <div className="mb-8 relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}
      <div className="flex gap-4">
        <Link
          href={game.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-accent-blue-DEFAULT hover:bg-accent-blue-light text-white rounded-lg transition-colors"
        >
          前往遊戲 →
        </Link>
      </div>
    </div>
  );
}


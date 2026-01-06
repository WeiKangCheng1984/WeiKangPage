import Hero from "@/components/sections/Hero";
import FeaturedGames from "@/components/sections/FeaturedGames";
// import Portfolio from "@/components/sections/Portfolio"; // 暫時隱藏作品集
import BlogPreview from "@/components/sections/BlogPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedGames />
      {/* <Portfolio /> */}
      <BlogPreview />
    </div>
  );
}


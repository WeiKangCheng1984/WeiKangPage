import { getAllWorks } from "@/lib/content";
import PortfolioClient from "./PortfolioClient";

export default function Portfolio() {
  const featuredWorks = getAllWorks()
    .filter((work) => work.featured)
    .slice(0, 6);

  if (featuredWorks.length === 0) {
    return null;
  }

  return <PortfolioClient works={featuredWorks} />;
}


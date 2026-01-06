import { getAllWorks } from "@/lib/content";
import WorkCard from "@/components/ui/WorkCard";

export default function WorksPage() {
  const works = getAllWorks().sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-text-accent">作品集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}


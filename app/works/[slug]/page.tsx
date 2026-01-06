import { getAllWorks, getWorkBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-text-accent">{work.title}</h1>
      <p className="text-text-secondary mb-8">{work.description}</p>
      <div className="prose prose-invert max-w-none">
        <MDXContent source={work.content} />
      </div>
    </article>
  );
}


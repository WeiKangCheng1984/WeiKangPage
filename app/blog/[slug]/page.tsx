import { getAllBlogs, getBlogBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-text-accent">{blog.title}</h1>
      <div className="text-text-secondary mb-8">
        <time>{new Date(blog.date).toLocaleDateString("zh-TW")}</time>
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex gap-2 mt-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-card-DEFAULT rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="prose prose-invert max-w-none">
        <MDXContent source={blog.content} />
      </div>
    </article>
  );
}


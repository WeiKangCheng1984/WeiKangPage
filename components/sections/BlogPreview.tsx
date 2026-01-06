import { getAllBlogs } from "@/lib/content";
import BlogPreviewClient from "./BlogPreviewClient";

export default function BlogPreview() {
  const recentBlogs = getAllBlogs()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (recentBlogs.length === 0) {
    return null;
  }

  return <BlogPreviewClient blogs={recentBlogs} />;
}


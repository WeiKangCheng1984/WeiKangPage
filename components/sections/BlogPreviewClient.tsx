"use client";

import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import GradientText from "@/components/effects/GradientText";
import type { BlogPost } from "@/lib/content";

interface BlogPreviewClientProps {
  blogs: BlogPost[];
}

export default function BlogPreviewClient({ blogs }: BlogPreviewClientProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <FadeIn>
        <div className="flex justify-between items-center mb-12">
          <GradientText size="3xl" gradient="cyan">最新文章</GradientText>
          <Link
            href="/blog"
            className="text-accent-blue-DEFAULT hover:text-accent-cyan-DEFAULT transition-colors"
          >
            查看全部 →
          </Link>
        </div>
      </FadeIn>
      <StaggerContainer>
        <div className="grid grid-cols-12 gap-8">
          {blogs.map((blog, index) => (
            <StaggerItem 
              key={blog.slug}
              className={index === 0 
                ? "col-span-12 md:col-span-8 lg:col-span-7" 
                : index === 1
                ? "col-span-12 md:col-span-4 lg:col-span-5"
                : "col-span-12 md:col-span-4 lg:col-span-5"
              }
            >
              <BlogCard blog={blog} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}


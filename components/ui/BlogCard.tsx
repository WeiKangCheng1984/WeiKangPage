"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import { motion } from "framer-motion";
import GlowingBorder from "@/components/effects/GlowingBorder";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <GlowingBorder className="h-full group" intensity="medium">
      <Link
        href={`/blog/${blog.slug}`}
        className="block h-full flex flex-col"
      >
        <div className="p-4 flex-1 flex flex-col">
          <time className="text-text-secondary text-xs">
            {new Date(blog.date).toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h3 className="text-lg font-semibold mt-2 mb-2 text-text-accent group-hover:text-accent-cyan-DEFAULT transition-colors">
            {blog.title}
          </h3>
          <p className="text-text-secondary text-xs line-clamp-3 mb-3 flex-1">
            {blog.description}
          </p>
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {blog.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-card-light text-text-secondary text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </GlowingBorder>
  );
}


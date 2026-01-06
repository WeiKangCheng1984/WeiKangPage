"use client";

import Link from "next/link";
import type { Work } from "@/lib/content";
import { motion } from "framer-motion";
import GlowingBorder from "@/components/effects/GlowingBorder";
import GeometricPlaceholder from "@/components/ui/GeometricPlaceholder";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <GlowingBorder className="h-full group" intensity={work.featured ? "high" : "medium"}>
      <Link
        href={`/works/${work.slug}`}
        className="block h-full flex flex-col"
      >
        {work.image ? (
          <div className="aspect-video overflow-hidden bg-card-light rounded-t-lg">
            <motion.img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ) : (
          <GeometricPlaceholder title={work.title} category={work.category} variant="work" />
        )}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-text-accent group-hover:text-accent-cyan-DEFAULT transition-colors">
              {work.title}
            </h3>
            {work.featured && (
              <span className="px-2 py-0.5 bg-accent-gold-DEFAULT/20 text-accent-gold-light text-xs rounded">
                精選
              </span>
            )}
          </div>
          <p className="text-text-secondary text-xs line-clamp-2 mb-2 flex-1">
            {work.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 bg-card-light text-text-secondary text-xs rounded">
              {work.category}
            </span>
            {work.tech &&
              work.tech.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-card-light text-text-secondary text-xs rounded"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </Link>
    </GlowingBorder>
  );
}


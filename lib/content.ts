import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  content: string;
}

export interface Work {
  slug: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  category: string;
  tech?: string[];
  featured?: boolean;
  content: string;
}

export interface Game {
  slug: string;
  title: string;
  description: string;
  image?: string;
  externalLink: string;
  category?: string;
  content: string;
}

function getContentFiles(dir: string): string[] {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter((file) => file.endsWith(".mdx"));
}

function getContentBySlug<T>(
  dir: string,
  slug: string,
  fields: string[] = []
): T | null {
  const fullPath = path.join(contentDirectory, dir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = { slug, content };

  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    } else if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as T;
}

function getAllContent<T>(dir: string, fields: string[] = []): T[] {
  const files = getContentFiles(dir);
  const items = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getContentBySlug<T>(dir, slug, fields);
    })
    .filter((item): item is T => item !== null);

  return items;
}

export function getAllBlogs(): BlogPost[] {
  return getAllContent<BlogPost>("blog", [
    "title",
    "date",
    "description",
    "tags",
    "content",
  ]);
}

export function getBlogBySlug(slug: string): BlogPost | null {
  return getContentBySlug<BlogPost>("blog", slug, [
    "title",
    "date",
    "description",
    "tags",
    "content",
  ]);
}

export function getAllWorks(): Work[] {
  return getAllContent<Work>("works", [
    "title",
    "description",
    "image",
    "link",
    "category",
    "tech",
    "featured",
    "content",
  ]);
}

export function getWorkBySlug(slug: string): Work | null {
  return getContentBySlug<Work>("works", slug, [
    "title",
    "description",
    "image",
    "link",
    "category",
    "tech",
    "featured",
    "content",
  ]);
}

export function getAllGames(): Game[] {
  return getAllContent<Game>("games", [
    "title",
    "description",
    "image",
    "externalLink",
    "category",
    "content",
  ]);
}

export function getGameBySlug(slug: string): Game | null {
  return getContentBySlug<Game>("games", slug, [
    "title",
    "description",
    "image",
    "externalLink",
    "category",
    "content",
  ]);
}


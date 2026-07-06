// Loads Markdown content at build time via Vite's import.meta.glob,
// parses a small YAML-like frontmatter block by hand (no node-only deps
// in the browser bundle), and converts the body with `marked`.

import { marked } from "marked";

export interface Post {
  slug: string;
  title: string;
  date: string; // ISO string, used for sorting
  dateDisplay: string;
  tag: string;
  excerpt: string;
  html: string;
}

interface Frontmatter {
  [key: string]: string;
}

function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };

  const [, frontmatterBlock, content] = match;
  const data: Frontmatter = {};

  for (const line of frontmatterBlock.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, content };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function slugFromPath(filePath: string): string {
  const filename = filePath.split("/").pop() ?? filePath;
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

const postModules = import.meta.glob("./content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const posts: Post[] = Object.entries(postModules)
  .map(([filePath, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = slugFromPath(filePath);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString(),
      dateDisplay: data.date ? formatDate(data.date) : "",
      tag: data.tag ?? "",
      excerpt: data.excerpt ?? "",
      html: marked.parse(content, { async: false }) as string,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

const aboutModules = import.meta.glob("./content/about.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const aboutRaw = Object.values(aboutModules)[0] ?? "";
export const aboutHtml = marked.parse(parseFrontmatter(aboutRaw).content, {
  async: false,
}) as string;

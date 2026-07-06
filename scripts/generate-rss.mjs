// Generates public/rss.xml from src/content/posts/*.md before the Vite
// build runs. This script runs in Node only — it is never bundled into
// the browser build, so it's fine to use node-only packages here.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src/content/posts");
const OUT_FILE = path.join(ROOT, "public/rss.xml");

const config = JSON.parse(fs.readFileSync(path.join(ROOT, "src/config.json"), "utf8"));

function slugify(filename) {
  return filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((filename) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: slugify(filename),
      title: data.title || filename,
      date: data.date ? new Date(data.date) : new Date(),
      excerpt: data.excerpt || "",
    };
  })
  .sort((a, b) => b.date.getTime() - a.date.getTime());

const items = posts
  .map(
    (post) => `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${config.url}/#/posts/${post.slug}</link>
    <guid>${config.url}/#/posts/${post.slug}</guid>
    <pubDate>${post.date.toUTCString()}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
  </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(config.siteTitle)}</title>
  <link>${config.url}</link>
  <description>${escapeXml(config.tagline)}</description>
${items}
</channel>
</rss>
`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, rss);
console.log(`Generated rss.xml with ${posts.length} item(s)`);

# pranitharekar.com

A small, minimal, editorial blog. Built as a single-page app with Vite
and plain TypeScript. No framework, no UI library. Markdown files in,
static HTML/CSS/JS out.

## How it works

- **Markdown in, HTML out at build time.** [src/content-loader.ts](src/content-loader.ts)
  uses Vite's `import.meta.glob` to pull in every file under
  `src/content/posts/*.md` at build time, parses the frontmatter by
  hand, and renders the body with `marked`.
- **Hash-based routing.** [src/router.ts](src/router.ts) reads
  `window.location.hash` and swaps the contents of `#main-content`.
  Routes: `#/` (writing), `#/about`, `#/posts/:slug`. Because routing is
  hash-based, the built site is a single `index.html` you can drop on any
  static host with zero server config (no rewrite rules).
- **All design in one file.** [src/style.css](src/style.css) holds the
  whole look: paper background, Fraunces headings, Source Serif 4 body,
  IBM Plex Mono for dates and labels, oxblood accent.
- **RSS generated separately.** [scripts/generate-rss.mjs](scripts/generate-rss.mjs)
  is a small Node script (using `gray-matter`, fine here since it only
  runs at build time and never ships to the browser). It writes
  `public/rss.xml` before Vite runs.

## Getting started

```
npm install
npm run dev
```

`npm run dev` regenerates the RSS feed and starts the Vite dev server
with hot reload. Edit a post and the page updates instantly.

## Write a post

Add a file to `src/content/posts/`, named `YYYY-MM-DD-your-slug.md`:

```markdown
---
title: Your post title
date: 2026-07-05
tag: architecture
excerpt: One sentence shown in the entry list and RSS feed.
---

Your content in Markdown.
```

The date prefix in the filename is stripped to build the URL
(`2026-07-05-your-slug.md` → `#/posts/your-slug`). The `date` field in
the frontmatter controls sort order and the date shown on the page, and
is rendered in UTC so it always matches what you typed.

## Edit the about page

Edit [src/content/about.md](src/content/about.md) directly. Plain
Markdown, no frontmatter required.

## Customize the site

Edit [src/config.json](src/config.json):

- `siteTitle`, `tagline`, `author`
- `url` — your live domain, used to build absolute links in the RSS feed
- `links` — the contact links at the bottom of the about page

## Build and preview

```
npm run build      # generates rss.xml, type-checks with tsc, outputs /dist
npm run preview    # serves the production build locally
```

## Deploy

`/dist` is a plain static bundle. Push it to Netlify, Vercel, GitHub
Pages, or any static host. Hash-based routing means there's no server
rewrite configuration to set up.

## Files that matter

```
src/content/posts/       one markdown file per entry
src/content/about.md     the about page
src/config.json          site title, tagline, links
src/style.css            all visual design lives here
src/content-loader.ts    markdown + frontmatter parsing
src/templates.ts         HTML string templates for each page
src/router.ts            hash router, swaps #main-content
scripts/generate-rss.mjs builds public/rss.xml before the Vite build
```

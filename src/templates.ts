import { posts, getPost, aboutHtml } from "./content-loader";
import config from "./config.json";

export function renderIndex(): string {
  const items = posts.length
    ? posts
        .map((post, index) => {
          const number = String(posts.length - index).padStart(3, "0");
          return `
      <li class="entry">
        <div class="entry-eyebrow">
          <span class="no">No. ${number}</span>
          <span class="sep">/</span>
          <span class="date">${post.dateDisplay}</span>
          ${post.tag ? `<span class="sep">/</span><span class="tag">${post.tag}</span>` : ""}
        </div>
        <h2 class="entry-title"><a href="#/posts/${post.slug}">${post.title}</a></h2>
        ${post.excerpt ? `<p class="entry-excerpt">${post.excerpt}</p>` : ""}
      </li>`;
        })
        .join("\n")
    : `<li class="empty-state">No entries yet. Drop a markdown file into src/content/posts.</li>`;

  return `
    <p class="index-intro">${config.tagline}</p>
    <ul class="entry-list">${items}</ul>
  `;
}

export function renderPost(slug: string): string {
  const post = getPost(slug);
  if (!post) return renderNotFound();

  return `
    <article>
      <header class="post-header">
        <div class="post-meta">
          <span class="accent">${post.tag || "entry"}</span>
          <span>&middot;</span>
          <span>${post.dateDisplay}</span>
        </div>
        <h1 class="post-title">${post.title}</h1>
      </header>
      <div class="post-body">${post.html}</div>
      <div id="disqus_thread" class="disqus-thread"></div>
      <footer class="post-footer"><a href="#/">&larr; Back to all entries</a></footer>
    </article>
  `;
}

export function renderAbout(): string {
  const links = config.links
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join("\n");

  return `
    <article class="about-body">
      <h1 class="post-title" style="margin-top:0">About</h1>
      ${aboutHtml}
      <div class="about-links">${links}</div>
    </article>
  `;
}

export function renderNotFound(): string {
  return `<p class="empty-state">Nothing here. <a href="#/">Back to entries.</a></p>`;
}

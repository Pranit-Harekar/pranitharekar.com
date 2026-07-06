import {
  renderIndex,
  renderPost,
  renderAbout,
  renderNotFound,
} from "./templates";
import config from "./config.json";

function getMainElement(): HTMLElement {
  const el = document.getElementById("main-content");
  if (!el) throw new Error("Missing #main-content element in index.html");
  return el;
}

function setActiveNavLink(path: string): void {
  document
    .querySelectorAll<HTMLAnchorElement>("#site-nav a[data-route]")
    .forEach((link) => {
      link.classList.toggle("active", link.dataset.route === path);
    });
}

function render(): void {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const segments = hash.split("/").filter(Boolean);
  const main = getMainElement();

  if (segments.length === 0) {
    main.innerHTML = renderIndex();
    document.title = config.siteTitle;
    setActiveNavLink("/");
  } else if (segments[0] === "about") {
    main.innerHTML = renderAbout();
    document.title = `About · ${config.siteTitle}`;
    setActiveNavLink("/about");
  } else if (segments[0] === "posts" && segments[1]) {
    main.innerHTML = renderPost(segments[1]);
    document.title = config.siteTitle;
    setActiveNavLink("");
  } else {
    main.innerHTML = renderNotFound();
    document.title = config.siteTitle;
    setActiveNavLink("");
  }

  window.scrollTo(0, 0);
}

export function initRouter(): void {
  window.addEventListener("hashchange", render);
  render();
}

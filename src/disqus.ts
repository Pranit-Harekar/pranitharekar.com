import config from "./config.json";

type DisqusConfig = {
  page: { url: string; identifier: string; title: string };
};

declare global {
  interface Window {
    DISQUS?: {
      reset: (opts: {
        reload: boolean;
        config: (this: DisqusConfig) => void;
      }) => void;
    };
    disqus_config?: (this: DisqusConfig) => void;
  }
}

let scriptLoaded = false;

export function loadDisqus(
  url: string,
  identifier: string,
  title: string,
): void {
  if (!config.disqusShortname) return;

  const configFn = function (this: DisqusConfig) {
    this.page.url = url;
    this.page.identifier = identifier;
    this.page.title = title;
  };

  if (scriptLoaded && window.DISQUS) {
    window.DISQUS.reset({ reload: true, config: configFn });
    return;
  }

  window.disqus_config = configFn;

  const script = document.createElement("script");
  script.src = `https://${config.disqusShortname}.disqus.com/embed.js`;
  script.setAttribute("data-timestamp", String(Date.now()));
  (document.head || document.body).appendChild(script);
  scriptLoaded = true;
}

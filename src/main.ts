import "./style.css";
import config from "./config.json";
import { initRouter } from "./router";

const footer = document.getElementById("footer-text");
if (footer) {
  footer.textContent = `${config.author} · ${new Date().getFullYear()}`;
}

initRouter();

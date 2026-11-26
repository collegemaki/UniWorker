import { icon } from "../shared/icons.js";

export class TopBar {
  render(mode) {
    const next = mode === "dark" ? "light" : "dark";
    return `<header class="top">
      <div class="brand">UniWorkers<small>Hire fellow Spartans</small></div>
      <button class="icon-btn" id="themeBtn" aria-label="Switch to ${next} mode">${icon(mode === "dark" ? "sun" : "moon")}</button>
    </header>`;
  }
}

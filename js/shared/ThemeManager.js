export class ThemeManager {
  constructor() {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.mode = prefersDark ? "dark" : "light";
    this.apply();
  }

  toggle() {
    this.mode = this.mode === "dark" ? "light" : "dark";
    this.apply();
  }

  apply() {
    document.documentElement.setAttribute("data-theme", this.mode);
  }
}

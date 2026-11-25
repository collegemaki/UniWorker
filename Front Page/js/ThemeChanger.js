class ThemeManager {
  constructor() {
    const dark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
    this.mode = dark ? "dark" : "light";
    this.apply();
  }
  toggle() { this.mode = this.mode === "dark" ? "light" : "dark"; this.apply(); }
  apply() { document.documentElement.setAttribute("data-theme", this.mode); }
}

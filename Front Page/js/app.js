/* MODULE 6: App - controls state, screens and clicks */
class App {
  constructor(root) {
    this.root = root;
    this.theme = new ThemeManager();
    this.topBar = new TopBar();
    this.chips = new CategoryChips();
    this.tabBar = new TabBar();
    this.state = {tab:"home", category:"All", user:null};
    this.screens = {
      account: new PlaceholderScreen("Account", "The login and sign-up page comes next."),
      settings: new PlaceholderScreen("Settings", "The settings page comes next."),
      dashboard: new PlaceholderScreen("Worker dashboard", "For signed-up workers. Coming next."),
      admin: new PlaceholderScreen("Admin only", "Admins will manage student and worker records here. Coming next.")
    };
    root.addEventListener("click", e => this.onClick(e));
    this.draw();
  }
  draw() {
    const s = this.state;
    const body = s.tab === "home" ? new HomeScreen().render(s.category) : this.screens[s.tab].render();
    const scroll = this.root.querySelector(".main");
    const top = scroll && s.tab === "home" ? scroll.scrollTop : 0;
    this.root.innerHTML = this.topBar.render(this.theme.mode) +
      (s.tab === "home" ? this.chips.render(s.category) : "") +
      `<main class="main">${body}</main>` + this.tabBar.render(s.tab);
    this.root.querySelector(".main").scrollTop = top;
  }
  toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(this.timer);
    this.timer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  onClick(e) {
    const el = e.target.closest("button");
    if (!el) return;
    if (el.id === "themeBtn") { this.theme.toggle(); this.draw(); }
    else if (el.dataset.tab) { this.state.tab = el.dataset.tab; this.draw(); }
    else if (el.dataset.cat) { this.state.category = el.dataset.cat; this.draw(); }
    else if (el.dataset.hire) {
      if (!this.state.user) this.toast("Sign up to hire a worker.");
    }
  }
}
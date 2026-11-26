import { AuthService } from "../services/AuthService.js";
import { CategoryChips } from "../components/CategoryChips.js";
import { TabBar } from "../components/TabBar.js";
import { TopBar } from "../components/TopBar.js";
import { ScreenRegistry } from "./ScreenRegistry.js";
import { ThemeManager } from "../shared/ThemeManager.js";

export class App {
  constructor(root) {
    this.root = root;
    this.auth = new AuthService();
    this.theme = new ThemeManager();
    this.topBar = new TopBar();
    this.chips = new CategoryChips();
    this.tabBar = new TabBar();
    this.screens = new ScreenRegistry();
    this.state = { tab: "home", category: "All" };
    this.root.addEventListener("click", event => this.onClick(event));
    this.root.addEventListener("submit", event => this.onSubmit(event));
    this.draw();
  }

  draw() {
    const { tab, category } = this.state;
    const screen = this.screens.create(tab);
    const body = tab === "account"
      ? screen.render(this.auth.user)
      : screen.render(category);
    const currentScroll = this.root.querySelector(".main");
    const scrollTop = currentScroll && tab === "home" ? currentScroll.scrollTop : 0;

    this.root.innerHTML =
      this.topBar.render(this.theme.mode) +
      (tab === "home" ? this.chips.render(category) : "") +
      `<main class="main">${body}</main>` +
      this.tabBar.render(tab);
    this.root.querySelector(".main").scrollTop = scrollTop;
  }

  onSubmit(event) {
    if (!event.target.matches("[data-profile-form]")) return;
    event.preventDefault();
    const form = new FormData(event.target);
    try {
      this.auth.updateProfile({
        name: form.get("name"),
        course: form.get("course") || "",
        yearLevel: form.get("yearLevel") || ""
      });
      this.draw();
      this.toast("Profile saved.");
    } catch (error) {
      this.toast(error.message);
    }
  }

  toast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  onClick(event) {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.authOpen) {
      this.openAuthModal(button.dataset.authOpen);
    } else if (button.hasAttribute("data-logout")) {
      this.auth.logout();
      this.state.tab = "home";
      this.draw();
      this.toast("Signed out.");
    } else if (button.id === "themeBtn") {
      this.theme.toggle();
      this.draw();
    } else if (button.dataset.setting === "appearance") {
      this.theme.toggle();
      this.draw();
    } else if (button.dataset.setting === "job-alerts" ||
      button.dataset.setting === "messages") {
      const toggle = button.querySelector(".settings-toggle");
      const isOn = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!isOn));
      toggle.classList.toggle("settings-toggle-on", !isOn);
    } else if (button.dataset.tab === "dashboard" && !this.auth.isAuthenticated()) {
      this.state.pendingTab = "dashboard";
      this.openAuthModal("login", "Sign in to open your worker dashboard.");
    } else if (button.dataset.tab === "admin" && !this.auth.isAdmin()) {
      this.state.pendingTab = "admin";
      this.openAuthModal("login", "Admin access requires sign-in.");
    } else if (button.dataset.tab) {
      this.state.tab = button.dataset.tab;
      this.draw();
    } else if (button.dataset.cat) {
      this.state.category = button.dataset.cat;
      this.draw();
    } else if (button.dataset.hire && !this.auth.isAuthenticated()) {
      this.openAuthModal("signup", "Sign in or create an account to hire a worker.");
    } else if (button.dataset.adminAction) {
      button.textContent = "Approved";
      button.disabled = true;
    }
  }

  openAuthModal(mode = "login", message = "") {
    const existing = document.querySelector(".auth-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.className = "auth-modal";
    modal.innerHTML = `
      <div class="auth-backdrop" data-auth-close></div>
      <form class="auth-dialog" data-auth-form>
        <button class="auth-close" type="button" data-auth-close aria-label="Close">×</button>
        <p class="auth-eyebrow">UniWorkers</p>
        <h2>${mode === "signup" ? "Create account" : "Log in"}</h2>
        ${message ? `<p class="auth-message">${message}</p>` : ""}
        ${mode === "signup" ? `
          <label>Full name<input name="name" type="text" autocomplete="name" required></label>
          <label>Account type
            <select name="accountType">
              <option value="student">I want to hire workers</option>
              <option value="worker">I want to offer services</option>
            </select>
          </label>
          <label>Course<input name="course" type="text" placeholder="e.g. BS Computer Science"></label>
          <label>Year level<input name="yearLevel" type="text" placeholder="e.g. 2nd Year"></label>
        ` : ""}
        <label>School email<input name="email" type="email" autocomplete="email" placeholder="name@school.edu" required></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" minlength="6" required></label>
        <button class="auth-submit" type="submit">${mode === "signup" ? "Create account" : "Log in"}</button>
        <button class="auth-switch" type="button" data-auth-switch="${mode === "signup" ? "login" : "signup"}">${mode === "signup" ? "Already have an account? Log in" : "New here? Create an account"}</button>
      </form>
    `;

    document.body.appendChild(modal);
    modal.querySelector(".auth-dialog").addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      try {
        if (mode === "signup") {
          await this.auth.register({
            name: form.get("name"),
            email: form.get("email"),
            password: form.get("password"),
            accountType: form.get("accountType"),
            course: form.get("course") || "",
            yearLevel: form.get("yearLevel") || ""
          });
        } else {
          await this.auth.login(form.get("email"), form.get("password"));
        }
        modal.remove();
        const requestedTab = this.state.pendingTab;
        this.state.pendingTab = null;
        if (requestedTab === "admin" && !this.auth.isAdmin()) {
          this.state.tab = "home";
          this.draw();
          this.toast("This account does not have admin access.");
          return;
        }
        this.state.tab = requestedTab ||
          (mode === "signup" && this.auth.isWorker() ? "dashboard" : "account");
        this.draw();
        this.toast(mode === "signup" ? "Account created." : "Signed in.");
      } catch (error) {
        this.toast(error.message);
      }
    });

    modal.querySelectorAll("[data-auth-close]").forEach(close =>
      close.addEventListener("click", () => {
        modal.remove();
        this.state.pendingTab = null;
      })
    );
    modal.querySelector("[data-auth-switch]").addEventListener("click", event => {
      modal.remove();
      this.openAuthModal(event.currentTarget.dataset.authSwitch);
    });
  }
}

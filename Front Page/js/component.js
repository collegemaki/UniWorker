class TopBar {
  render(mode) {
    const next = mode === "dark" ? "light" : "dark";
    return `<header class="top">
      <div class="brand">UniWorkers<small>Hire fellow Spartans</small></div>
      <button class="icon-btn" id="themeBtn" aria-label="Switch to ${next} mode">${icon(mode === "dark" ? "sun" : "moon")}</button>
    </header>`;
  }
}

class CategoryChips {
  render(active) {
    return `<div class="chips" role="group" aria-label="Service categories">` +
      CATEGORIES.map(c => `<button class="chip" data-cat="${c}" aria-pressed="${c === active}">${c}</button>`).join("") +
      `</div>`;
  }
}

class WorkerCard {
  constructor(worker) { this.w = worker; }
  stars() { return "★".repeat(this.w.rating) + "☆".repeat(5 - this.w.rating); }
  initials() { return this.w.name.split(" ").map(p => p[0]).join("").slice(0, 2); }
  render() {
    const w = this.w;
    const badge = w.verified ? `<span class="badge">${icon("check")}Verified</span>` : "";
    return `<article class="card">
      <div class="avatar" aria-hidden="true">${this.initials()}</div>
      <div class="info">
        <div class="name">${w.name} ${badge}</div>
        <div class="role">${w.role}</div>
        <div class="stars" aria-label="${w.rating} out of 5 stars">${this.stars()}<span>${w.rating}.0 (${w.reviews})</span></div>
        <div class="row">
          <div class="price">${w.price} <small>/ ${w.unit}</small></div>
          <button class="hire" data-hire="${w.id}">Hire</button>
        </div>
      </div>
    </article>`;
  }
}

class TabBar {
  constructor() {
    this.tabs = [
      {id:"home", label:"Home", icon:"home"},
      {id:"account", label:"Account", icon:"user"},
      {id:"settings", label:"Settings", icon:"gear"},
      {id:"dashboard", label:"Dashboard", icon:"chart"},
      {id:"admin", label:"Admin", icon:"shield"}
    ];
  }
  render(active) {
    return `<nav class="tabs" aria-label="Main">` + this.tabs.map(t =>
      `<button class="tab" data-tab="${t.id}" ${t.id === active ? 'aria-current="page"' : ""}>${icon(t.icon)}${t.label}</button>`
    ).join("") + `</nav>`;
  }
}
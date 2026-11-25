class HomeScreen {
  render(category) {
    const list = WORKERS.filter(w => category === "All" || w.cat === category);
    return `<h2>Available workers</h2>` + list.map(w => new WorkerCard(w).render()).join("");
  }
}

class PlaceholderScreen {
  constructor(title, note) { this.title = title; this.note = note; }
  render() { return `<div class="empty"><h2>${this.title}</h2><p>${this.note}</p></div>`; }
}
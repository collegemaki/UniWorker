export class PlaceholderView {
  constructor(title, note, className) {
    this.title = title;
    this.note = note;
    this.className = className;
  }

  render() {
    return `<section class="${this.className}">
      <div class="page-placeholder"><h2>${this.title}</h2><p>${this.note}</p></div>
    </section>`;
  }
}

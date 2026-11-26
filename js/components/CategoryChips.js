import { CATEGORIES } from "../data/workers.js";

export class CategoryChips {
  render(active) {
    return `<div class="chips" role="group" aria-label="Service categories">${CATEGORIES.map(category =>
      `<button class="chip" data-cat="${category}" aria-pressed="${category === active}">${category}</button>`
    ).join("")}</div>`;
  }
}

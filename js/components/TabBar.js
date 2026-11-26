import { TABS } from "../core/tabs.config.js";
import { icon } from "../shared/icons.js";

export class TabBar {
  render(active) {
    return `<nav class="tabs" aria-label="Main">${TABS.map(tab =>
      `<button class="tab" data-tab="${tab.id}" ${tab.id === active ? 'aria-current="page"' : ""}>${icon(tab.icon)}${tab.label}</button>`
    ).join("")}</nav>`;
  }
}

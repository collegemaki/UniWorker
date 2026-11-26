import { icon } from "../shared/icons.js";

export class WorkerCard {
  constructor(worker) {
    this.worker = worker;
  }

  render() {
    const worker = this.worker;
    const stars = "★".repeat(worker.rating) + "☆".repeat(5 - worker.rating);
    const initials = worker.name.split(" ").map(part => part[0]).join("").slice(0, 2);
    const badge = worker.verified
      ? `<span class="badge">${icon("check")}Verified</span>`
      : "";

    return `<article class="card">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="info">
        <div class="name">${worker.name} ${badge}</div>
        <div class="role">${worker.role}</div>
        <div class="stars" aria-label="${worker.rating} out of 5 stars">${stars}<span>${worker.rating}.0 (${worker.reviews})</span></div>
        <div class="row">
          <div class="price">${worker.price} <small>/ ${worker.unit}</small></div>
          <button class="hire" data-hire="${worker.id}">Hire</button>
        </div>
      </div>
    </article>`;
  }
}

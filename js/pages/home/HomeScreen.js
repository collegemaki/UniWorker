import { WorkerCard } from "../../components/WorkerCard.js";
import { WORKERS } from "../../data/workers.js";

export class HomeScreen {
  render(category = "All") {
    const workers = WORKERS.filter(worker =>
      category === "All" || worker.cat === category
    );
    return `<section class="home-screen"><h2>Available workers</h2>${workers.map(worker =>
      new WorkerCard(worker).render()
    ).join("")}</section>`;
  }
}

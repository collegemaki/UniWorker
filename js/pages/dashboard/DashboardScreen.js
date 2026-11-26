export class DashboardScreen {
  render() {
    return `
      <section class="dashboard-screen">
        <header class="dashboard-header">
          <p class="dashboard-eyebrow">Worker dashboard</p>
          <h2>My work</h2>
        </header>
        <div class="dashboard-stats">
          <article><strong>3</strong><span>Active jobs</span></article>
          <article><strong>12</strong><span>Completed</span></article>
          <article><strong>₱4,850</strong><span>Earnings</span></article>
        </div>
        <div class="dashboard-panel">
          <h3>Recent bookings</h3>
          <div class="dashboard-row"><span><strong>Logo poster design</strong><small>Due Nov 28</small></span><b>In progress</b></div>
          <div class="dashboard-row"><span><strong>Math tutoring</strong><small>Completed Nov 22</small></span><b class="done">Completed</b></div>
        </div>
      </section>
    `;
  }
}

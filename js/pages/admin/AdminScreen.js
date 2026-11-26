export class AdminScreen {
  render() {
    return `
      <section class="admin-screen">
        <header class="admin-header">
          <p class="admin-eyebrow">Administration</p>
          <h2>System overview</h2>
        </header>
        <div class="admin-stats">
          <article><strong>248</strong><span>Students</span></article>
          <article><strong>76</strong><span>Workers</span></article>
          <article><strong>5</strong><span>Reports</span></article>
        </div>
        <div class="admin-panel">
          <h3>Pending verification</h3>
          <div class="admin-row"><span>Maria Santos<small>Math tutor</small></span><button type="button" data-admin-action="approve">Approve</button></div>
          <div class="admin-row"><span>Jarel Cruz<small>Graphic designer</small></span><button type="button" data-admin-action="approve">Approve</button></div>
        </div>
      </section>
    `;
  }
}

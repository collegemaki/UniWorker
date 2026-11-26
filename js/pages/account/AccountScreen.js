export class AccountScreen {
  render(user) {
    if (user) {
      const escape = value => String(value || "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]);

      return `
        <section class="account-screen">
          <header class="account-header">
            <p class="account-eyebrow">${user.role === "admin" ? "Administrator" : "My account"}</p>
            <h2>${escape(user.name)}</h2>
            <p>${escape(user.email)}</p>
          </header>
          ${user.role === "admin" ? `
            <div class="account-profile-note">You are signed in with administrator access.</div>
          ` : `
            <form class="account-profile-form" data-profile-form>
              <h3>Profile details</h3>
              <label>Full name<input name="name" value="${escape(user.name)}" required></label>
              <label>Email<input value="${escape(user.email)}" readonly></label>
              <label>Course<input name="course" value="${escape(user.course)}" placeholder="e.g. BS Computer Science"></label>
              <label>Year level<input name="yearLevel" value="${escape(user.yearLevel)}" placeholder="e.g. 2nd Year"></label>
              <button class="account-primary" type="submit">Save profile</button>
            </form>
          `}
          <button class="account-secondary" type="button" data-logout>Sign out</button>
        </section>
      `;
    }

    return `
      <section class="account-screen">
        <header class="account-header">
          <p class="account-eyebrow">UniWorkers</p>
          <h2>Welcome</h2>
          <p>Sign in to hire workers, manage listings, or access admin tools.</p>
        </header>
        <button class="account-primary" type="button" data-auth-open="login">Log in</button>
        <button class="account-secondary" type="button" data-auth-open="signup">Create account</button>
      </section>
    `;
  }
}

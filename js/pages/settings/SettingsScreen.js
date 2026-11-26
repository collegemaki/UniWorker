export class SettingsScreen {
  render() {
    return `
      <section class="settings-screen">
        <header class="settings-header">
          <p class="settings-eyebrow">Preferences</p>
          <h2>Settings</h2>
        </header>

        <div class="settings-section">
          <h3>Appearance</h3>
          <button class="settings-row" type="button" data-setting="appearance">
            <span class="settings-row-copy">
              <span class="settings-row-title">Dark mode</span>
              <span class="settings-row-description">Switch between light and dark themes</span>
            </span>
            <span class="settings-toggle" aria-hidden="true">
              <span class="settings-toggle-knob"></span>
            </span>
          </button>
        </div>

        <div class="settings-section">
          <h3>Notifications</h3>
          <button class="settings-row" type="button" data-setting="job-alerts" aria-pressed="true">
            <span class="settings-row-copy">
              <span class="settings-row-title">Job alerts</span>
              <span class="settings-row-description">Notify me about new opportunities</span>
            </span>
            <span class="settings-toggle settings-toggle-on" aria-hidden="true">
              <span class="settings-toggle-knob"></span>
            </span>
          </button>
          <button class="settings-row" type="button" data-setting="messages" aria-pressed="true">
            <span class="settings-row-copy">
              <span class="settings-row-title">Messages</span>
              <span class="settings-row-description">Notify me about new messages</span>
            </span>
            <span class="settings-toggle settings-toggle-on" aria-hidden="true">
              <span class="settings-toggle-knob"></span>
            </span>
          </button>
        </div>

        <div class="settings-section">
          <h3>Account</h3>
          <button class="settings-row" type="button" data-setting="profile">
            <span class="settings-row-copy">
              <span class="settings-row-title">Edit profile</span>
              <span class="settings-row-description">Update your personal information</span>
            </span>
            <span class="settings-chevron" aria-hidden="true">›</span>
          </button>
          <button class="settings-row" type="button" data-setting="password">
            <span class="settings-row-copy">
              <span class="settings-row-title">Change password</span>
              <span class="settings-row-description">Update your account password</span>
            </span>
            <span class="settings-chevron" aria-hidden="true">›</span>
          </button>
        </div>

        <div class="settings-section">
          <h3>Privacy</h3>
          <button class="settings-row" type="button" data-setting="visibility">
            <span class="settings-row-copy">
              <span class="settings-row-title">Profile visibility</span>
              <span class="settings-row-description">Control who can view your profile</span>
            </span>
            <span class="settings-row-value">Everyone</span>
            <span class="settings-chevron" aria-hidden="true">›</span>
          </button>
        </div>

        <button class="settings-sign-out" type="button" data-setting="sign-out">
          Sign out
        </button>
      </section>
    `;
  }
}

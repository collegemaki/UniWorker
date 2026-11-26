package com.uniworkers.settings;

public class SettingsController {
  private final SettingsService settingsService;

  public SettingsController(SettingsService settingsService) {
    this.settingsService = settingsService;
  }

  public UserSettings getSettings(String userId) {
    return settingsService.getSettings(userId);
  }

  public UserSettings updateSettings(String userId, UserSettings settings) {
    return settingsService.updateSettings(userId, settings);
  }

  public void resetSettings(String userId) {
    settingsService.resetSettings(userId);
  }
}

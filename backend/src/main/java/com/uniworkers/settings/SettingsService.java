package com.uniworkers.settings;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class SettingsService {
  private final Map<String, UserSettings> settingsByUser = new HashMap<>();

  public UserSettings getSettings(String userId) {
    requireUserId(userId);
    return settingsByUser.computeIfAbsent(userId, id -> new UserSettings());
  }

  public UserSettings updateSettings(String userId, UserSettings updatedSettings) {
    requireUserId(userId);
    Objects.requireNonNull(updatedSettings, "Settings cannot be null");

    String visibility = updatedSettings.getProfileVisibility();
    if (!"Everyone".equals(visibility) &&
        !"Students".equals(visibility) &&
        !"Only me".equals(visibility)) {
      throw new IllegalArgumentException("Invalid profile visibility");
    }

    settingsByUser.put(userId, updatedSettings);
    return updatedSettings;
  }

  public void resetSettings(String userId) {
    requireUserId(userId);
    settingsByUser.put(userId, new UserSettings());
  }

  private void requireUserId(String userId) {
    if (userId == null || userId.trim().isEmpty()) {
      throw new IllegalArgumentException("User ID is required");
    }
  }
}

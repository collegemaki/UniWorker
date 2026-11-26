package com.uniworkers.settings;

public class UserSettings {
  private boolean darkMode;
  private boolean jobAlerts;
  private boolean messages;
  private String profileVisibility;

  public UserSettings() {
    this.darkMode = false;
    this.jobAlerts = true;
    this.messages = true;
    this.profileVisibility = "Everyone";
  }

  public boolean isDarkMode() {
    return darkMode;
  }

  public void setDarkMode(boolean darkMode) {
    this.darkMode = darkMode;
  }

  public boolean isJobAlerts() {
    return jobAlerts;
  }

  public void setJobAlerts(boolean jobAlerts) {
    this.jobAlerts = jobAlerts;
  }

  public boolean isMessages() {
    return messages;
  }

  public void setMessages(boolean messages) {
    this.messages = messages;
  }

  public String getProfileVisibility() {
    return profileVisibility;
  }

  public void setProfileVisibility(String profileVisibility) {
    this.profileVisibility = profileVisibility;
  }
}

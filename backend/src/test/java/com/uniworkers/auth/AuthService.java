package test.java.com.uniworkers.auth;

import java.util.HashMap;
import java.util.Map;


public class AuthService {
  private final Map<String, String> rolesByEmail = new HashMap<>();


  public AuthService() {
    rolesByEmail.put("admin@school.edu", "ADMIN");
  }


  public boolean isSchoolEmail(String email) {
    return email != null && email.toLowerCase().endsWith("@school.edu");
  }


  public boolean isAdmin(String email) {
    return "ADMIN".equals(rolesByEmail.get(normalizeEmail(email)));
  }


  public String login(String email) {
    if (!isSchoolEmail(email)) {
      throw new IllegalArgumentException("Use a school email ending in @school.edu.");
    }


    String normalizedEmail = normalizeEmail(email);
    return rolesByEmail.getOrDefault(normalizedEmail, "STUDENT");
  }


  private String normalizeEmail(String email) {
    return email == null ? "" : email.trim().toLowerCase();
  }
}

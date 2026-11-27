package test.java.com.uniworkers.auth;

public class LoginController {
  private final AuthService authService;


  public LoginController(AuthService authService) {
    this.authService = authService;
  }


  public String login(String email) {
    return authService.login(email);
  }


  public boolean isAdmin(String email) {
    return authService.isAdmin(email);
  }
}


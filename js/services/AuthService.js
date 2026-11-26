export class AuthService {
  constructor() {
    this.usersKey = "uniworkers.users";
    this.sessionKey = "uniworkers.session";
    this.user = this.readSession();
  }

  isAuthenticated() {
    return this.user !== null;
  }

  async register({ name, email, password, accountType, course, yearLevel }) {
    const cleanEmail = this.normalizeEmail(email);
    if (!name.trim() || !cleanEmail || !password) {
      throw new Error("Name, email, and password are required.");
    }
    if (cleanEmail === "admin@school.edu") {
      throw new Error("That email is reserved for the administrator.");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const users = this.readUsers();
    if (users.some(user => user.email === cleanEmail)) {
      throw new Error("An account with that email already exists.");
    }

    const user = {
      name: name.trim(),
      email: cleanEmail,
      passwordHash: await this.hashPassword(password),
      role: accountType === "worker" ? "worker" : "student",
      course: course.trim(),
      yearLevel: yearLevel.trim()
    };
    users.push(user);
    this.writeUsers(users);
    this.setSession(user);
    return this.user;
  }

  async login(email, password) {
    const cleanEmail = this.normalizeEmail(email);
    if (!cleanEmail || !password) {
      throw new Error("Email and password are required.");
    }

    if (cleanEmail === "admin@school.edu" && password === "admin123") {
      const admin = {
        name: "Administrator",
        email: cleanEmail,
        role: "admin",
        course: "",
        yearLevel: ""
      };
      this.setSession(admin);
      return this.user;
    }

    const user = this.readUsers().find(account => account.email === cleanEmail);
    if (!user || user.passwordHash !== await this.hashPassword(password)) {
      throw new Error("Incorrect email or password.");
    }

    this.setSession(user);
    return this.user;
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.sessionKey);
  }

  updateProfile({ name, course, yearLevel }) {
    if (!this.isAuthenticated() || this.isAdmin()) {
      throw new Error("Sign in with a student account to edit a profile.");
    }
    if (!name.trim()) {
      throw new Error("Name is required.");
    }

    const updatedUser = {
      ...this.user,
      name: name.trim(),
      course: course.trim(),
      yearLevel: yearLevel.trim()
    };
    const users = this.readUsers().map(user =>
      user.email === updatedUser.email ? { ...user, ...updatedUser } : user
    );
    this.writeUsers(users);
    this.setSession(updatedUser);
    return this.user;
  }

  isAdmin() {
    return this.isAuthenticated() && this.user.role === "admin";
  }

  isWorker() {
    return this.isAuthenticated() && this.user.role === "worker";
  }

  readUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || "[]");
  }

  readSession() {
    const session = localStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  writeUsers(users) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  setSession(user) {
    const { passwordHash, ...safeUser } = user;
    this.user = safeUser;
    localStorage.setItem(this.sessionKey, JSON.stringify(safeUser));
  }

  normalizeEmail(email) {
    return typeof email === "string" ? email.trim().toLowerCase() : "";
  }

  async hashPassword(password) {
    if (!globalThis.crypto || !globalThis.crypto.subtle) {
      throw new Error("Secure password hashing is unavailable. Open the app through localhost.");
    }
    const bytes = new TextEncoder().encode(password);
    const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), byte =>
      byte.toString(16).padStart(2, "0")
    ).join("");
  }
}

import { $api } from "../http";

export class AuthService {
  static login(email, password) {
    return $api.post("/auth/login", { email, password })
  }

  static register(email, password) {
    return $api.post("/auth/register", { email, password })
  }

  static logout() {
    return $api.post("/auth/logout")
  }
}
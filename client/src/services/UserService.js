import { $api } from "../http";

export class UserService {
  static getSelf() {
    return $api.get("/user/me")
  }
}
import { User } from "../../domain/User.js";

export class UserRepository {
  async findById(id) {
    const user = (await User.findById(id)) || null;
    return user;
  }

  async deleteUserById(id) {
    return (await User.delete(id)) || null;
  }

  async save(user) {
    return (await User.save(user)) || null;
  }
}

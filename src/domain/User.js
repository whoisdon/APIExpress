import mongoose from "mongoose";


// Schema de usuário (get, post, path) 👮‍♂️
const user = new mongoose.model("users", {
  password: String,
  avatar: String,
  email: String,
  pedits: [
    {
      name: String,
      description: String,
      avatar_bot: String,
    },
  ],
});

export class User {
  constructor(password, avatar, email) {
    this.collection = "users"
    this.password = password;
    this.avatar = avatar;
    this.email = email;
    this.pedits = [];
  }

  async findById(id) {
    return await user.findOne({ _id: id });
  }
  
  async delete(id) {
    return await user.deleteOne({_id: id});
  }

  addPedits(pedits) {
    this.pedits.push(pedits);
  }

  removePedits(peditId) {
    this.pedits = this.pedits.filter((pedits) => pedits.name !== peditId);
  }
  
  async save(user) {
    return await user.create(user);
  }
}

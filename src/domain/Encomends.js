import mongoose from "mongoose";


// Schema de usuário (get, post, path) 👮‍♂️
const encomendas = new mongoose.model("encomendas", {
  name: String,
  description: String,
  avatar_bot: String,
});

export class Encomendas {
  constructor(name, description, avatar_bot) {
    this.name = name;
    this.description = description;
    this.avatar_bot = avatar_bot
  }

  async findById(id) {
    return await encomendas.findOne({ _id: id });
  }
  
  async delete(id) {
    return await encomendas.deleteOne({_id: id});
  }

  async save(user) {
    return await encomendas.create(user);
  }
}


import Log from "../Log/logs.js";
import { hash512 } from "../middleware/CryptoHashs.js";
import { UserRepository } from "../adaptars/client/userRepository.js";

export class AddUser {
  constructor() {
    this.UserRepository = UserRepository;
  }
  
  execute(dto) {
    const { password, email } = dto;
    const userAuth = await this.UserRepository.findById({ email: email, password: password});
    
    if(!userAuth) return {value: false, data: "Usuário não encontrado."}
    
    const newUser = {
      email: hash512(email).__hash__,
      password: hash512(password).__hash__
    };
    
    await this.UserRepository.save(newUser);
    return {value: true, data: "Acesso autorizado"}
  }
}
import MapRoutes from "../../infrastructure/Handlers/Routes.js";
import { UserRepository } from "../../adaptars/client/userRepository.js";
import log from "../../Log/logs.js";
import fetch from "node-fetch";

export default class extends MapRoutes {
  constructor(app) {
    super(app, {
      name: "/auth",
      method: "post",
      json: true,
      seconds: 14,
      req_time: 7,
    });
  }

  execute({ req, res, next }) {
    console.log("");
  }
}

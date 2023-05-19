import { readdirSync } from "fs";
import { join } from "path";
import express from "express";
import Register from "./Routes.js";
import bodyParser from "body-parser";
import RateLimit from "../../middleware/Rate.limit.js";
import Cors from "../../middleware/Headers.Auth.js";
import ScamHTTP from "../../middleware/Firewall.js";
import Db from "../database/connection.js";
import MongoDbConnection from "../database/database.js";

export default class extends Register {
  constructor(app) {
    super(app);
  }

  async registerRoutes(path = "src/services") {
    const categories = readdirSync(path);

    for (const category of categories) {
      const commands = readdirSync(`${path}/${category}`);

      for (const command of commands) {
        const commandFile = join(
          process.cwd(),
          `${path}/${category}/${command}`
        );

        const { default: MapRoutes } = await import(commandFile);
        const cmd = new MapRoutes(this);
        this.log(
          `Rota ${
            `${cmd.options.name}`.magenta
          } foi registrada com sucesso no sistema.`,
          "routes"
        );

        if (cmd.options.json) {
          this.app.use(express.json({ strict: false }));
          this.app.use((req, res, next) => ScamHTTP(req, res, next));
          this.app.use(express.json());
          this.app.use(bodyParser.json());
        }

        this.app.use(Cors);

        const callback = (req, res, next) =>
          RateLimit(_r, req, res, next, _r.options.seconds, _r.options.limit);

        this.app[cmd.options.method](cmd.options.name, callback);
      }
    }
    new Db(MongoDbConnection).Start();
    this.log("Servidor 💻 foi iniciado com sucesso 🟢", "success");
  }
}

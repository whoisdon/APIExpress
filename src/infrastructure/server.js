import Register from "./Handlers/Register.js";
import log from "../Log/logs.js";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

new Register(app).registerRoutes();

const PORT = process.env.PORT_API;
app.listen(PORT, () =>
  log(`Rotas sendo carregadas na porta ${PORT}...`, "system")
);

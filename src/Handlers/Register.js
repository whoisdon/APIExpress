import { readdirSync } from 'fs';
import { join } from 'path';
import express from 'express';
import Register from './Routes.js';

export default class extends Register {
    constructor(app) {
        super(app);
  }

  async registerRoutes(path = 'src/Routes') {
    const categories = readdirSync(path);
    for (const category of categories) {
      const commands = readdirSync(`${path}/${category}`);
    
      for (const command of commands) {
        const commandFile = join(process.cwd(), `${path}/${category}/${command}`);
        const { default: MapRoutes } = await import(commandFile);
        const cmd = new MapRoutes(this);

        cmd.options.json ? this.app.use(express.json()) : false;
        cmd.options.static ? this.app.use(express.static(`${process.cwd()}/${cmd.options.static}`)) : false;

        const callback = (req, res, next) => cmd.execute(req, res, next);
        this.app[cmd.options.method](cmd.options.name, callback)
      }
    }
  }
}

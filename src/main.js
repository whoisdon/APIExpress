import Register from './Handlers/Register.js';

import express from 'express';
const app = express();

new Register(app).registerRoutes();

app.listen(8080, () => console.log('[LOG] Rotas registradas com sucesso!'));

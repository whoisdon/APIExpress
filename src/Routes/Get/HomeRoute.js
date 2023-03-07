import MapRoutes from '../../Handlers/Routes.js';

export default class extends MapRoutes {
  constructor(app) {
    super(app, {
        name: '/',
        method: 'get',
        static: 'src/Client/Render'
    });
  }

  execute({req, res, next}) {
    res.sendFile(`${process.cwd()}/src/Client/Render/index.html`);
  }
}

import * as express from 'express';
import * as http from 'http';

export class App {
  private app: express.Application = express();
  private server: http.Server;

  constructor() {
    this.config();
  }

  public listen(port: string, initHandler?: Function): this {
    this.server = this.app.listen(port, initHandler);
    return this;
  }

  // Configure API endpoints.
  public configApi(basePath: string, route: express.Router): this {
    this.app.use(basePath, route);
    return this;
  }

  private config(): void {
    // Body parser
    this.app.use(express.json());
  }
}

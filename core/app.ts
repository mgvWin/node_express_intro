import * as express from 'express';
import * as http from 'http';

export class App {
  private app: express.Application = express();
  private server: http.Server;

  constructor() {
    this.config();
  }

  public listen(port: number, initHandler?: Function): this {
    this.server = this.app.listen(port, initHandler);
    return this;
  }

  // Configure API endpoints.
  public configApi(basePath: string, routes: express.Router[]): this {
    this.app.use(basePath, routes);
    return this;
  }

  private config(): void {
    // Body parser
    this.app.use(express.json());
  }
}

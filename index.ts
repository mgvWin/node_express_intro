import { routes } from './routes';
import { App, APP_CONFIG } from './core';

const app = new App();

app
  .configApi(APP_CONFIG.API_BASE, [routes])
  .listen(
    APP_CONFIG.PORT,
    () => console.debug(`App listening on port ${APP_CONFIG.PORT}!`),
  );

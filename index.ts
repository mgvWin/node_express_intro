import { APP_CONFIG } from './configs';
import { routes } from './routes';
import { App } from './core';

const app = new App();

app
  .configApi(APP_CONFIG.API_BASE, [routes])
  .listen(
    APP_CONFIG.PORT,
    () => console.debug(`App listening on port ${APP_CONFIG.PORT}!`),
  );

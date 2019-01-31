import { merge } from 'lodash';

import { DEFAULT_CONFIG } from './default';
import { Environment } from '../../entities';

// Array for add environments configs
const configs: Environment[] = [

];

const APP_CONFIG: Environment = configs
  .filter(config => config.NODE_ENV === process.env.NODE_ENV)
  .reduce(
    (appConfig, config: Environment) => {
      return merge(config, appConfig);
    },
    DEFAULT_CONFIG,
  );

export default APP_CONFIG;

import { merge } from 'lodash';

import { Environment, DeepPartial, Merge } from '../entities';
import { DEFAULT_CONFIG } from '../configs/env/default';

// Array for add environments configs
const configs: DeepPartial<Environment>[] = [

];

const  PROCESS_ENV = process.env.NODE_ENV;

export const APP_CONFIG: Merge<Environment, DeepPartial<Environment>> = configs
  .filter(config => config.ENV === PROCESS_ENV)
  .reduce((appConfig, config) => merge({}, appConfig, config), DEFAULT_CONFIG);

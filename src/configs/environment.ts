import { Environments, EnvType } from './../interfaces';

const environments: Environments = {
  [EnvType.DEVELOPMENT]: {
    PORT: 4200,
  },
  [EnvType.PRODUCTION]: Object.assign({}, this[EnvType.DEVELOPMENT]),
};

export const environment = environments[process.env.NODE_ENV || EnvType.DEVELOPMENT];

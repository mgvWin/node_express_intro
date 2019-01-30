export enum EnvType {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export type Environments = {
  [key in EnvType]: {
    PORT: number;
  };
};

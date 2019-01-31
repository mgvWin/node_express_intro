type EnvironmentType = 'development' | 'testing'| 'staging' | 'production';

export type Environment = {
  NODE_ENV: EnvironmentType;
  PORT: number;
  API_BASE: string;
};

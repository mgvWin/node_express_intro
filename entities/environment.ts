type EnvironmentType = 'development' | 'testing'| 'staging' | 'production';

export type Environment = {
  ENV: EnvironmentType;
  PORT: number;
  API_BASE: string;
};

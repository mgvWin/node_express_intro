export type Environment = {
  PORT: string;
  API_BASE: string;
  PASSWORD_SALT: string;
  JWT: {
    SECRET_KEY: string;
  }
};

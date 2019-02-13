import { Environment } from '../entities';

const { API_BASE, PORT, JWT_SECRET_KEY, PASSWORD_SALT } = process.env;

export const APP_CONFIG: Environment = {
  API_BASE,
  PORT,
  PASSWORD_SALT,
  JWT: {
    SECRET_KEY: JWT_SECRET_KEY,
  },
};

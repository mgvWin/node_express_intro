import { Environment } from '../entities';

const { API_BASE, PORT } = process.env;

export const APP_CONFIG: Environment = {
  API_BASE,
  PORT,
};

import * as dotenv from 'dotenv';

import { Environment } from '../entities';

// Read config variables from .env file
dotenv.config();

const {
  API_BASE,
  PORT,
  JWT_PRIVATE_KEY = '',
  JWT_PUBLIC_KEY = '',
  PASSWORD_SALT,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
} = process.env;

export const APP_CONFIG: Environment = {
  API_BASE,
  PORT,
  PASSWORD_SALT,
  JWT: {
    PRIVATE_KEY: JWT_PRIVATE_KEY,
    PUBLIC_KEY: JWT_PUBLIC_KEY,
  },
  FACEBOOK: {
    APP_ID: FACEBOOK_APP_ID,
    APP_SECRET: FACEBOOK_APP_SECRET,
  },
  TWITTER: {
    CONSUMER_KEY: TWITTER_CONSUMER_KEY,
    CONSUMER_SECRET: TWITTER_CONSUMER_SECRET,
  },
  GOOGLE_OAUTH: {
    CLIENT_ID: GOOGLE_OAUTH_CLIENT_ID,
    CLIENT_SECRET: GOOGLE_OAUTH_CLIENT_SECRET,
  },
};

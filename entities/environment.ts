export type Environment = {
  PORT: string;
  API_BASE: string;
  PASSWORD_SALT: string;
  JWT: {
    PRIVATE_KEY: string;
    PUBLIC_KEY: string;
  },
  FACEBOOK: {
    APP_ID: string;
    APP_SECRET: string;
  },
  TWITTER: {
    CONSUMER_KEY: string;
    CONSUMER_SECRET: string;
  },
  GOOGLE_OAUTH: {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  }
};

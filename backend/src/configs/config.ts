import { Config } from './config_interface';

export const config: Config = {
  env: {
    PORT: Number(process.env.PORT) || 5000,
    PROTOCOL: process.env.PROTOCOL || 'http',
    DOMAIN: process.env.DOMAIN || 'localhost',
  },
  DEFAULT_LIMIT: 5,
  SECRET_AUTHORIZATION_TOKEN: 'token',
};

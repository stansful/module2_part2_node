import { Config } from './config_interface';

export const config: Config = {
  env: {
    PORT: Number(process.env.PORT) || 5000,
    PROTOCOL: process.env.PROTOCOL || 'http',
    DOMAIN: process.env.DOMAIN || 'localhost',
  },
  httpStatusCodes: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  },
  DEFAULT_LIMIT: 5,
  SECRET_AUTHORIZATION_TOKEN: 'token',
};

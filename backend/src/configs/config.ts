import { Config } from './config_interface';

export const config: Config = {
  PORT: Number(process.env.PORT) || 5000,
  PROTOCOL: process.env.PROTOCOL || 'http',
  DOMAIN: process.env.DOMAIN || 'localhost',
};

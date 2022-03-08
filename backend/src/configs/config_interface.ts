export interface Config {
  env: {
    PORT: number;
    PROTOCOL: string;
    DOMAIN: string;
  };
  DEFAULT_LIMIT: number;
  SECRET_AUTHORIZATION_TOKEN: string;
}

export interface Config {
  env: {
    PORT: number;
    PROTOCOL: string;
    DOMAIN: string;
  };
  DEFAULT_LIMIT: number;
}

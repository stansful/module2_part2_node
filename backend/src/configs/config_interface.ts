export interface Config {
  env: {
    PORT: number;
    PROTOCOL: string;
    DOMAIN: string;
  };
  httpStatusCodes: {
    OK: number;
    BAD_REQUEST: number;
    UNAUTHORIZED: number;
    NOT_FOUND: number;
  };
  DEFAULT_LIMIT: number;
  SECRET_AUTHORIZATION_TOKEN: string;
}

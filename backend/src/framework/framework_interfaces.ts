export type HttpMethods = 'GET' | 'POST';

export type VoidHandler = () => void;

export interface RouteMethods {
  GET?: VoidHandler;
  POST?: VoidHandler;
}

export interface Routes {
  [key: string]: RouteMethods;
}

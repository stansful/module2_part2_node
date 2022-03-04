export type HttpMethods = 'GET' | 'POST';

export type VoidHandler = () => void;

export interface RouteMethods {
  [key: string]: VoidHandler;
}

export interface Routes {
  [key: string]: RouteMethods;
}

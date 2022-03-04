import { HttpMethods, Routes, VoidHandler } from './framework_interfaces';

export class Router {
  public routes: Routes;

  constructor() {
    this.routes = {};
  }

  private addRoute(method: HttpMethods, path: string, handler: VoidHandler) {
    const endpoint = this.routes[path];
    if (!endpoint) {
      this.routes[path] = {};
    }

    const endpointMethod = this.routes[path][method];
    if (endpointMethod) {
      throw new Error(`Method: ${method} is already exist in ${endpoint}`);
    }

    this.routes[path][method] = handler;
  }

  public get(path: string, handler: VoidHandler) {
    this.addRoute('GET', path, handler);
  }

  public post(path: string, handler: VoidHandler) {
    this.addRoute('POST', path, handler);
  }
}

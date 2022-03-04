import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { EventEmitter } from 'events';
import { Routes, VoidHandler } from './framework_interfaces';
import { config } from '../configs/config';

export class Application {
  private server: Server;
  private emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
    this.server = this.createServer();
  }

  private getExpandedUrl(reqUrl: string = ''): URL {
    const apiURL = `${config.PROTOCOL}://${config.DOMAIN}:${config.PORT}`;
    return new URL(`${apiURL}${reqUrl}`);
  }

  private receiveData(req: IncomingMessage, res: ServerResponse, url: URL) {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      if (body) {
        body = JSON.parse(body);
      }

      const event = this.emitter.emit(`${req.method}:${url.pathname}`, req, res, url, body);

      if (!event) {
        res.end('Route didnt exist =(');
      }
    });
  }

  private createServer() {
    return http.createServer((req, res) => {
      const url = this.getExpandedUrl(req.url);

      this.receiveData(req, res, url);

      res.end('Hi');
    });
  }

  public listen(port: number, callback: () => void): http.Server {
    return this.server.listen(port, callback);
  }

  public registerRouter(router: Routes) {
    const endpoints = Object.keys(router);

    endpoints.forEach((pathName) => {
      const methods = Object.keys(router[pathName]);

      methods.forEach((method) => {
        const handler = router[pathName][method];

        this.emitter.on(`${method}:${pathName}`, handler);
      });
    });
  }
}

import http, { Server } from 'http';
import { VoidHandler } from './framework_interfaces';

export class Application {
  private server: Server;

  constructor() {
    this.server = this.createServer();
  }

  private createServer() {
    return http.createServer((req, res) => {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', () => {
        if (body) {
          body = JSON.parse(body);
          console.log(body);
        }
      });

      res.end('Hi');
    });
  }

  public listen(port: number, callback: VoidHandler): http.Server {
    return this.server.listen(port, callback);
  }
}

import { IncomingMessage, ServerResponse } from 'http';
import { User } from './user_interface';

class UserService {
  signIn(req: IncomingMessage, res: ServerResponse, url: URL, body: User) {
    console.log(url.searchParams, body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('token:token');
  }
}

export const userService = new UserService();

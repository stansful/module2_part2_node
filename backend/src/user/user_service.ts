import { IncomingMessage, ServerResponse } from 'http';
import { User } from './user_interface';
import { localDatabase } from '../database/local_database';
import { responseService } from '../response/response_service';

class UserService {
  public signIn(req: IncomingMessage, res: ServerResponse, url: URL, body: User) {
    const { email, password } = body;
    const candidate: User = { email, password };

    const user = localDatabase.findOne(candidate);
    if (!user) {
      responseService.badCredentials(res);
    } else {
      const passwordMatch = user.password === candidate.password;
      if (passwordMatch) {
        responseService.successSignIn(res);
      } else {
        responseService.badCredentials(res);
      }
    }
  }
}

export const userService = new UserService();

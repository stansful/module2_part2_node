import { ServerResponse } from 'http';
import { ResponseErrorMessage, ResponseSuccessSignIn } from './response_interfaces';

class ResponseService {
  public emailOrPasswordInvalid(res: ServerResponse) {
    const errorMessage: ResponseErrorMessage = { errorMessage: 'Email or password are invalid.' };
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(errorMessage));
  }

  public successSignIn(res: ServerResponse) {
    const token: ResponseSuccessSignIn = { token: 'token' };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(token));
  }
}

export const responseService = new ResponseService();

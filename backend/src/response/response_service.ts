import { ServerResponse } from 'http';
import { ResponseErrorMessage, ResponseNotFoundMessage, ResponseSuccessSignIn } from './response_interfaces';

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

  public notFound(res: ServerResponse, message = 'Not Found') {
    const notFoundMessage: ResponseNotFoundMessage = { message };
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notFoundMessage));
  }
}

export const responseService = new ResponseService();

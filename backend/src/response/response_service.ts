import { ServerResponse } from 'http';
import {
  ResponseBadRequestMessage,
  ResponseErrorMessage,
  ResponseMessage,
  ResponseSuccessSignIn,
} from './response_interfaces';
import { tokenService } from '../token/token_service';

class ResponseService {
  public badCredentials(res: ServerResponse) {
    const errorMessage: ResponseErrorMessage = { errorMessage: 'Email or password are invalid.' };

    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(errorMessage));
  }

  public successSignIn(res: ServerResponse) {
    const token: ResponseSuccessSignIn = { token: tokenService.token };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(token));
  }

  public notFound(res: ServerResponse, message = 'Not Found') {
    const notFoundMessage: ResponseMessage = { message };

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notFoundMessage));
  }

  public galleryObjects<Type>(res: ServerResponse, object: Type) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(object));
  }

  public badRequest(res: ServerResponse, end: number, start: number = 0) {
    const errorMessage: ResponseBadRequestMessage = {
      errorMessage: `Page should be greater than ${start} and less than ${end}`,
    };

    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(errorMessage));
  }
}

export const responseService = new ResponseService();

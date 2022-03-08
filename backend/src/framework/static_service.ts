import { IncomingMessage, ServerResponse } from 'http';
import { createReadStream } from 'fs';
import fs from 'fs/promises';
import { VoidHandler } from './framework_interfaces';
import { config } from '../configs/config';

class StaticService {
  public streamHandler(filePath: string): VoidHandler {
    return async function (req: IncomingMessage, res: ServerResponse) {
      const stream = createReadStream(filePath);

      stream.on('open', () => {
        res.setHeader('Content-Type', config.mimeTypes.BIN);
        stream.pipe(res);
      });
      stream.on('end', () => {
        res.statusCode = config.httpStatusCodes.OK;
        res.end();
      });
      stream.on('error', () => {
        res.statusCode = config.httpStatusCodes.INTERNAL_SERVER_ERROR;
        res.end();
      });
    } as VoidHandler;
  }

  public fileHandler(filePath: string, contentTypeValue: string): VoidHandler {
    return async function (req: IncomingMessage, res: ServerResponse) {
      const fileBuffer = await fs.readFile(filePath);

      res.setHeader('Content-Type', contentTypeValue);
      res.write(fileBuffer);
      res.end();
    } as VoidHandler;
  }
}

export const staticService = new StaticService();

import { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs/promises';
import path from 'path';
import { config } from '../configs/config';
import { responseService } from '../response/response_service';
import { Gallery } from './gallery_interface';
import { tokenService } from '../token/token_service';

class GalleryService {
  public async findAll(req: IncomingMessage, res: ServerResponse, url: URL) {
    const token = req.headers.authorization || '';
    const isValid = tokenService.validateToken(token);

    if (!isValid) {
      return responseService.unauthorized(res);
    }

    const limit = config.DEFAULT_PICTURE_LIMIT;
    const page = Number(url.searchParams.get('page')) || 1;

    const picturesPath = path.resolve(__dirname, '..', '..', 'static', 'pictures');
    const allPictures = await fs.readdir(picturesPath);

    const totalPages = Math.ceil(allPictures.length / limit);

    if (page > totalPages || page < 0) {
      return responseService.badRequest(res, totalPages);
    }

    const offset = page === 1 ? page : (page - 1) * limit;
    const start = page === 1 ? 0 : offset;
    const end = start + limit;

    const requiredPictures = allPictures.slice(start, end).map((picture) => {
      return `${config.env.PROTOCOL}://${config.env.DOMAIN}:${config.env.PORT}/${picture}`;
    });

    const galleryObjects: Gallery = { objects: requiredPictures, page, total: totalPages };

    responseService.galleryObjects<Gallery>(res, galleryObjects);
  }
}

export const galleryService = new GalleryService();

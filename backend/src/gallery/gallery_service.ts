import { IncomingMessage, ServerResponse } from 'http';

class GalleryService {
  findAll(req: IncomingMessage, res: ServerResponse, url: URL) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('objects:string[], page:string');
  }
}

export const galleryService = new GalleryService();

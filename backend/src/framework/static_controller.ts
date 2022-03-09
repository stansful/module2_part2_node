import { Router } from './router';
import path from 'path';
import fs from 'fs';
import { staticService } from './static_service';
import { config } from '../configs/config';

const staticRouter = new Router();

const staticConfig = {
  path: {
    pictures: path.resolve(__dirname, '..', '..', 'static', 'pictures'),
    css: path.resolve(__dirname, '..', '..', 'static', 'frontend', 'css'),
    js: path.resolve(__dirname, '..', '..', 'static', 'frontend', 'js'),
    frontend: path.resolve(__dirname, '..', '..', 'static', 'frontend'),
  },
  files: {
    pictures: fs.readdirSync(path.resolve(__dirname, '..', '..', 'static', 'pictures')),
    css: fs.readdirSync(path.resolve(__dirname, '..', '..', 'static', 'frontend', 'css')),
    js: fs.readdirSync(path.resolve(__dirname, '..', '..', 'static', 'frontend', 'js')),
    frontend: fs.readdirSync(path.resolve(__dirname, '..', '..', 'static', 'frontend')),
  },
};

staticService.addStaticRoutes(
  staticConfig.files.pictures,
  staticConfig.path.pictures,
  staticRouter,
  staticService.streamHandler,
  config.mimeTypes.JPEG,
);
staticService.addStaticRoutes(
  staticConfig.files.css,
  staticConfig.path.css,
  staticRouter,
  staticService.fileHandler,
  config.mimeTypes.CSS,
  '/css',
);
staticService.addStaticRoutes(
  staticConfig.files.js,
  staticConfig.path.js,
  staticRouter,
  staticService.fileHandler,
  config.mimeTypes.JS,
  '/js',
);
staticService.addStaticRoutes(
  staticConfig.files.frontend.filter((file) => file !== 'js' && file !== 'css'),
  staticConfig.path.frontend,
  staticRouter,
  staticService.fileHandler,
  config.mimeTypes.HTML,
);

export { staticRouter };

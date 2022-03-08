import { Router } from './router';
import path from 'path';
import fs from 'fs';

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

export { staticRouter };

import 'express';

declare module 'express' {
  interface Request {
    file?: Express.Multer.File;
    files?: Express.Multer.File[];
  }
}
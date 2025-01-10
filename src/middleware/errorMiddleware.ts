import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

interface ErrorResponse {
  status: number;
  message: string;
}

// Centralized error handler
const errorMiddleware = (
  err: Error & Partial<ErrorResponse>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`Error: ${message} - Status: ${status} - URL: ${req.url}`);

  res.status(status).json({
    error: {
      message,
      status,
    },
  });
};

export default errorMiddleware;

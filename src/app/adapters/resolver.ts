import {
  Handler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import { AppError } from '../erros/AppError';

export const resolver = (handler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(handler(req, res, next)).catch((error) => {
      next(error);
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }

      return res.status(500).json({
        status: 'error',
        message: error.message,
      });
    });
  };
};

import { Response, Request, NextFunction } from 'express';

import { ResponseError } from '../../core';

export function responseErrorHandler(error: ResponseError | Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ResponseError) {
    return res
      .status(error.output.statusCode || 500)
      .send({ error: { message: error.message } });
  }
  next(error);
}

import { Response, Request, NextFunction } from 'express';

import { ResponseError } from '../../core';

export function responseErrorHandler(error: ResponseError | Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ResponseError) {
    const { data, message } = error;

    res
      .status(error.output.statusCode || 500)
      .send({
        message,
        data,
      });
  } else {
    next(error);
  }
}

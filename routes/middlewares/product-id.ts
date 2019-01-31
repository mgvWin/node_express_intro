import { Response, Request, NextFunction } from 'express';

import { ResponseError } from '../../core';

export function productId(req: Request, res: Response, next: NextFunction, productId: string) {
  const id = parseInt(productId, 10);

  if (Number.isNaN(id) || id === 0) {
    next(new ResponseError(`Product id=${productId} is not valid value`, { statusCode: 404 }));
  } else {
    next();
  }
}

import { Response, Request, NextFunction } from 'express';

import { ResponseError } from '../../core';
import { Jwt } from '../../utils';
import { JWT_VERIFY_OPTIONS, APP_CONFIG } from '../../configs';

const { JWT: { PUBLIC_KEY } } = APP_CONFIG;

export async function jwtValidate(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenHeaderData: string = req.headers['authorization'] || '';
    if (!tokenHeaderData.startsWith('Bearer ')) {
      throw new ResponseError('No token probider', { statusCode: 404 });
    }

    const token = tokenHeaderData.slice(7, tokenHeaderData.length);
    if (!token) {
      throw new ResponseError('Auth token is not supplied', { statusCode: 404 });
    }

    const decodedToken = Jwt.verify(token, PUBLIC_KEY, JWT_VERIFY_OPTIONS);
    if (!decodedToken) {
      throw new ResponseError('Token isn\'t valid', { statusCode: 404 });
    }

    req['token'] = decodedToken;
    next();
  } catch (err) {
    next(err);
  }
}

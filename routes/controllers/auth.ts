import { Response, Request, NextFunction } from 'express';

import { UserService } from '../../services';
import { ResponseError } from '../../core';

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email = '', password = '' } = req.body;
      const user = await UserService.verify(email, password);

      if (!user) {
        throw new ResponseError('Bad request', { statusCode: 404 });
      }

      res.json({
        data: { ...user },
      });
    } catch (err) {
      next(err);
    }
  }
}

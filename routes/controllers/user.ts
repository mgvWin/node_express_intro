import { Response, Request, NextFunction } from 'express';

import { UserService } from '../../services';

export class UserController {
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await UserService.findAll());
    } catch (err) {
      next(err);
    }
  }
}

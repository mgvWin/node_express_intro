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

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      await UserService.remove(+req.params.userId);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

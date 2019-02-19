import { Response, Request, NextFunction } from 'express';
import { Profile as FacebookProfile } from 'passport-facebook';
import { Profile as TwitterProfile } from 'passport-twitter';
import { Profile as GoogleProfile } from 'passport-google-oauth';

import { UserService, AuthService } from '../../services';
import { ResponseError } from '../../core';

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email = '', password = '' } = req.body;
      const user = await UserService.validate(email, password);

      if (!user) {
        throw new ResponseError('Bad username/password combination', { statusCode: 404 });
      }

      const { token } = await AuthService.upsertUserToken(user.id);
      res.json({
        token,
        data: {
          user: { ...user },
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static verifyProfile(
    accessToken: string,
    refreshToken: string,
    profile: FacebookProfile | TwitterProfile | GoogleProfile,
    done: (error: any, user?: any, info?: any) => void,
  ): void {
    // TODO: Implement verify login logic
  }
}

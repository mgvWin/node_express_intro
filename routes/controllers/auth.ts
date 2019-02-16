import { Response, Request, NextFunction } from 'express';
import { Profile as  FacebookProfile } from 'passport-facebook';
import { Profile as TwitterProfile } from 'passport-twitter';
import { Profile as GoogleProfile } from 'passport-google-oauth';

import { UserService } from '../../services';
import { ResponseError } from '../../core';
import { Jwt, Mapper } from '../../utils';
import { JWT_SIGN_OPTIONS, APP_CONFIG } from '../../configs';

const { JWT: { PRIVATE_KEY } } = APP_CONFIG;

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email = '', password = '' } = req.body;
      const user = await UserService.verify(email, password);

      if (!user) {
        throw new ResponseError('Bad username/password combination', { statusCode: 404 });
      }

      const token = await Jwt.sign({ id: user.id }, PRIVATE_KEY, JWT_SIGN_OPTIONS);
      res.json({
        token,
        data: {
          user: { ...Mapper.omit(user, ['password']) },
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static verifyFacebookProfile(
    accessToken: string,
    refreshToken: string,
    profile: FacebookProfile,
    done: (error: any, user?: any, info?: any) => void,
  ): void {
    // TODO: Implement facebook login logic
  }

  static verifyTwitterProfile(
    accessToken: string,
    refreshToken: string,
    profile: TwitterProfile,
    done: (error: any, user?: any, info?: any) => void,
  ): void {
    // TODO: Implement twitter login logic
  }

  static verifyGoogleProfile(
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
    done: (error: any, user?: any, info?: any) => void,
  ): void {
    // TODO: Implement google login logic
  }
}

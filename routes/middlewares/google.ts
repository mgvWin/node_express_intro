import * as passport from 'passport';
import { OAuth2Strategy as GoogleStrategy, Profile as GoogleProfile } from 'passport-google-oauth';
import { APP_CONFIG } from '../../configs';

const { GOOGLE_OAUTH: { CLIENT_ID, CLIENT_SECRET } } = APP_CONFIG;

class GoogleLoginStrategy {
  private starategy: passport.PassportStatic;

  public use(callbackURL, verifyFunction): void {
    if (this.starategy) {
      return;
    }

    this.enableStrategy(callbackURL, verifyFunction);
  }

  public authenticate(options?: passport.AuthenticateOptions) {
    return passport.authenticate('google', options);
  }

  private enableStrategy(
      callbackURL,
      verifyFunction: (
        accessToken: string,
        refreshToken: string,
        profile: GoogleProfile,
        done: (error: any, user?: any) => void,
      ) => void,
    ): void {
    this.starategy = passport.use(new GoogleStrategy(
      {
        callbackURL,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      },
      verifyFunction,
    ));
  }
}

export const googleLoginStrategy = new GoogleLoginStrategy();

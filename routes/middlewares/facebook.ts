import * as passport from 'passport';
import { Strategy as FacebookStrategy, VerifyFunction } from 'passport-facebook';
import { APP_CONFIG } from '../../configs';

const { FACEBOOK: { APP_ID, APP_SECRET } } = APP_CONFIG;

class FacebookLoginStrategy {
  private starategy: passport.PassportStatic;

  public use(callbackURL, verifyFunction): void {
    if (this.starategy) {
      return;
    }

    this.enableStrategy(callbackURL, verifyFunction);
  }

  public authenticate(options?: passport.AuthenticateOptions) {
    return passport.authenticate('facebook', options);
  }

  private enableStrategy(callbackURL, verifyFunction: VerifyFunction): void {
    this.starategy = passport.use(new FacebookStrategy(
      {
        callbackURL,
        clientID: APP_ID,
        clientSecret: APP_SECRET,
      },
      verifyFunction,
    ));
  }
}

export const facebookLoginStrategy = new FacebookLoginStrategy();

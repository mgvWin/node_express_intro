import * as passport from 'passport';
import { Strategy as TwitterStrategy, Profile as TwitterProfile } from 'passport-twitter';
import { APP_CONFIG } from '../../configs';

const { TWITTER: { CONSUMER_KEY, CONSUMER_SECRET } } = APP_CONFIG;

class TwitterLoginStrategy {
  private starategy: passport.PassportStatic;

  public use(callbackURL, verifyFunction): void {
    if (this.starategy) {
      return;
    }

    this.enableStrategy(callbackURL, verifyFunction);
  }

  public authenticate(options?: passport.AuthenticateOptions) {
    return passport.authenticate('twitter', options);
  }

  private enableStrategy(
    callbackURL: string,
    verifyFunction: (
      accessToken: string,
      refreshToken: string,
      profile: TwitterProfile,
      done: (error: any, user?: any) => void,
    ) => void,
  ): void {
    this.starategy = passport.use(new TwitterStrategy(
      {
        callbackURL,
        consumerKey: CONSUMER_KEY,
        consumerSecret: CONSUMER_SECRET,
      },
      verifyFunction,
    ));
  }
}

export const twitterLoginStrategy = new TwitterLoginStrategy();

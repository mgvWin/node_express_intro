import * as passport from 'passport';
import { Strategy as FacebookStrategy, VerifyFunction as  FacebookVerifyFunction } from 'passport-facebook';
import { Strategy as TwitterStrategy, Profile as TwitterProfile } from 'passport-twitter';
import { OAuth2Strategy as GoogleStrategy, Profile as GoogleProfile } from 'passport-google-oauth';

import { APP_CONFIG } from '../configs';

export class AuthService {
  static enableFacebookLoginStrategy(callbackURL: string, verifyFunction: FacebookVerifyFunction): void {
    const { FACEBOOK: { APP_ID, APP_SECRET } } = APP_CONFIG;

    passport.use(new FacebookStrategy(
      {
        callbackURL,
        clientID: APP_ID,
        clientSecret: APP_SECRET,
      },
      verifyFunction,
    ));
  }

  static enableTwitterLoginStrategy(
    callbackURL: string,
    verifyFunction: (
      accessToken: string,
      refreshToken: string,
      profile: TwitterProfile,
      done: (error: any, user?: any) => void,
    ) => void,
  ): void {
    const { TWITTER: { CONSUMER_KEY, CONSUMER_SECRET } } = APP_CONFIG;

    passport.use(new TwitterStrategy(
      {
        callbackURL,
        consumerKey: CONSUMER_KEY,
        consumerSecret: CONSUMER_SECRET,
      },
      verifyFunction,
    ));
  }

  static enableGoogleLoginStrategy(
    callbackURL: string,
    verifyFunction: (
      accessToken: string,
      refreshToken: string,
      profile: GoogleProfile,
      done: (error: any, user?: any) => void,
    ) => void,
  ): void {
    const { GOOGLE_OAUTH: { CLIENT_ID, CLIENT_SECRET } } = APP_CONFIG;

    passport.use(new GoogleStrategy(
      {
        callbackURL,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      },
      verifyFunction,
    ));
  }
}

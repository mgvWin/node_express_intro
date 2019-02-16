import * as passport from 'passport';

import { AuthController } from './../controllers';
import { APP_CONFIG } from './../../configs';
import { AuthService } from './../../services';

const { API_BASE } = APP_CONFIG;

// Enable passport.js authentication strategies
AuthService.enableFacebookLoginStrategy(`${API_BASE}/auth/facebook/callback`, AuthController.verifyFacebookProfile);
AuthService.enableTwitterLoginStrategy(`${API_BASE}/auth/twitter/callback`, AuthController.verifyTwitterProfile);
AuthService.enableGoogleLoginStrategy(`${API_BASE}/auth/google/callback`, AuthController.verifyGoogleProfile);

export const facebookLogin = passport.authenticate('facebook');
export const facebookLoginCallback = passport.authenticate('facebook', { failureRedirect: '/' });

export const twitterLogin = passport.authenticate('twitter');
export const twitterLoginCallback = passport.authenticate('twitter', { failureRedirect: '/' });

export const googleLogin = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile'] });
export const googleLoginCallback = passport.authenticate('google', { failureRedirect: '/' });

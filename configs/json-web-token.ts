import { SignOptions, VerifyOptions } from 'jsonwebtoken';

export const JWT_SIGN_OPTIONS: SignOptions = {
  expiresIn:  '12h',
  algorithm:  'RS256',
};

export const JWT_VERIFY_OPTIONS: VerifyOptions = {
  maxAge:  '12h',
  algorithms:  ['RS256'],
};

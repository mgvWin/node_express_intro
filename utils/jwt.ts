import * as jsonwebtoken from 'jsonwebtoken';

async function sign(payload: string, secret: string, options?: jsonwebtoken.SignOptions): Promise<string> {
  return jsonwebtoken.sign(payload, secret, options);
}

async function verify(token: string, secret: string, options?: jsonwebtoken.VerifyOptions) {
  return jsonwebtoken.verify(token, secret, options);
}

export const jwt = {
  sign,
  verify,
};

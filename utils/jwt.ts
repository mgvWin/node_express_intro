import { sign, verify, SignOptions, VerifyOptions } from 'jsonwebtoken';

export class Jwt {
  static async sign(payload: object, secret: string, options?: SignOptions): Promise<string> {
    return sign(payload, secret, options);
  }

  static async  verify(token: string, secret: string, options?: VerifyOptions) {
    return verify(token, secret, options);
  }
}

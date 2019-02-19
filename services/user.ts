import { Omit, UserAttributes } from '../entities';
import { db } from '../db';
import { Crypto } from '../utils';
import { APP_CONFIG } from '../configs';

export class UserService {
  static async findAll(): Promise<Omit<UserAttributes, 'password'>[]> {
    return db.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
  }

  static async validate(email: string, password: string): Promise<Omit<UserAttributes, 'password'>> {
    const user = await db.User.findOne({
      where: { email },
      attributes: {
        exclude: ['password'],
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordMatch = Crypto.compareSha512(password, user.password, APP_CONFIG.PASSWORD_SALT);

    return isPasswordMatch ? user : null;
  }
}

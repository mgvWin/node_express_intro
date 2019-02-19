import { JWT_SIGN_OPTIONS, APP_CONFIG } from '../configs';
import { AuthTokenAttributes } from '../entities';
import { db } from '../db';
import { Jwt } from '../utils';

const { JWT: { PRIVATE_KEY } } = APP_CONFIG;

export class AuthService {
  static async upsertUserToken(userId: number): Promise<AuthTokenAttributes> {
    const existingToken = await db.AuthToken.findOne({ where: { userId } });
    const token = await Jwt.sign({ id: userId }, PRIVATE_KEY, JWT_SIGN_OPTIONS);

    if (!existingToken) {
      return db.AuthToken.create({ userId, token });
    }

    return existingToken.update({ token });
  }
}

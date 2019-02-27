import { Omit, UserAttributes } from '../entities';
import { db } from '../db';

export class UserService {
  static async findAll(): Promise<Omit<UserAttributes, 'password'>[]> {
    return db.User.find();
  }

  static async remove(userId: number): Promise<UserAttributes> {
    return db.User.findOneAndRemove(userId);
  }

  static async validate(email: string, password: string): Promise<Omit<UserAttributes, 'password'>> {
    const user = await db.User.findOne({ email });

    if (!user) {
      return null;
    }
    return user.comparePassword(password) ? user : null;
  }
}

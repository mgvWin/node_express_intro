import { User } from '../entities';
import { users } from '../db';
import { crypto } from '../utils';
import { APP_CONFIG } from '../core';

export class UserService {
  static async findAll(): Promise<User[]> {
    return users;
  }

  static async verify(email: string, password: string): Promise<User> {
    const users = await UserService.findAll();

    const user = users.find(user => user.email === email);
    if (!user) {
      return null;
    }

    const isPasswordMatch = user.password === crypto.encode(password, APP_CONFIG.PASSWORD_SALT);

    return isPasswordMatch ? user : null;
  }
}

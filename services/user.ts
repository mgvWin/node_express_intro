import { User } from '../entities';
import { users } from '../db';

export class UserService {
  static async findAll(): Promise<User[]> {
    return users;
  }
}

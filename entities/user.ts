import * as Sequelize from 'sequelize';

// fields of a single database row
export interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Single database row
export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

// Database table
export interface UserModel extends Sequelize.Model<UserInstance, UserAttributes> {}

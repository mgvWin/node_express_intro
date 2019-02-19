import * as Sequelize from 'sequelize';

// Fields of a single database row
export interface AuthTokenAttributes {
  id?: number;
  userId: number;
  token: string;
}

// Single database row
export interface AuthTokenInstance extends Sequelize.Instance<AuthTokenAttributes>, AuthTokenAttributes {}

// Database table
export interface AuthTokenModel extends Sequelize.Model<AuthTokenInstance, AuthTokenAttributes> {}

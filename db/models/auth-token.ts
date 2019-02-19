import * as Sequelize from 'sequelize';

import { AuthTokenInstance, AuthTokenAttributes, AuthTokenModel } from '../../entities';

// tslint:disable-next-line:variable-name
export const AuthTokenModelAttributes: Sequelize.DefineModelAttributes<AuthTokenAttributes> = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id',
  },
  token: {
    type: Sequelize.STRING,
  },
};

// tslint:disable-next-line:variable-name
export const AuthTokenFactory = (sequelize: Sequelize.Sequelize): AuthTokenModel => {
  return sequelize.define<AuthTokenInstance, AuthTokenAttributes>('auth_token', AuthTokenModelAttributes);
};

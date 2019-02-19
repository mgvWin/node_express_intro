import * as Sequelize from 'sequelize';

import { Crypto } from '../../utils';
import { APP_CONFIG } from '../../configs';
import { UserModel, UserInstance, UserAttributes } from '../../entities';

// tslint:disable-next-line:variable-name
export const UserModelAttributes: Sequelize.DefineModelAttributes<UserAttributes> = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
};

// tslint:disable-next-line:variable-name
export const  UserFactory = (sequelize: Sequelize.Sequelize): UserModel => {
  return sequelize.define<UserInstance, UserAttributes>(
    'user',
    UserModelAttributes,
    {
      setterMethods: {
        // tslint:disable-next-line:object-literal-shorthand
        password: function (password: string): void {
          this.setDataValue('password', Crypto.sha512(password, APP_CONFIG.PASSWORD_SALT));
        },
      },
    },
  );
};

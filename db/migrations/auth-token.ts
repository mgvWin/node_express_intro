import { QueryInterface } from 'sequelize';
import { AuthTokenModelAttributes } from '../models';

export = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('auth_token', AuthTokenModelAttributes),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('auth_token'),
};

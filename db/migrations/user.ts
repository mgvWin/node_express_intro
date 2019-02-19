import { QueryInterface } from 'sequelize';
import { UserModelAttributes } from '../models';

export = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('user', UserModelAttributes),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('user'),
};

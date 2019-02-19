import { QueryInterface } from 'sequelize';

import { ProductModelAttributes } from '../models';

export = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('product', ProductModelAttributes),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('product'),
};

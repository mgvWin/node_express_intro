import { QueryInterface } from 'sequelize';
import { ProductReviewModelAttributes } from '../models';

export = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('product_review', ProductReviewModelAttributes),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('product_review'),
};

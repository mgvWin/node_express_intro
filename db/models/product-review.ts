import * as Sequelize from 'sequelize';

import { ProductReviewInstance, ProductReviewAttributes, ProductReviewModel } from '../../entities';

// tslint:disable-next-line:variable-name
export const ProductReviewModelAttributes: Sequelize.DefineModelAttributes<ProductReviewAttributes> = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: Sequelize.INTEGER,
    field: 'product_id',
  },
  review: {
    type: Sequelize.TEXT,
  },
};

// tslint:disable-next-line:variable-name
export const ProductReviewFactory = (sequelize: Sequelize.Sequelize): ProductReviewModel => {
  return sequelize.define<ProductReviewInstance, ProductReviewAttributes>('product_review', ProductReviewModelAttributes);
};

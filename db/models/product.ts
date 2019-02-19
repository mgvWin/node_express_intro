import * as Sequelize from 'sequelize';

import { ProductInstance, ProductAttributes, ProductModel } from '../../entities';

// tslint:disable-next-line:variable-name
export const ProductModelAttributes: Sequelize.DefineModelAttributes<ProductAttributes> = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT('50'),
  },
  brand: {
    type: Sequelize.TEXT('50'),
  },
  price: {
    type: Sequelize.FLOAT,
  },
};

// tslint:disable-next-line:variable-name
export const ProductFactory = (sequelize: Sequelize.Sequelize): ProductModel => {
  return sequelize.define<ProductInstance, ProductAttributes>('product', ProductModelAttributes);
};

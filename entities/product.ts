import * as Sequelize from 'sequelize';

/**
 *  ------------------------ Product ---------------------------
 */
// Fields of a single database row
export interface ProductAttributes {
  id?: number;
  name: string;
  brand: string;
  price: number;
}

// Single database row
export interface ProductInstance extends Sequelize.Instance<ProductAttributes>, ProductAttributes {}

// Database table
export interface ProductModel extends Sequelize.Model<ProductInstance, ProductAttributes> {}

/**
 *  --------------- Product review (comments) ------------------
 */
// Fields of a single database row
export interface ProductReviewAttributes {
  id?: number;
  productId: number;
  review: string;
}

// Single database row
export interface ProductReviewInstance extends Sequelize.Instance<ProductReviewAttributes>, ProductReviewAttributes {}

// Database table
export interface ProductReviewModel extends Sequelize.Model<ProductReviewInstance, ProductReviewAttributes> {}

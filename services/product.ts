import { db } from '../db';
import { ProductAttributes, ProductReviewAttributes, Omit } from '../entities';

export class ProductService {
  static async findAll(): Promise<ProductAttributes[]> {
    return db.Product.findAll();
  }

  static async findById(productId: number): Promise<ProductAttributes> {
    return db.Product.findById(productId);
  }

  static async getReviews(productId: number): Promise<ProductReviewAttributes[]> {
    return db.ProductReview.findAll({ where: { productId } });
  }

  static async create(product: Omit<ProductAttributes, 'id'>): Promise<ProductAttributes> {
    return db.Product.create(product);
  }
}

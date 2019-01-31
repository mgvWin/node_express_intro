import { Product } from '../entities';
import { products } from '../db';

export class ProductService {
  static async findAll(): Promise<Product[]> {
    return [...products];
  }

  static async findById(productId: number): Promise<Product> {
    return products.find(product => product.id === productId);
  }

  static async getProductReviews(productId: number): Promise<string[]> {
    const product = await ProductService.findById(productId);
    return product ? product.reviews : null;
  }

  static async create(product: Product): Promise<Product> {
    const productIds = products.map(product => product.id);
    const newProductId = Math.max.apply(null, productIds) + 1;
    products.push({ ...product, id: newProductId });

    return ProductService.findById(newProductId);
  }
}

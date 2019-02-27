import { Response, Request, NextFunction } from 'express';

import { ProductService } from '../../services/product';
import { ResponseError } from '../../core';

export class ProductController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await ProductService.findAll());
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductService.findById(+req.params.productId);

      if (!product) {
        throw new ResponseError("Product doesn't found", { statusCode: 404 });
      }

      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  static async getProductReviews(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await ProductService.getReviews(+req.params.productId));
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductService.create(req.body);
      res.status(204).json(product);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductService.remove(+req.params.productId);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

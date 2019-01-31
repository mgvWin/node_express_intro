import { Response, Request, NextFunction } from 'express';

import { ProductService } from '../../services/product';
import { ResponseError } from '../../core';

export class ProductController {
  static async parse(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await ProductService.findAll());
    } catch (err) {
      next(err);
    }
  }

  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await ProductService.findAll());
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductService.findById(+req.params.id);

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
      const product = await ProductService.findById(+req.params.id);

      if (!product) {
        throw new ResponseError("Product doesn't found", { statusCode: 404 });
      }

      res.json(product.reviews || []);
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
}

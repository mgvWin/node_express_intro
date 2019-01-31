import { Router } from 'express';

import { UserController, ProductController } from './controllers';
import { productId, responseErrorHandler } from './middlewares';

const routes: Router = Router();

routes
  /**
   * Products
   */
  .param('productId', productId)
  .get('/products', ProductController.getAllProducts)
  .post('/products', ProductController.addProduct)
  .get('/products/:productId', ProductController.getProductById)
  .get('/products/:productId/reviews', ProductController.getProductReviews)
  /**
   * Users
   */
  .get('/users', UserController.getAllUsers)
  /**
   * Error handler
   */
  .use(responseErrorHandler);

export default routes;

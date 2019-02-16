import { Router } from 'express';
import * as passport from 'passport';

import { UserController, ProductController, AuthController } from './controllers';
import {
  productIdValidate,
  responseErrorHandler,
  jwtValidate,
  facebookLogin,
  facebookLoginCallback,
  twitterLogin,
  twitterLoginCallback,
  googleLogin,
  googleLoginCallback,
} from './middlewares';

const routes: Router = Router();

routes
  /**
   * Auth
   */
  .post('/auth', AuthController.login)
  .get('/auth/facebook', facebookLogin)
  .get('/auth/facebook/callback', facebookLoginCallback, (req, res) => {
    // Successful authentication.
  })
  .get('/auth/twitter', twitterLogin)
  .get('/auth/twitter/callback', twitterLoginCallback, (req, res) => {
    // Successful authentication.
  })
  .get('/auth/google', googleLogin)
  .get('/auth/google/callback', googleLoginCallback, (req, res) => {
    // Successful authentication.
  })
  /**
   * Products
   */
  .param('productId', productIdValidate)
  .get('/products', jwtValidate, ProductController.getAllProducts)
  .post('/products', jwtValidate, ProductController.addProduct)
  .get('/products/:productId', jwtValidate, ProductController.getProductById)
  .get('/products/:productId/reviews', jwtValidate, ProductController.getProductReviews)
  /**
   * Users
   */
  .get('/users', jwtValidate, UserController.getAllUsers)
  /**
   * Error handler
   */
  .use(responseErrorHandler);

export default routes;

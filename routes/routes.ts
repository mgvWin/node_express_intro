import { Router } from 'express';

import { UserController, ProductController, AuthController, CityController } from './controllers';
import {
  productIdValidate,
  responseErrorHandler,
  facebookLoginStrategy,
  twitterLoginStrategy,
  googleLoginStrategy,
  jwtValidate,
} from './middlewares';
import { APP_CONFIG } from '../configs';

const { API_BASE } = APP_CONFIG;

facebookLoginStrategy.use(`${API_BASE}/auth/facebook/callback`, AuthController.verifyProfile);
twitterLoginStrategy.use(`${API_BASE}/auth/twitter/callback`, AuthController.verifyProfile);
googleLoginStrategy.use(`${API_BASE}/auth/google/callback`, AuthController.verifyProfile);

const routes: Router = Router();

routes
  /**
   * Auth
   */
  .post('/auth', AuthController.login)
  .get('/auth/facebook', facebookLoginStrategy.authenticate())
  .get('/auth/facebook/callback', facebookLoginStrategy.authenticate({ failureRedirect: '/' }), (req, res) => {
    // Successful authentication.
  })
  .get('/auth/twitter', facebookLoginStrategy.authenticate())
  .get('/auth/twitter/callback', facebookLoginStrategy.authenticate({ failureRedirect: '/' }), (req, res) => {
    // Successful authentication.
  })
  .get('/auth/google', googleLoginStrategy.authenticate())
  .get(
    '/auth/google/callback',
    googleLoginStrategy.authenticate({ scope: ['https://www.googleapis.com/auth/userinfo.profile'] }),
    (req, res) => {
      // Successful authentication.
    },
  )
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
  .get('/cities', jwtValidate, CityController.getAllCities)
  .post('/cities', jwtValidate, CityController.addCity)
  .put('/cities/:cityId', jwtValidate, CityController.upsertCity)
  .delete('/cities/:cityId', jwtValidate, CityController.deleteCity)
  /**
   * Users
   */
  .get('/users', jwtValidate, UserController.getAllUsers)
  .delete('/users/:userId', jwtValidate, UserController.deleteUser)
  /**
   * Error handler
   */
  .use(responseErrorHandler);

export default routes;

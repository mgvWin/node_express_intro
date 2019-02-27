import * as Sequelize from 'sequelize';
import { APP_CONFIG } from '../configs';
import { UserFactory, ProductFactory, ProductReviewFactory, AuthTokenFactory, CityFactory } from './models';

const {
  DB: {
    PSQL: {
      PASSWORD,
      HOST,
      USER,
      DB_NAME,
      PORT,
    },
  },
} = APP_CONFIG;

export const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.debug('Connection has been established successfully.');
  })
  .catch((err) => {
    console.debug('Unable to connect to the database:', err);
  });

/* tslint:disable:variable-name */
const User = UserFactory(sequelize);
const Product = ProductFactory(sequelize);
const ProductReview = ProductReviewFactory(sequelize);
const AuthToken = AuthTokenFactory(sequelize);
const City = CityFactory();

export const db = {
  User,
  Product,
  ProductReview,
  AuthToken,
  City,
};

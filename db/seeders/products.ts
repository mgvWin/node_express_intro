export = {
  up: queryInterface => queryInterface.bulkInsert(
    'product',
    [
      {
        name: 'T-shrt',
        brand: 'Adidas',
        price: 123.23,
      }, {
        name: 'Sneakers',
        brand: 'Nike',
        price: 68.54,
      },
    ],
  ),
  down: queryInterface => queryInterface.bulkDelete('product', null, {}),
};

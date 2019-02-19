export = {
  up: queryInterface => queryInterface.bulkInsert(
    'user',
    [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'admin@admin.com',
      // tslint:disable-next-line:max-line-length
      password: 'ck2jDDd/KqlKpTZRlz7aNa0IVSiyMXswRDlUboi5h5rzyvpXBmVGkOGAJl66lUNID4TiuamMCZQ2vdANk05euLLoyy/S6EmF6LzBPkjPUOQKApVKapn97z3b16UqvVGSXP5RKSyIF+kHde24F3O07yZFkbxaMvPjGCatX6CdWDk=',
    }],
  ),
  down: queryInterface => queryInterface.bulkDelete('user', null, {}),
};

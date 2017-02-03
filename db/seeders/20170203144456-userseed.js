'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { username: 'ab', password: '123', email: 'email', firstName: 'joe', lastName: 'smith', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { username: 'cd', password: '123', email: 'email', firstName: 'ben', lastName: 'jones', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { username: 'ef', password: '123', email: 'email', firstName: 'chloe', lastName: 'alvarez', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { username: 'gh', password: '123', email: 'email', firstName: 'kelly', lastName: 'link', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { username: 'ij',  password: '123', email: 'email', firstName: 'virginia', lastName: 'hughes', createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};

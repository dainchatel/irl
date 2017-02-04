'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { username: 'ab', password: '123', email: 'email', firstName: 'joe', lastName: 'smith', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'Male', videoURL: 'https://www.youtube.com/watch?v=7I0fwedAKjs' },
      { username: 'cd', password: '123', email: 'email', firstName: 'ben', lastName: 'jones', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'Female', videoURL: 'https://www.youtube.com/watch?v=7I0fwedAKjs' },
      { username: 'ef', password: '123', email: 'email', firstName: 'chloe', lastName: 'alvarez', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'Female', videoURL: 'https://www.youtube.com/watch?v=7I0fwedAKjs' },
      { username: 'gh', password: '123', email: 'email', firstName: 'kelly', lastName: 'link', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'Male', videoURL: 'https://www.youtube.com/watch?v=7I0fwedAKjs' },
      { username: 'ij',  password: '123', email: 'email', firstName: 'virginia', lastName: 'hughes', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'NB', videoURL: 'https://www.youtube.com/watch?v=7I0fwedAKjs' }
    ], {});
  }
};

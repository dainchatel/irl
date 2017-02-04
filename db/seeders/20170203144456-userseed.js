https://www.youtube.com/embed/7I0fwedAKjs'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { username: 'ab', password: '123', email: 'email', firstName: 'joe', lastName: 'smith', createdAt: '2017-01-31', updatedAt: '2017-01-31', videoURL: 'https://www.youtube.com/embed/7I0fwedAKjs' },
      { username: 'cd', password: '123', email: 'email', firstName: 'ben', lastName: 'jones', createdAt: '2017-01-31', updatedAt: '2017-01-31', videoURL: 'https://www.youtube.com/embed/7I0fwedAKjs' },
      { username: 'ef', password: '123', email: 'email', firstName: 'chloe', lastName: 'alvarez', createdAt: '2017-01-31', updatedAt: '2017-01-31', videoURL: 'https://www.youtube.com/embed/7I0fwedAKjs' },
      { username: 'gh', password: '123', email: 'email', firstName: 'kelly', lastName: 'link', createdAt: '2017-01-31', updatedAt: '2017-01-31', videoURL: 'https://www.youtube.com/embed/7I0fwedAKjs' },
      { username: 'ij',  password: '123', email: 'email', firstName: 'virginia', lastName: 'hughes', createdAt: '2017-01-31', updatedAt: '2017-01-31', videoURL: 'https://www.youtube.com/embed/7I0fwedAKjs' }
    ], {});
  }
};

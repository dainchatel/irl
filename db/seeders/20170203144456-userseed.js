'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [

      { username: 'ab', password: '123', email: 'email', firstName: 'joe', lastName: 'smith', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'm', videoURL: 'https://www.youtube.com/embed/V-eIGWXpmX0' },
      { username: 'cd', password: '123', email: 'email', firstName: 'ben', lastName: 'jones', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'f', videoURL: 'https://www.youtube.com/embed/V-eIGWXpmX0' },
      { username: 'ef', password: '123', email: 'email', firstName: 'chloe', lastName: 'alvarez', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'f', videoURL: 'https://www.youtube.com/embed/V-eIGWXpmX0' },
      { username: 'gh', password: '123', email: 'email', firstName: 'kelly', lastName: 'link', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'f', videoURL: 'https://www.youtube.com/embed/V-eIGWXpmX0' },
      { username: 'ij',  password: '123', email: 'email', firstName: 'virginia', lastName: 'hughes', createdAt: '2017-01-31', updatedAt: '2017-01-31', age: '20', zipcode: '10022', gender: 'nb', videoURL: 'https://www.youtube.com/embed/V-eIGWXpmX0' }

    ], {});
  }
};

//https://www.youtube.com/embed/7I0fwedAKjs

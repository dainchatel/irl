'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Preferences', [
      { user_id: '1', gender: 'f', distance: '10', age_min:'18', age_max: '30', createdAt: '2017-01-31', updatedAt: '2017-01-31'},
      { user_id: '2', gender: 'm', distance: '20', age_min:'18', age_max: '40', createdAt: '2017-01-31', updatedAt: '2017-01-31'},
      { user_id: '3', gender: 'nb', distance: '5', age_min:'18', age_max: '50', createdAt: '2017-01-31', updatedAt: '2017-01-31'}
    ], {});
  }
};

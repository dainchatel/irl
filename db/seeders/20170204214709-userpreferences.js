'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Preferences', [
      { user_id: '1', gender: 'f', zip: '11355', distance: '10', age_min:'18', age_max: '30', createdAt: '2017-01-31', updatedAt: '2017-01-31'},
      { user_id: '2', gender: 'm', zip: '10043', distance: '20', age_min:'18', age_max: '40', createdAt: '2017-01-31', updatedAt: '2017-01-31'},
      { user_id: '3', gender: 'nb', zip: '10019', distance: '5', age_min:'18', age_max: '50', createdAt: '2017-01-31', updatedAt: '2017-01-31'}
    ], {});
  }
};

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING(10)
      },
      zip: {
        type: Sequelize.INTEGER
      },
      distance: {
        type: Sequelize.INTEGER
      },
      age_min: {
        type: Sequelize.INTEGER
      },
      age_max: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Preferences');
  }
};

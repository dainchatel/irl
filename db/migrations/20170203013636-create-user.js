'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(32),
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING(128)
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING(20)
      },
      videoURL: {
        allowNull: true,
        type: Sequelize.STRING(250)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};

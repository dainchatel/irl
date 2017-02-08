'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING(32),
    password: DataTypes.TEXT,
    email: DataTypes.STRING(128),
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    age: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    gender: DataTypes.STRING(32),
    videoURL: DataTypes.STRING(250),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};

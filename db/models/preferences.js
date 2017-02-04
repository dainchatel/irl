'use strict';
module.exports = function(sequelize, DataTypes) {
  var Preferences = sequelize.define('Preferences', {
    user_id: DataTypes.BIGINT,
    gender: DataTypes.STRING(10),
    zip: DataTypes.BIGINT,
    distance: DataTypes.BIGINT,
    age_min: DataTypes.BIGINT,
    age_max: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Preferences;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reminder = sequelize.define('Reminder', {
    userId: DataTypes.BIGINT,
    reminder: DataTypes.STRING,
    end: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {});
  Reminder.associate = function(models) {
    // associations can be defined here
  };
  return Reminder;
};
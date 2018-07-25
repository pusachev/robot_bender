'use strict';
module.exports = (sequelize, DataTypes) => {
  var Phases = sequelize.define('Phases', {
    phase: DataTypes.STRING,
    count: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
  }, {});
  Phases.associate = function(models) {
    // associations can be defined here
  };
  return Phases;
};
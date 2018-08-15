'use strict';

module.exports = (sequelize, DataTypes) => {
  let Vehicle = sequelize.define('Vehicle', {
    model: DataTypes.STRING,
    position: DataTypes.TEXT,
    dimension: DataTypes.INTEGER,
    primaryColor: DataTypes.STRING,
    secondaryColor: DataTypes.STRING
  }, {});
  Vehicle.associate = (models) => {
    // associations can be defined here
  };

  return Vehicle;
};

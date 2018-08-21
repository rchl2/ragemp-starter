'use strict';

module.exports = (sequelize, DataTypes) => {
  let Vehicle = sequelize.define('Vehicle', {
    model: DataTypes.STRING,
    position: DataTypes.TEXT,
    dimension: DataTypes.INTEGER,
    primaryColor: DataTypes.STRING,
    secondaryColor: DataTypes.STRING
  }, {});

  // Docs about associations: http://docs.sequelizejs.com/class/lib/associations/base.js~Association.html
  Vehicle.associate = (models) => {};

  return Vehicle;
};

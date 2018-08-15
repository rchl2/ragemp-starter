'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [{
      model: 'f620',
      dimension: 0,
      primaryColor: '[176,45,132]',
      secondaryColor: '[169,95,228]'
    }], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Vehicles', null, {})
};

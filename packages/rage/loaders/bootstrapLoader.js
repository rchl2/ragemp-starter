'use strict';

const logger = require('../modules/utils/logger');

module.exports = async () => {
  try {
    const vehicleBootstrap = require('../modules/vehicles/vehicleBootstrap');
    vehicleBootstrap.boot();

    logger('loaders', `Game successfully bootstrapped!`, 'info');
  } catch (err) {
    logger('loaders', `Error while bottstraping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

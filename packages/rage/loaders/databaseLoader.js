'use strict';

const logger = require('../modules/utils/logger');

module.exports = async () => {
  try {
    require('../modules/database/database');

    logger('loaders', `Loaded successfully database config with models!`, 'info');
  } catch (err) {
    logger('loader', `Error while loading database config (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

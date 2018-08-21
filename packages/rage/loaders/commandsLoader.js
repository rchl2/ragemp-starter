'use strict';

/**
 * This is only example loader for all commands from 'modules/commands' directory.
 * For example you can expand this with Regexp and scan for files with 'command' word inside directories.
 * There is a lot of ways to do this.
 */
const fs = require('fs');
const path = require('path');
const logger = require('../modules/utils/logger');
const commandsPath = path.resolve(__dirname, '../modules/commands/');

module.exports = async () => {
  try {
    fs.readdirSync(commandsPath).forEach(file => {
      require(commandsPath + '/' + file);
    });

    logger('loaders', `Loaded all commands!`, 'info');
  } catch (err) {
    logger('loaders', `Error while loading commands (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

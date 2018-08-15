const log4js = require('log4js');

// Append logs to directory and print in console.
log4js.configure({
  appenders: {
    file: { type: 'file', layout: { type: 'basic' }, filename: `logs/rage.log` },
    console: { type: 'console' }
  },
  categories: { default: { appenders: ['file', 'console'], level: 'info' } }
});

/**
 * Get logger instance and export as function.
 * Usage: logger(moduleName, message, type).
 * Allowed types: trace, debug, info, warn, error, fatal.
 * moduleName = string, message = string.
 */
const loggerInstance = log4js.getLogger('[RAGE]');
module.exports = (moduleName, msg, type) => loggerInstance[type](`[${moduleName}] ${msg}`);

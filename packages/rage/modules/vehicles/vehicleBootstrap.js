'use strict';

const logger = require('../utils/logger');
const { loadAll } = require('../vehicles/vehicleManager');

const boot = () => loadAll(); logger('loaders', `Successfully bootstrapped vehicles!`, 'info');
exports.boot = boot;

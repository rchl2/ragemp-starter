'use strict';

const { loadAll } = require('../vehicles/vehicleManager');

const boot = () => loadAll();
exports.boot = boot;

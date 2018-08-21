'use strict';

const { create } = require('../vehicles/vehicleManager');

/**
 * This is only EXAMPLE of creating vehicle with use of manager.
 * Don't use this on production (live) server!
 * There is no validation, you need to take care of this.
 */
mp.events.addCommand('vehicle', (player, fullText, model = 'f620') => create(player, model));

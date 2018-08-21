'use strict';

const logger = require('../utils/logger');
const database = require('../database/database');
const { randomInt } = require('../utils/helpers');

function create (player, model) {
  const primaryColor = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];
  const secondaryColor = [randomInt(0, 255), randomInt(0, 255), randomInt(0, 255)];

  database.vehicle
    .create({
      model: model,
      position: JSON.stringify(player.position),
      dimension: player.dimension,
      primaryColor: JSON.stringify(primaryColor),
      secondaryColor: JSON.stringify(secondaryColor)
    })
    .then(vehicle => {
      logger('vehicle', `Saved vehicle "${vehicle.name}" (Model: ${vehicle.model}) in database.`, 'info');
      spawn(vehicle);
    });
}
exports.create = create;

function spawn (vehicle) {
  if (vehicle.position === null) { // We can't spawn vehicle on world when we dont have position.
    return logger('vehicle', `Vehicle position is null (vehicleId: ${vehicle.id})!`, 'error');
  }

  let vehiclePosition = JSON.parse(vehicle.position);
  const createdVehicle = mp.vehicles.new(mp.joaat(vehicle.model), new mp.Vector3(vehiclePosition.x, vehiclePosition.y, vehiclePosition.z),
    {
      engine: false,
      dimension: vehicle.dimension
    });

  logger('vehicle', `Created vehicle "${vehicle.model}" (GameID: ${createdVehicle.id} / ID: ${vehicle.id}) on world.`, 'info');
  configureCreated(createdVehicle, vehicle);
}

function configureCreated (createdVehicle, vehicleData) {
  try {
    let primaryColor = JSON.parse(vehicleData.primaryColor);
    let secondaryColor = JSON.parse(vehicleData.secondaryColor);

    // Docs: https://wiki.rage.mp/index.php?title=Vehicle::setColorRGB
    createdVehicle.setColorRGB(primaryColor[0], primaryColor[1], primaryColor[2], secondaryColor[0], secondaryColor[1], secondaryColor[2]);

    // For example. You can assign there whatever you want from database.
    createdVehicle.informations = { id: vehicleData.id };
  } catch (e) {
    logger('vehicle', `Error occurred when configuring vehicle "${vehicleData.name}" (ID: ${vehicleData.id} / Model: ${vehicleData.model}). (Message: ${e})`, 'error');
  }
}

const loadAll = () => {
  database.vehicle.findAll().then(vehicles => {
    for (let i = 0; i < vehicles.length; i++) {
      spawn(vehicles[i]);
    }
  });
};
exports.loadAll = loadAll;

// Lodash
var _ = require('lodash');

// Env
const dotenv = require('dotenv');
const result = dotenv.config(); // eslint-disable-line no-unused-vars

(async () => {
  await require('./loaders/databaseLoader')();
  await require('./loaders/commandsLoader.js')();
  await require('./loaders/bootstrapLoader.js')();
})();

// This not belongs here. You should create events handler or something.
// I just included this here to not freak you out when you gonna connect to the server and try type something on chat.
mp.events.add('playerChat', (player, message) => mp.players.broadcast(`${player.name}: ${message}`));

const { hideHudElements } = require('./rage/utils/helpers');

/**
 * https://wiki.rage.mp/index.php?title=Player::disableVehicleRewards
 * https://wiki.rage.mp/index.php?title=Discord::update
 */
const preparePlayerClientView = () => {
  hideHudElements([1, 3]);
  mp.game.player.disableVehicleRewards();
  mp.discord.update('RAGE', 'Boilerplate');
};

exports.preparePlayerClientView = preparePlayerClientView;

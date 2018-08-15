const chatEventsHandler = require('./rage/chat/chatEventsHandler');
const { preparePlayerClientView } = require('./rage/player/playerService');

mp.events.add('clientLaunched', () => preparePlayerClientView());
mp.events.call('clientLaunched');

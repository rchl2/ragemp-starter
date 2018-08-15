'use strict';

const globals = require('./rage/utils/globals');

mp.events.add({
  clearChat: () => clearGameChat(),
  toggleChat: value => toggleChat(value),
  disableChat: value => disableChat(value)
});

/**
 * Clear game chat.
 */
const clearGameChat = () => {
  mp.gui.execute('$("#chat_messages").html("")');
};

exports.clearGameChat = clearGameChat;

/**
 * Toggles chat visibility.
 * @param {boolean} value
 */
const toggleChat = value => {
  globals.toggleChat = value;
  mp.gui.chat.show(value);
};

exports.toggleChat = toggleChat;

/**
 * This enables or disables chat.
 * @param {boolean} value
 */
const disableChat = value => {
  globals.disableChat = value;
  mp.gui.chat.activate(value);
};

exports.disableChat = disableChat;

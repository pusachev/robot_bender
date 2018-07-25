'use strict';

const db            = require('../models');

module.exports = function (bot) {
    bot.onText(/иди в жопу/, (msg) => {
        bot.sendMessage(msg.chat.id, 'Поцелуй меня в мой блестящий металический зад!', {
            'reply_to_message_id': msg.message_id
        });
    });
};
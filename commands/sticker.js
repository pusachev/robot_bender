'use strict';

module.exports = function (bot, logger) {
    bot.on('sticker', (msg) => {
        logger.log('info', msg);
        //bot.sendMessage(msg.chat.id, 'Сам такой!', {'reply_to_message_id': msg.message_id, 'from': msg.from});
    });
};

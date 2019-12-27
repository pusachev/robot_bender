'use strict';

module.exports = function (bot, logger) {
    bot.onText(/что такое (.+)/, (msg, match) => {
        logger.log("info", match[1]);
        logger.log("debug", msg);

        const resp = match[1];

        bot.sendMessage(msg.chat.id, 'https://google.gik-team.com/?q='+resp, {
            'reply_to_message_id': msg.message_id
        });
    });
};
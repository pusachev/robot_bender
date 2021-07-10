'use strict';

module.exports = function (bot, logger) {
    bot.onText(/\/echo (.+)/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message

        const chatId = msg.chat.id;
        const resp = match[1]; // the captured "whatever"
        const chat = log.chat.id;

        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, resp, {
            'reply_to_message_id': msg.message_id
        });
    });
};

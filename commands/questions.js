'use strict';

module.exports = function (bot) {
    bot.onText(/что такое (.+)/, (msg, match) => {

        console.log(match);

        const resp = match[1];

        bot.sendMessage(msg.chat.id, 'https://google.gik-team.com/?q='+resp, {
            'reply_to_message_id': msg.message_id
        });
    });
};
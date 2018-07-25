'use strict';

module.exports = function (bot) {

    let commands = {
        "/echo" : "echo {%s}",
        "/help" : "help message"
    };

    bot.onText(/\/help/, (msg, match) => {
        const chatId = msg.chat.id;
        let resp = 'Available commands: \n';

        for (let command in commands) {
            resp += '<b>' + command + '</b>: ' + commands[command] + '\n';
        }

        bot.sendMessage(chatId, resp, {parse_mode : "HTML"});
    });
};
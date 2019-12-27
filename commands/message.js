'use strict';

module.exports = function (bot, logger) {
    let messages = {};

    bot.on('message', msg => {
        logger.log("debug", msg);
        let utc = new Date().toJSON().slice(0,10).replace(/-/g,'');
        logger.log("debug", utc);
        logger.log("debug", messages);

        if (messages[msg.from.username] === undefined) {
            messages[msg.from.username] = {};
        }

        if (messages[msg.from.username][msg.chat.id] === undefined) {
            messages[msg.from.username][msg.chat.id] = {};
        }

        if (messages[msg.from.username][msg.chat.id][utc] === undefined) {
            let name = msg.from.first_name ? msg.from.first_name : '@' + msg.from.username;
            messages[msg.from.username][msg.chat.id][utc] = true;
            setTimeout(function(){
                bot.sendMessage(msg.chat.id, "Поцелуй мой блестящий металический зад " + name);
            }, 10000);
        }
    });
};



'use strict';

module.exports = function (bot, logger) {
    bot.on('message', (msg) => {
        if (msg.photo && msg.photo.length) {
            bot.getFile(msg.photo[0].file_id).then( (res) => {
                logger.log("debug", res);
                bot.downloadFile(res.file_id, __dirname + '/../images/')
                    .then((response) => {
                        console.log(response);
                    });
            });
        }
    });
};
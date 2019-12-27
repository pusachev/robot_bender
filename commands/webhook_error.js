'use strict';

module.exports = function (bot, logger) {
    bot.on('webhook_error', (error) => {
        logger.log('error', error);
    });
};

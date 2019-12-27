'use strict';

module.exports = function (bot, logger) {
    bot.on('polling_error', (error) => {
        logger.log('error', error);
    });
};

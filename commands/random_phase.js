'use strict';

const db = require('../models');

module.exports = function (bot) {

    bot.onText(/Бендер (.*)/, (msg) => {

        const Phases = db.Phases;

        Phases.findAll().then(phases => {

            var message = phases[Math.floor(Math.random()*phases.length)];

             bot.sendMessage(msg.chat.id, message.getDataValue('phase'),{
                 'reply_to_message_id': msg.message_id
             });
        });
    });
};
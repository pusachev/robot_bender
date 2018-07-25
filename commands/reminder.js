'use strict';

const db = require('../models');
const moment = require('moment');

module.exports = function (bot) {

    bot.onText(/напомни (.+) в (.+)/, (msg, match) => {

        const Reminder = db.Reminder;

        let reminder_msg = match[1];
        let end = match[2];
        let userId = msg.from.id;

        let time = end.split(':');

        let date = new Date();
        date.setHours(+time[0]);
        date.setMinutes(time[1]);

        Reminder.create({
            reminder: reminder_msg,
            end: date,
            userId: userId,
            status: 0
        }).then(model => {
            bot.sendMessage(msg.chat.id, "Отлично! Я обязательно напомню, если не напьюсь :)", {
                    'reply_to_message_id': msg.message_id
                }
            )
        });
    });
};
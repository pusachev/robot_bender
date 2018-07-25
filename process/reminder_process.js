'use strict';

module.exports = function (bot, db) {
    setInterval(function () {

        let now = new Date();
        let feature = new Date();
        feature.setMinutes(now.getMinutes() + 1);

        db.Reminder.findAll({
            where: {
                end : {
                    [db.Sequelize.Op.between] : [now, feature]
                },
                status :{
                   [db.Sequelize.Op.not]: 1
                }
            }
        }).then(reminders => {
            for (let index in reminders) {

                let reminder = reminders[index];

                let message = 'Эй мешок с мясом! Ты просил напомнить тебе это "' + reminder.getDataValue('reminder') + '"';

                bot.sendMessage(reminder.getDataValue('userId'), message).then(result => {
                    reminder.updateAttributes({
                        status: 1
                    })
                });
            }
        })
    }, 60000);
};
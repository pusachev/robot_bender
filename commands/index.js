'use strict';

const fs            = require('fs');
const path          = require('path');
const TelegramBot   = require('node-telegram-bot-api');
const basename      = path.basename(__filename);
const env           = process.env.NODE_ENV || 'development';
const config        = require(__dirname + '/../config/bot_config.json')[env];
var  bot            = {};


bot = new TelegramBot(config.token, {'polling': config.polling || false});

bot.on('polling_error', (error) => {
    console.log(error.code);  // => 'EFATAL'
});


bot.on('webhook_error', (error) => {
    console.log(error.code);  // => 'EPARSE'
});

bot.on('sticker', function(msg){
    console.log(msg);
    bot.sendMessage(msg.chat.id, 'Сам такой!', {'reply_to_message_id': msg.message_id, 'from': msg.from});
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
         require(path.join(__dirname, file))(bot);
    });


module.exports = bot;

'use strict';

const fs            = require('fs');
const path          = require('path');
const TelegramBot   = require('node-telegram-bot-api');
const basename      = path.basename(__filename);
const env           = process.env.NODE_ENV || 'development';
const config        = require(__dirname + '/../config/bot_config.json')[env];
const winston       = require('winston');
var  bot            = {};

bot = new TelegramBot(config.token, {'polling': config.polling || false});



fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
         require(path.join(__dirname, file))(bot, winston);
    });


module.exports = bot;

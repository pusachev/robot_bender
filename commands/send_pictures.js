'use strict';

const fs            = require('fs');
const path          = require('path');
const basename      = path.basename(__filename);

module.exports = function (bot) {

    bot.onText(/картинка/, (msg) => {
        let pictures = [];

        let files =  fs
            .readdirSync(__dirname + '/../images/')
            .filter(file => {
                return (file.indexOf('.') !== 0)
                        && (file !== basename)
                        && (file.slice(-4) === '.jpg' || file.slice(-5) === '.jpeg');
            });

        for (let index in files) {
            pictures.push(path.join(__dirname + '/../images/', files[index]));
        }

        bot.sendPhoto(msg.chat.id, pictures[Math.floor(Math.random()*pictures.length)], {
            'reply_to_message_id': msg.message_id
        });
    });

    bot.onText(/фото/, (msg) => {
        let pictures = [];

        let files =  fs
            .readdirSync(__dirname + '/../images/')
            .filter(file => {
                return (file.indexOf('.') !== 0)
                    && (file !== basename)
                    && (file.slice(-4) === '.jpg' || file.slice(-5) === '.jpeg');
            });

        for (let index in files) {
            pictures.push(path.join(__dirname + '/../images/', files[index]));
        }

        bot.sendPhoto(msg.chat.id, pictures[Math.floor(Math.random()*pictures.length)], {
            'reply_to_message_id': msg.message_id
        });
    });

    bot.onText(/изображение/, (msg) => {
        let pictures = [];

        let files =  fs
            .readdirSync(__dirname + '/../images/')
            .filter(file => {
                return (file.indexOf('.') !== 0)
                    && (file !== basename)
                    && (file.slice(-4) === '.jpg' || file.slice(-5) === '.jpeg');
            });

        for (let index in files) {
            pictures.push(path.join(__dirname + '/../images/', files[index]));
        }

        bot.sendPhoto(msg.chat.id, pictures[Math.floor(Math.random()*pictures.length)], {
            'reply_to_message_id': msg.message_id
        });
    });

    bot.onText(/фотки/, (msg) => {
        let pictures = [];

        let files =  fs
            .readdirSync(__dirname + '/../images/')
            .filter(file => {
                return (file.indexOf('.') !== 0)
                    && (file !== basename)
                    && (file.slice(-4) === '.jpg' || file.slice(-5) === '.jpeg');
            });

        for (let index in files) {
            pictures.push(path.join(__dirname + '/../images/', files[index]));
        }

        bot.sendPhoto(msg.chat.id, pictures[Math.floor(Math.random()*pictures.length)], {
            'reply_to_message_id': msg.message_id
        });
    });
};
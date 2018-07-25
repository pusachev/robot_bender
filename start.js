'use strict';

const db = require('./models');
const bot = require('./commands');

require('./process/reminder_process')(bot, db);
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      const collection = require(__dirname + '/../phases/ru_RU.json');
      let data = [];

      for (let index in collection) {
        data.push(collection[index]);
      }

      return queryInterface.bulkInsert('Phases', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Phases', null, {});
  }
};

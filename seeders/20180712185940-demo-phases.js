'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      const collection = require(__dirname + '/../phases/ru_RU.json');
      let data = [];

      for (let index in collection) {
        collection[index].createdAt = new Date();
        collection[index].updatedAt = new Date();
        data.push(collection[index]);
      }

      return queryInterface.bulkInsert('Phases', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Phases', null, {});
  }
};

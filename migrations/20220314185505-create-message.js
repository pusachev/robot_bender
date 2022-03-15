'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_id: {
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      first_name : {
        type: Sequelize.STRING
      },
      last_name : {
        type: Sequelize.STRING
      },
      username : {
        type: Sequelize.STRING
      },
      chat_id: {
        type: Sequelize.BIGINT
      },
      chat_title : {
        type: Sequelize.STRING
      },
      chat_type : {
        type: Sequelize.STRING
      },
      message : {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
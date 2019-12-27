'use strict';
module.exports = (sequelize, DataTypes) => {
    var Messages = sequelize.define('Messages', {
        message_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        chat_id: DataTypes.INTEGER,
        chat_title: DataTypes.STRING,
        chat_type: DataTypes.STRING,
        message: DataTypes.STRING,
    }, {});
    Messages.associate = function(models) {
        // associations can be defined here
    };
    return Messages;
};
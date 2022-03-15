'use strict';
module.exports = (sequelize, DataTypes) => {
    var Messages = sequelize.define('Messages', {
        message_id: DataTypes.BIGINT,
        user_id: DataTypes.BIGINT,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        chat_id: DataTypes.BIGINT,
        chat_title: DataTypes.STRING,
        chat_type: DataTypes.STRING,
        message: DataTypes.TEXT,
    }, {});
    Messages.associate = function(models) {
        // associations can be defined here
    };
    return Messages;
};
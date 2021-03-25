const Sequelize = require('sequelize');
const db = require('../config/database');

const Setting = db.define('settings', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Setting;


const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        unique: true
    },
    company_id: {
        field: 'company_id',
        type: Sequelize.INTEGER
    },
    role: {
        type:   Sequelize.ENUM,
        values: ['USER', 'ADMIN', 'APPROVER'],
        defaultValue: "USER"
    },
    subscription: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = User;


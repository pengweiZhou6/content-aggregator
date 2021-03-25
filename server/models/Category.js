const Sequelize = require('sequelize');
const db = require('../config/database');

const Category = db.define('category', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        unique: true
    }
 }, {
     freezeTableName: true,
     timestamps: false
 }
)

module.exports = Category;


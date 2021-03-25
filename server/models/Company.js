const Sequelize = require('sequelize');
const db = require('../config/database');

const Company = db.define('company', {
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

module.exports = Company;


const Sequelize = require('sequelize');
const db = require('../config/database');

const PostApprover = db.define('post_approver', {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    approver_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    freezeTableName: true,
    timestamps: false
})
module.exports = PostApprover;


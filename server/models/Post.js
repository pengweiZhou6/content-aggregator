const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING(512),
        isUrl: true
    },
    title: {
        type: Sequelize.STRING(512)
    },
    company_id: {
        field: 'company_id',
        type: Sequelize.INTEGER
    },
    category_id: {
        field: 'category_id',
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.STRING
    },
    published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    blog_stream: {
        type: Sequelize.BOOLEAN
    },
    last_updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Post;


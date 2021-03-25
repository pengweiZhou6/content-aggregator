const Sequelize = require('sequelize');
const config = require('../config');

module.exports =  new Sequelize(config.db_name, config.db_username, config.db_password, {
  host: config.db_host,
  dialect: 'mysql'
});

// models
const Post = require('../models/Post');
const PostApprover = require('../models/PostApprover');
const Category = require('../models/Category');
const Company = require('../models/Company');
const Setting = require('../models/Setting');
const User = require('../models/User');

// relations
Category.hasMany(Post, {foreignKey: 'category_id'});
Post.belongsTo(Category, {foreignKey: 'category_id'});

Company.hasMany(Post, {foreignKey: 'company_id'});
Post.belongsTo(Company, {foreignKey: 'company_id'});

Company.hasMany(User, {foreignKey: 'company_id'});
User.belongsTo(Company, {foreignKey: 'company_id'});

User.hasMany(Post, {foreignKey: 'user_id'});
Post.belongsTo(User, {foreignKey: 'user_id'});

Post.hasOne(PostApprover, {foreignKey: 'post_id'});
PostApprover.belongsTo(Post, {foreignKey: 'post_id'});

User.hasOne(PostApprover, {foreignKey: 'approver_id'});
PostApprover.belongsTo(User, {foreignKey: 'approver_id'});

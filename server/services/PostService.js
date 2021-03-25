const PostService = function () { }
const Post = require('../models/Post');
const User = require('../models/User');
const Category = require('../models/Category');
const Company = require('../models/Company');
const PostApprover = require('../models/PostApprover');
const Setting = require('../models/Setting');
const sequelize = require("sequelize");

PostService.prototype.addPost = async function (title, url, companyId, categoryId, userId, isStream) {
    return Post.create({
        url: url,
        title: title,
        company_id: companyId,
        category_id: categoryId,
        user_id: userId,
        blog_stream: isStream
    });
}

PostService.prototype.updatePost = async function (postId, title, companyId, categoryId) {
    let updateValues = {};
    if (companyId !== undefined) {
        updateValues["company_id"] = companyId;
    }
    if (title != null) {
        updateValues["title"] = title;
    }
    if (categoryId !== undefined) {
        updateValues["category_id"] = categoryId;
    }
    return Post.update(updateValues, {
        where: {
            id: postId
        }
    })
}

PostService.prototype.approvePost = async function (postId, approverId) {
    // create post approver
    await PostApprover.create({
        post_id: postId,
        approver_id: approverId
    });

    // get count of approvers
    const { count, rows } = await PostApprover.findAndCountAll({
      where: {
        post_id: postId
      }
    });
    console.log('count', count);

    // get role of user that submitted post
    const post = await Post.findOne({
        where: {
            id: postId
        },
        include: [
            {
                model: User,
                required: true,
                attributes: ['role']
            }
    ]});
    console.log('role', post.user.role);

    // get correct threshold
    const userThreshold = await Setting.findOne({
        where: {
            name: "User Approval Threshold"
        }
    });
    const adminThreshold = await Setting.findOne({
        where: {
            name: "Admin Approval Threshold"
        }
    });

    let threshold;
    if (post.user.role == 'ADMIN') {
        threshold = adminThreshold.value;
    } else {
        threshold = userThreshold.value;
    }

    console.log('threshold', threshold);

    // update published to true
    if (count >= threshold) {
        
        await Post.update({
            published: true,
            last_updated: sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            where: {
                id: postId
            }
        });

        const RSSService = require('./RSSService');
        new RSSService().generateRSS();
    }
}

PostService.prototype.deletePost = async function (id) {
    return Post.destroy({
        where: {
            id: id
        }
    });
}

PostService.prototype.getPosts = async function (page = 0, pageSize = 5000, title, category, company,
                                                 isPublished, isStream, beginTime, endTime) {
    const where = {
    };

    if (title != null) {
        where.title = {
            [sequelize.Op.like]: `%${title}%`
        }
    }

    if (category !== undefined) {
        category = category.split(',');
        if (Array.isArray(category)) {
            where.category_id = {
                  [sequelize.Op.or]: category
            }
        } else {
            where.category_id = category;
        }
    }

     if (company !== undefined) {
        company = company.split(',');
        if (Array.isArray(company)) {
            where.company_id = {
                  [sequelize.Op.or]: company
            }
        } else {
            where.company_id = company;
        }
    }

    if (isPublished != null) {
        where.published = isPublished;
    }

    if (isStream != null) {
        where.blog_stream = isStream;
    }

    if (beginTime != null) {
        where.last_updated = {
            [sequelize.Op.gt]: beginTime
        }
    }

    if (endTime != null) {
        where.last_updated = {
            [sequelize.Op.lte]: endTime
        }
    }

    const offset = page * pageSize;
    const limit = pageSize;

    const { rows: posts, count } =  await Post.findAndCountAll({
        attributes: [
            "id",
            "url",
            "title",
            "company_id",
            "last_updated",
            "blog_stream",
            "published",
            [sequelize.fn('GROUP_CONCAT', sequelize.literal("post_approver.approver_id SEPARATOR ', '")), 'approver_ids'],
            [sequelize.fn('GROUP_CONCAT', sequelize.literal("`post_approver->user`.`name` SEPARATOR ', '")), 'approver_names']
        ],
        where,
        include: [
            {
                model: Category,
                required: false
            },
            {
                model: Company,
                required: false
            },
            {
                model: PostApprover,
                required: false,
                include: [
                    { model: User, required: true, attributes: [] }
                ],
                attributes: []
            },
            {
                model: User,
                required: true,
                attributes: ["id", "role"]
            }
        ],
        distinct: true,
        offset,
        limit,
        order: [['last_updated', 'DESC']],
        group: ["post.id"],
    });

    return { posts, count: count.length };
}

module.exports = PostService;
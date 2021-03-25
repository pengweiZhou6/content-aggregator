const UserService = function () { }
const User = require('../models/User');
const Company = require('../models/Company');

UserService.prototype.addUser = async function (name, email) {
    return User.create({
        name: name,
        email: email
    });
}

UserService.prototype.deleteUser = async function (id) {
    return User.destroy({
        where: {
            id: id
        }
    });
}

UserService.prototype.updateUser = async function (userId, companyId, role, subscription) {
    let updateValues = {};
    if (companyId !== undefined) {
        updateValues["company_id"] = companyId;
    }
    if (subscription != null) {
        updateValues["subscription"] = subscription;
    }
    if (role != null) {
        updateValues["role"] = role;
    }
    return User.update(updateValues, {
        where: {
            id: userId
        }
    })
}

UserService.prototype.getUsers = async function (id, name, email, subscription, role) {
    const where = {};

    if (id != null) {
        where.id = id;
    }

    if (name != null) {
        where.name = name;
    }

    if (email != null) {
        where.email = email;
    }

    if (subscription != null) { 
        where.subscription = subscription;
    }

    if (role != null) {
        where.role = role;
    }

    return User.findAll({
        attributes: [
            'id', 'name', 'email', 'subscription', 'company_id', 'role', 'created_at',
        ],
        where,
        include: [{
            model: Company,
            required: false,
            attributes: ['name']
        }],
        order: [['name', 'DESC']]
    });
}

module.exports = UserService;
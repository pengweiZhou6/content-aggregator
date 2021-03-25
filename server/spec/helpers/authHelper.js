const TokenUtil = require('../../utils/TokenUtil');
const role = require('../../constants/role');

function generateUserToken() {
    return TokenUtil.createToken({
        id: 1,
        role: role.USER
    })
}

function generateApproverToken() {
    return TokenUtil.createToken({
        id: 2,
        role: role.APPROVER
    })
}

function generateAdminToken() {
    return TokenUtil.createToken({
        id: 3,
        role: role.ADMIN
    })
}

module.exports = {
    generateAdminToken,
    generateApproverToken,
    generateUserToken
};
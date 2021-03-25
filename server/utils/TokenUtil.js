const jwt = require('jsonwebtoken');
const config = require('../config');

const createToken = function (auth) {
    return jwt.sign({
        id: auth.id,
        role: auth.role
    }, config.jwt_secret,
        {
            expiresIn: 60 * 100
        });
};

module.exports = {
    createToken,
    generateToken: function (req, res, next) {
        req.token = createToken(req.auth);
        return next();
    },
    sendToken: function (req, res) {
        res.setHeader('x-auth-token', req.token);
        res.cookie('_session', req.token, { maxAge: 6000000 });
        return res.status(200).send(req.auth);
    }
};

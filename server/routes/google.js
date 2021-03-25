const express = require('express');
const router = express.Router();
const passport = require('passport');
const { generateToken, sendToken } = require('../utils/TokenUtil');
require('../passport')();

router.post('/', passport.authenticate('google-token', { session: false }), function (req, res, next) {
    if (!req.user) {
        return res.status(401).send('User Not Authenticated');
    }

    req.auth = {
        id: req.user.id,
        role: req.user.role
    };

    next();
}, generateToken, sendToken);

module.exports = router;

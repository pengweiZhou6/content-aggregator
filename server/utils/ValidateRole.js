function validateRole(roles) {
    return function (req, res, next) {
        if (roles.includes(req.user.role)) next();
        else res.sendStatus(403);
    }
}

module.exports = { validateRole };
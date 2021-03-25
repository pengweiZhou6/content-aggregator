const express = require('express');
const UserService = require('../services/UserService');
const { body, validationResult } = require('express-validator');
const { validateRole } = require('../utils/ValidateRole');
const role = require('../constants/role');
const router = express.Router();

const passport = require('passport');
require('../passport')();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  validateRole([role.ADMIN]),
  async (req, res, next) => {
    const userService = new UserService();
    const { id, name, email, role, subscription } = req.query;
    try {
      return res.send({
        users: await userService.getUsers(id && JSON.parse(id),
          name, email, subscription && JSON.parse(subscription), role)
      });
    } catch (e) {
      return next(e);
    }
  }
);

router.post('/', async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const userService = new UserService();
  try {
    await userService.addUser(req.body.id, req.body.name, req.body.email, req.body.companyId,
      req.body.role, req.body.createdAt);
    return res.send();
  } catch (e) {
      res.status(400).send('User exists.');
      return next(e);
  }
});

router.get('/current',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const userService = new UserService();
    try {
      return res.send({
        users: await userService.getUsers(req.user.id,
          null, null, null, null)
      });
    } catch (e) {

      return next(e);
    }
  }
)

router.get('/current/session',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      return res.send(req.user);
    } catch (e) {
      return next(e);
    }
  }
)

router.patch('/:id', [
  body('role').optional().isString(),
  body('companyId').optional({ nullable: true }).isInt(),
  body('subscription').optional().isInt()
], passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    if (req.body.role != null && req.user.role != role.ADMIN) { 
      return res.status(403);
    }

    const userService = new UserService();
    try {
      await userService.updateUser(req.params.id, req.body.companyId, req.body.role, req.body.subscription);
      return res.send();
    } catch (e) {
        res.status(404).send('User not found.');
        return next(e);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  validateRole([role.ADMIN]),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const userService = new UserService();
    try {
        const usersDeleted = await userService.deleteUser(req.params.id);
        if (usersDeleted < 1) return res.status(404).send('User not found.');
      return res.send();
    } catch (e) {
        return next(e);
    }
  });

module.exports = router;

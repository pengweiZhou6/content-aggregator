const express = require('express');
const CategoryService = require('../services/CategoryService');
const { body, validationResult } = require('express-validator');
const { validateRole } = require('../utils/ValidateRole');
const role = require('../constants/role');
const router = express.Router();
const passport = require('passport');
require('../passport')();


router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const categoryService = new CategoryService();
        try {
            return res.send({ categories: await categoryService.getCategories() });
        } catch (e) {
            return next(e);
        }
    });

router.post('/', [
    body('category').exists().isString(),
    body('category').trim().isLength({ min: 1 }).withMessage('Category name is required.')
], passport.authenticate('jwt', { session: false }),
    validateRole([role.ADMIN]),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const categoryService = new CategoryService();
        try {
            await categoryService.addCategory(req.body.category);
            return res.send();
        } catch (e) {
            res.status(400).send('Category exists.');
            return next(e);
        }
    });

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    validateRole([role.ADMIN]),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const categoryService = new CategoryService();
        try {
            const categoryDeleted = await categoryService.deleteCategory(req.params.id);
            if (categoryDeleted < 1) return res.status(404).send('Category not found.');
            return res.send();
        } catch (e) {
            return next(e);
        }
    });

module.exports = router;

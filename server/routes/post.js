const express = require('express');
const PostService = require('../services/PostService');
const { body, validationResult } = require('express-validator')
const router = express.Router();
const passport = require('passport');
require('../passport')();

router.get('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const postService = new PostService();
        try {
            const { page, pageSize, title, categoryId, companyId, isPublished, isStream } = req.query;
            return res.send(
                await postService.getPosts(page && JSON.parse(req.query.page), pageSize && JSON.parse(req.query.pageSize),
                    title, categoryId, companyId, isPublished && JSON.parse(isPublished), isStream && JSON.parse(isStream))
            );
        } catch (e) {
            return next(e);
        }
    }
);

router.post('/', [
    body('url').exists().isString(),
    body('userId').exists().isString(),
    body('title').trim().isLength({ min: 1 }).withMessage('Title is required.'),
    body('url').isURL().withMessage('Invalid website url'),
    body('companyId').optional({ nullable: true }).isInt(),
    body('categoryId').optional({ nullable: true }).isInt(),
    body('isStream').exists().isBoolean(),
], passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const postService = new PostService();
        try {
            const { title, url, companyId, categoryId, userId, isStream } = req.body;
            await postService.addPost(title, url, companyId, categoryId,
                userId, isStream && JSON.parse(isStream));
            return res.send();
        } catch (e) {
            res.status(400).send('post exists.');
            return next(e);
        }
    }
);

router.post('/approve', [
    body('postId').exists().isInt(),
    body('approverId').exists().isInt()
], passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const postService = new PostService();
        try {
            await postService.approvePost(req.body.postId, req.body.approverId);
            return res.send();
        } catch (e) {
            res.status(400).send('Approval already exists.');
            return next(e);
        }
    }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const postService = new PostService();
        try {
            const postDeleted = await postService.deletePost(req.params.id);
            if (postDeleted < 1) return res.status(404).send('Post not found.');
            return res.send();
        } catch (e) {
            return next(e);
        }
    }
);

router.patch('/:id', [
    body('title').optional().isString(),
        body('title').trim().isLength({ min: 1 }).withMessage('Title is required.'),
    body('companyId').optional({ nullable: true }).isInt(),
    body('categoryId').optional({ nullable: true }).isInt(),
], passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const postService = new PostService();
        try {
            await postService.updatePost(req.params.id, req.body.title, req.body.companyId, req.body.categoryId);
            return res.send();
        } catch (e) {
            res.status(404).send('Post not found.');
            return next(e);
        }
    }
);

router.get('/featured', async (req, res, next) => {
    const postService = new PostService();
    try {
        return res.send(
            await postService.getPosts(0, 3, null, undefined, undefined, true, false)
        );
    } catch (e) {
        return next(e);
    }
});

module.exports = router;

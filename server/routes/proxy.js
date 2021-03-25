const { body, validationResult } = require('express-validator')
const express = require('express');
const router = express.Router();
const urlMetadata = require('url-metadata')


router.post('/', [
    body('url').exists().isURL()
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const metaData = await urlMetadata(req.body.url);
        res.send(metaData);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

module.exports = router;
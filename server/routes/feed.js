const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', function (req, res, next) {
    fs.readFile(`${__dirname}/../public/rss/rssfeed.xml`, (err, data) => {
        if (!err) {
            res.type('application/xml');
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;

const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const router = express.Router();

router.post('/:sitename', async (req, res) => {
    request(req.body.url, function (err, res, body) {
        console.log(body);
    });

    res.send('Got the html with the given url');
});

module.exports = router; 
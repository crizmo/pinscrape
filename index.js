"use strict";

var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var fs = require('fs');

var app = express();
var url = "https://pinterest.com/";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (req, res) {
    res.json({
        message: "Pinterest Scraper By Kurizu",
        routes: {
            Info: req.protocol + '://' + req.get('host') + "/api/:username/:boardName/info",
            Pins: req.protocol + '://' + req.get('host') + "/api/:username/:boardName/pins",
        },
    });
});

app.get("/api/:username/:boardName/info", function (req, res) {
    var title = "";

    request.get(url + req.params.username + '/' + req.params.boardName, function (error, response, html) {
        var $ = cheerio.load(html);

        title = $("h1").text();
        var count = parseInt($("header")
            .find('div > div > div[data-test-id="board-count-info"]')
            .text()
            .replace(/\D/g, ""));

        res.json({
            title: title,
            totalPins: count,
        });
    });
});

app.get("/api/:username/:boardName/pins", function (req, res) {
    var results = [];
    var results_file = [];

    request.get(url + req.params.username + '/' + req.params.boardName, function (error, response, html) {
        var $ = cheerio.load(html);

        $("img").each(function (i, image) {
            var re = /236x/gi;
            var src = $(image).attr("src");
            var alt = $(image).attr("alt");
            if (src) {
                src = src.toString().replace(re, "564x");
                results[i] = { src: src, alt: alt };
                results_file.push(src);
            }
        });

        var jsonContent = JSON.stringify(results_file, null, 2);
        fs.writeFileSync('urls.json', jsonContent, 'utf8');

        res.json({ images: results });
    });
});

var port = process.env.PORT || 3000;
console.log("PORT " + port);
app.listen(port, function () {
    console.log("App Listening on PORT " + port);
});

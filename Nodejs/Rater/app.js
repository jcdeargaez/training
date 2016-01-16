"use strict";
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) { return res.send('Hello World'); });
app.listen(port, function () { return console.log("Running on port " + port); });

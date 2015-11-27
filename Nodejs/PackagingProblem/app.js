'use strict';
var http = require('http');
var url = require('url');
var packaging = require('./packaging');
var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var t = q.t ? parseInt(q.t) : 0;
    var p = packaging.computePackaging(t);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(p);
    res.end('\n');
});
server.listen(8000);
console.log('Running on port 8000 ');

/// <reference path="./typings/node/node.d.ts"/>

import http = require('http');
import url = require('url');
import packaging = require('./packaging');

let server = http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;
    let t = q.t ? parseInt(q.t) : 0;
    let p = packaging.computePackaging(t);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(p);
    res.end('\n');
});

server.listen(8000);

console.log('Running on port 8000');

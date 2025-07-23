const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'plain/text' });
    res.end();
});

server.listen(3000);
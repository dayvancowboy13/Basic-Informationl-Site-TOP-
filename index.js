const http = require('node:http');
const fs = require('node:fs');
require("dotenv").config();

const server = http.createServer((req, res) => {

    console.log('Server started...');
    console.log('Accessing environment variables...');
    console.log(`The variable is ${process.env.MY_VAR}`);

    res.setHeader('Content-Type', 'text/html')
    let path = './';

    console.log(req.url, req.method);

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, 'utf-8', (err, data) => {
        console.log("reading file to send...")
        if (err) {
            console.log('error found')
            console.log(err);
            res.end();
        } else {
            console.log('Sending html page...');
            res.end(data);
        }
    })

});

server.listen(8080, 'localhost', () => {
    console.log('Listening for requests on post 8080...');
});
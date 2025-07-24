const http = require('node:http');
const fs = require('node:fs');

const PORT = 8080;
let htmlFiles = [];

fs.readdir('.', (err, files) => {

    files.forEach(el => {
        let fileComps = el.split('.');
        // console.log(fileComps);
        if (fileComps[1] == 'html') {
            htmlFiles.push(fileComps[0]);
        }
        else return;
    });

});

const server = http.createServer((req, res) => {

    // let url = req.url.slice(1) + ''
    console.log(htmlFiles);
    // console.log(req.url.slice(1));
    if (htmlFiles.includes(req.url.slice(1))) {
        console.log('yay!');
    }


});

server.listen(PORT, 'localhost');
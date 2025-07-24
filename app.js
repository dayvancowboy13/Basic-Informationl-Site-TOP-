const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Received request for homepage...')
    let path = __dirname + '/index.html'
    res.sendFile(path, err => {
        if (err)
            console.log(err)
        else
            console.log('Displaying home page')
    })
});

app.get('/about', (req, res) => {
    console.log('Received request for about page...')
    let path = __dirname + '/about.html'
    res.sendFile(path, err => {
        if (err)
            console.log(err)
        else
            console.log('Displaying about page')
    })
});

app.get('/contact-me', (req, res) => {
    console.log('Received request for contact page...')
    let path = __dirname + '/contact-me.html'
    res.sendFile(path, err => {
        if (err)
            console.log(err)
        else
            console.log('Displaying contact page')
    })
});

app.use((req, res) => {
    console.log('Received bad request...')
    let path = __dirname + '/404.html'
    res.sendFile(path, err => {
        if (err)
            console.log(err)
        else
            console.log('Displaying error page')
    })
});

app.listen(PORT, () => {
    console.log(`My first Express app - Listening on port ${PORT}`);
})
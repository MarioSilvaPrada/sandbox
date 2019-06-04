const http = require('http');

const server = http.createServer((req, res) => {
    console.log('headers', req.headers);
    console.log('method', req.method);
    console.log('url', req.url);

    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello my friends!</h1>');
})

server.listen(3000);
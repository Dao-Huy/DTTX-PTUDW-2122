const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) =>{

    const data = {
        'id' : 1,
        'name': 'IPhone 13 Pro Max'
    }

    res.writeHead(200, {'content-type':'text/json'});
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})
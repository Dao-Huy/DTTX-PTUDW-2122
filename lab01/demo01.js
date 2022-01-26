const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.end("Hello World!!!!");
})
server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}`);
});
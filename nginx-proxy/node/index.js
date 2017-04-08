const http = require('http');

const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!\n');
});

server.listen(3000);

console.log('Listening on port 3000');

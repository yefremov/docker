
/**
 * Module dependencies.
 */

const http = require('http');

// create simple http server
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!\n');
});

// serve on port 3000
server.listen(3000);

console.log('Listening on port 3000');

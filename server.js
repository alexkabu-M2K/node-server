// Importando módulo node http 
const http = require('http');

http.createServer((request, response) => {
  response.end('Hello World');
}).listen(3333, 'localhost');
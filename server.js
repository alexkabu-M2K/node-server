// Importando módulo node http 
const http = require('http');

http.createServer((request, response) => {
  response.end('Hello World');
}).listen(3333, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:3333');
});

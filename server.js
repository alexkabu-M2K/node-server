// Importando módulo node http 
import http from 'node:http';

// Variavel Port Server
const PORT = 3333;

// Criando servidor
const server = http.createServer((request, response) => {

  const {url, method} = request;

  response.setHeader('Content-Type', 'text/plain; charset=utf-8');

  response.write(`URL: ${url} - Method: ${method}`);

  response.end();
})

server.listen(PORT, 'localhost', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
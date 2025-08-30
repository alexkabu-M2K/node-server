// Importando módulo node http 
import http from 'node:http';

// Variavel Port Server
const PORT = 3333;

// Criando servidor
const server = http.createServer((request, response) => {

  const url = request.url;

  response.setHeader('Content-Type', 'text/plain');

  response.end(`requisição na url: ${url}`);
})

server.listen(PORT, 'localhost', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Azure CI/CD Pipeline!');
});

server.listen(port, hostname, () => {
  console.log(`Server running`);
});

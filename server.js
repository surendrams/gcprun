const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - My First CloudRun Example.\n');
});

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running ..............`);
});

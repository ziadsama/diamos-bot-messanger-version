var http = require('http');
http.createServer(function (req, res) {
  res.write("diamos is here");
  res.end();
}).listen(8080);
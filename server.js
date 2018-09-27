var http = require('http');
var fs = require('fs');
var webpack = require('webpack');
var config = require('./webpack.config');

webpack(config, function(err, stat) {
  console.log(arguments);
});

fs.readFile('index.html', 'UTF-8', function(error, data) {
  if (error) {
    console.log(error.message);
  } else {
    http.createServer(function(request, response) {
      response.writeHead(200, { 'content-type': 'text/html' });
      response.end(data);
    }).listen(3000);
  }
});

console.log('Server running at http://127.0.0.1:3000/');

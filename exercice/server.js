// Generated by CoffeeScript 1.9.1
(function() {
  var contentTypeMap, fs, http, path, server, simpleHtml;

  http = require('http');

  path = require('path');

  fs = require('fs');

  contentTypeMap = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.html': 'text/html'
  };

  simpleHtml = '<!DOCTYPE html> <html> <head> <title>Webserver Test</title> <meta charset="utf-8"> </head> <body> Min1.html Ceci est le body </body> </html>';

  server = http.createServer(function(req, resp) {
    var extension, filepath;
    console.log('request starting ...', req.url);
    filepath = '.' + req.url;
    if (filepath === './') {
      filepath = './index.html';
    }
    extension = path.extname(filepath);
    return fs.readFile(filepath, function(error, content) {
      if (error) {
        resp.writeHead(500);
        return resp.end();
      } else {
        resp.writeHead(200, {
          'content-Type': contentTypeMap[extension]
        });
        return resp.end(content, 'utf-8');
      }
    });
  });

  server.listen(3000);

  console.log('Server running at http://127.0.0.1:3000/');

}).call(this);

//# sourceMappingURL=server.js.map

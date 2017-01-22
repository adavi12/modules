// Finally, in the app.js file use the functions from your third module to produce the following output in the console:
//
// Account balance:
// $156,301
var http = require('http');

var moduleThree = require('./module3');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(moduleThree.moduleTwo());
  res.write(moduleThree.moduleOne());

  res.end(); // ok to send response
}).listen(3000);

var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;
connect().use(serveStatic(__dirname)).listen(port);
console.log('Nodebot is now serving your files at http://localhost:'+port+'.\r\nShutdown with Ctrl+C');

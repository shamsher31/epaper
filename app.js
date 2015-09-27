var Hapi = require('hapi');

require('dotenv').load();

// Create a server with a host and port
var server = module.exports = new Hapi.Server();

server.connection({ 
  host: process.env.NODE_HOST,
  port: process.env.NODE_PORT 
});

require('config');

require('database');

require('modules');

server.start(function () {
  server.log(['info', 'error'], 'Server running at: ' + server.info.uri);
});

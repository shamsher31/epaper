var Hapi = require('hapi');

require('dotenv').load();

// Create a server with a host and port
var server = module.exports = new Hapi.Server();

server.connection({ 
  host: process.env.NODE_HOST,
  port: process.env.NODE_PORT 
});

require('config');

// Add the route
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
    reply('Urdu Newspaper');
  }
});

server.start(function () {
  server.log(['info', 'error'], 'Server running at: ' + server.info.uri);
});

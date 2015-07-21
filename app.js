var Hapi = require('hapi'),
    Tv = require('tv');

// Create a server with a host and port
var server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ 
  host: 'localhost', 
  port: 8000 
});

// Add the route
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
    reply('Urdu Newspaper');
  }
});

var options = {endpoint: '/logs'},
    reporter = {
      reporters : [{
        reporter : require('good-console'),
        events: { log: '*', response: '*' }
      }]
    };

server.register({
  register : require('good'),
  options : reporter
}, function(err) {
  
});

server.register({register: Tv, options: options}, function (err) {
  if (!err) {
    server.start();
  }
});
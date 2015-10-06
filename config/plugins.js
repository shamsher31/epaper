var server = require('../'),
    pluginsOptions = require('./plugins-options');

server.register(pluginsOptions.Good, pluginsOptions.cb);
server.register(pluginsOptions.Swagger, pluginsOptions.cb);
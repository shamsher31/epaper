var server = require('../'),
    Inert          = require('inert'),
    Vision         = require('vision'),
    HapiSwagger    = require('hapi-swagger');

module.exports = {
  
  Good : {
    register : require('good'),
    options : {
      reporters : [{
        reporter : require('good-console'),
        events: { log: '*', response: '*' }
      }]
    }
  },

  Swagger : [Inert, Vision, {
    register: HapiSwagger,
    options: {
      apiVersion: '1.1.0'
    }
  }],

  cb: function (error) {
    if (error) {
      return server.log(['error', 'database'], error);
    }
  }

};


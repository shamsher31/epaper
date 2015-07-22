var server = require('../'),
    goodReporter = {
      reporters : [{
        reporter : require('good-console'),
        events: { log: '*', response: '*' }
      }]
    },
    tvLog = {
      endpoint: '/logs'
    };

module.exports = {
  
  Good : {
    register : require('good'),
    options : goodReporter
  },

  Tv : {
    register : require('tv'),
    options: tvLog
  },

  cb: function (error) {
    if (error) {
      return server.log(['error', 'database'], error);
    }
  }

};


var Hapi = require('hapi'),
    fs = require('fs');

require('dotenv').load();

// Create a server with a host and port
var server = module.exports = new Hapi.Server();

server.connection({ 
  host: process.env.NODE_HOST,
  port: process.env.NODE_PORT 
});

require('config');

require('database');

// Add the route
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
     reply(
        '<form action="/upload" method="post" enctype="multipart/form-data">' +
        '<input type="file" name="fileUpload">' +
        '<input type="submit" value="Upload">' +
        '</form>'
      );
  }
});

server.route({
  path: '/upload',
  method: 'POST',
  config: {
    payload: {
      maxBytes: 1048576, // 1MB
      output: 'stream',
      allow: 'multipart/form-data',
      parse: true
    },
    handler: function (request, reply) {

      // This is the directory you wish to place the files.
      var uploadDir = './uploads/';

      // Create stream where the files will go.
      var writeStream = fs.createWriteStream(uploadDir + request.payload.fileUpload.hapi.filename);

      // Pipe the payload file into the write stream.
      request.payload.fileUpload.pipe(writeStream);

      // On stream end or error send a response.
      request.payload.fileUpload.on('end', function(){
        reply({"Status":"Done"});
      }).on('error', function(){
        reply('Error in uploading');
      });

    }
  }
});

server.start(function () {
  server.log(['info', 'error'], 'Server running at: ' + server.info.uri);
});

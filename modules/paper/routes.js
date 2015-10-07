var server = require('../../'), 
    controller = require('./controller');

server.route({
  method: 'GET',
  path:'/form', 
  config: {
    description: 'Display Upload form',
    tags: ['api'],
    handler: controller.UploadForm  
  }
});

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    description: 'Uploads image',
    tags: ['api'],
    payload: {
      maxBytes: 1048576, // 1MB
      output: 'stream',
      allow: 'multipart/form-data',
      parse: true
    },
    handler: controller.Upload
  }
});

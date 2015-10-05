var controller = require('controller');

module.exports = {
  
  UploadForm : {
    method: 'GET',
    path:'/', 
    config: {
      description: 'Display Upload form',
      tags: ['api'],
      handler: controller.UploadForm  
    }
  },

  Upload : {
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
  }

}

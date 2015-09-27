var controller = require('controller');

module.exports = {
  
  UploadForm : {
    method: 'GET',
    path:'/', 
    handler: controller.UploadForm
  },

  Upload : {
    method: 'POST',
    path: '/upload',
    config: {
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

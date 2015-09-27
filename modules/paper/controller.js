var fs = require('fs');

module.exports = {
    
  UploadForm : function (request, reply) {
    reply(
      '<form action="/upload" method="post" enctype="multipart/form-data">' +
      '<input type="file" name="fileUpload">' +
      '<input type="submit" value="Upload">' +
      '</form>'
    );
  },

  Upload : function (request, reply) {

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
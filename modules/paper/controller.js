// refer http://excellencenodejsblog.com/gridfs-using-mongoose-nodejs/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Grid = require('gridfs-stream'),
    conn = mongoose.connection;

Grid.mongo = mongoose.mongo;

module.exports = {
  UploadForm: UploadForm,
  Upload: Upload
}
    
function UploadForm (request, reply) {
  reply(
    '<form action="/upload" method="post" enctype="multipart/form-data">' +
    '<input type="file" name="fileUpload">' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}

function Upload (request, reply) {

  var gfs = Grid(conn.db);
  
  var writeStream = gfs.createWriteStream({
    filename: request.payload.fileUpload.hapi.filename
  });

  request.payload.fileUpload.pipe(writeStream);

  writeStream.on('close', function (file) {
    // do something with `file`
    console.log(file.filename + ' Written To DB');
    reply({"Status":"Done"});

  });

  writeStream.on('error', function(err) {
    console.log(err);
    reply('Error in uploading');
  });

}
  
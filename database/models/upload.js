var mongoose = require('mongoose');
    timeStamp = require('mongoose-timestamp');

require('mongoose-type-url');

var UploadsSchema = new mongoose.Schema({
  urls: [{
    type: mongoose.SchemaTypes.Url,
    required: true
  }],
  publishDate : {
    type: Date,
    required : true
  }

});

UploadsSchema.plugin(timeStamp);

mongoose.model('Upload', UploadsSchema);

exports.schema = schema;

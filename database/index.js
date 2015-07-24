var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/subhawasham');

mongoose.connection.on('error', console.error.bind(console));
mongoose.connection.once('open', function () {
  console.log('mongodb connection established.');
});


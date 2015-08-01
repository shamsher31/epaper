var mongoose = require('mongoose');

mongoose.connect('mongodb://'+ process.env.NODE_HOST +'/' + process.env.DB_NAME);

mongoose.connection.on('error', console.error.bind(console));
mongoose.connection.once('open', function () {
  console.log('mongodb connection established.');
});


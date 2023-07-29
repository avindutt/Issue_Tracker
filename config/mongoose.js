const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to Database"));

db.once('open', function(){
    console.log('Successfully connected to Database :: MongoDB');
});

module.exports = db;
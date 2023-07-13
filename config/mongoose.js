const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// mongoose.connect(DB).then(()=> {
//     console.log('connection successful');
// }).catch((err)=> console.log('no connection'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to Database"));

db.once('open', function(){
    console.log('Successfully connected to Database :: MongoDB');
});

module.exports = db;
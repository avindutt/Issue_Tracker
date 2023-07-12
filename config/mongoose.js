const mongoose = require('mongoose');

const DB = 'mongodb+srv://avindutt2369:38WZBlUj3I72W1A7@cluster2.nebyg0s.mongodb.net/';

mongoose.connect(DB).then(()=> {
    console.log('connection successful');
}).catch((err)=> console.log('no connection'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to Database"));

db.once('open', function(){
    console.log('Successfully connected to Database :: MongoDB');
});

module.exports = db;
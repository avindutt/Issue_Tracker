const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

const DB = 'mongodb+srv://avindutt2369:38WZBlUj3I72W1A7@cluster2.nebyg0s.mongodb.net/';

// dotenv.config();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){console.log('Error in connecting to server', err)};
    console.log('Successfully connected to the port: ', port);
});
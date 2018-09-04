const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const cookieParser = require('cookie-parser')
const app = express();

app.set('view engine', 'ejs'); 
app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// app.use(connect.cookieParser());



 
module.exports = app;


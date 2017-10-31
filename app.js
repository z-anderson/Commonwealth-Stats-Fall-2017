var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error Handler
app.use(function (error, req, res, next) {
    console.log(error.message);
    res.status(error.status || 500);
    if (res.status === 404) {
        res.sendFile('html/error-404.html', { root: './public' });
    } else {
        res.sendFile('html/error-500.html', { root: './public' });
    }
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/server-redirect', function(req, res) {
  res.redirect('http://deep-link-sandbox-intercept.local/intercept.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

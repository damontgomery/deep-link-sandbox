var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

const hostedDomain = 'placeholder.com';
const deepLinkLandingPagePath = 'deep-link';

app.get(`/${deepLinkLandingPagePath}`, function(req, res) {
  res.redirect(`https://deep-link-sandbox.local/${deepLinkLandingPagePath}.html`);
});

app.get('/server-redirect', function(req, res) {
  res.redirect(`https://${hostedDomain}/${deepLinkLandingPagePath}`);
});

app.get('/server-redirect-local', function(req, res) {
  res.redirect(`https://deep-link-sandbox-intercept.local/${deepLinkLandingPagePath}`);
});

app.get('/server-redirect-uri', function(req, res) {
  res.redirect('deep-link-sandbox:/example-link');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;

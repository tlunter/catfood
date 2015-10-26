var fs = require('fs');
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var recipes = require('./routes/recipes');

var app = express();

app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/recipes', recipes);

app.use(function(req, res, next) {
  res.status(200).send(fs.readFileSync('public/index.html', { encoding: 'utf-8' }));
});

module.exports = app;

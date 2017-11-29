var express = require('express');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

app.use('/', index);
app.use('/user', users);

module.exports = app;

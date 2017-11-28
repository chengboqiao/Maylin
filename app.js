var express = require('express');
var path = require('path'); 
var user=require('./models/user.js');
var app = express();
// view engine setup

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getUserList',function(req,res){
  user.getUserList(function(results){
    res.json(results)
  })
})

module.exports = app;

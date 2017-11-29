var express = require('express');
var router = express.Router();
var User=require('../models/user.js');
//GET的/user请求
router.get('/',function(req,res){
  User.queryUserList(function(error,results){
     if(error){
      res.send("失败")
    }else{
      res.send(results)
    }
  })
});

//GET的/user/id请求
router.get('/:id',function(req,res){
User.queryUserById(req.params.id,function(error,results){
     if(error){
      res.send('查询报错了');
     }
     res.send(results)
  })
});

//POST的/user请求
router.post('/',function(req,res){
  var user=new User({
    username:req.body.username,
    password:req.body.password
  })
  User.addUser(user,function(error,results){
    if(error){
      res.send("失败")
    }else{
      res.send("成功")
    }
  })

});

//PUT的/user/id请求
router.put('/:id',function(req,res){

});

//DELETE的/user/id请求
router.delete('/:id',function(req,res){

});
module.exports = router;

var express=require('express');
var router=express.Router(); 
router.get('/getmsg',function(req,res){
    res.send('miaomiao~');
})
router.get('/addmsg',function(req,res){
    res.send('miaomiao~');
})
module.exports=router;
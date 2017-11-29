var connection =require('./db.js');

function User(user){
  this.userid=user.userid;
  this.username=user.username;
  this.password=user.password;
}

User.queryUserList=function(callback){
  connection.query('SELECT * FROM user_table', function (error, results) {
    if (error) {
    callback(error)
  }else{
    callback(null,results)
  }
})
}

User.queryUserById=function(userid,callback){
  connection.query('SELECT * FROM user_table WHERE userid=?',[userid], function (error, results) {
  if (error) {
    callback(error)
  }else{
    callback(null,results)
  }
})
}

User.addUser=function(user,callback){
  connection.query('INSERT INTO user_table VALUES(null,?,?)',[user.username,user.password], function (error, results) {
  console.log(results);
  callback(null,results);
});
}

User.updateUser=function(){
  connection.query('SELECT * FROM user_table', function (error, results) {
  if (error) throw error;
  console.log(results);
});
}

User.deleteUser=function(){
  connection.query('SELECT * FROM user_table', function (error, results) {
  if (error) throw error;
  console.log(results);
});
}
module.exports=User;
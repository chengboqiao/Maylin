var connection =require('./db.js');

var getUserList=function(callback){

connection.query('SELECT * FROM user_table', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  callback(results);
  console.log('The solution is: ', results[0].solution);
});
}
exports.getUserList=getUserList;
 
//connection.end();
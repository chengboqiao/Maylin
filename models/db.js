var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'maylin'
});
 
connection.connect();

module.exports=connection;
 
// connection.query('SELECT * FROM user_table', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();
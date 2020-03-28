var express = require('express');
var app = express();
var http = require('http').Server(app);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.221.228.175',
  user     : 'grant',
  password : '7e9BurMrbt88JuIC',
  database : 'wp_db'
});
 
connection.connect();


var sql = "SELECT User, Host FROM mysql.user;";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

app.use(express.static('public'));  //靜態檔案放置區

app.get('/', function(req, res) {
    res.send('GET request to the homepage');
});

const host = '0.0.0.0';
const port = process.env.PORT || 81;

http.listen(port, host, function() {
    console.log("Server started.......");
});
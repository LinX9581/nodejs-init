var express = require('express');
var app = express();
var http = require('http').Server(app);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});
 
connection.connect();


var sql = "select * from post;";
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
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static('public'));

app.get('/', function(req, res) {
    // res.send('Hey Guys! we have a Gift for You!');
    res.sendFile(__dirname + '/index.html');
    console.log("asd")
});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

http.listen(port, host, function() {
    console.log("Server started.......");
});
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static('public'));

app.get('/', function(req, res) {
    // res.send('Hey Guys! we have a Gift for You!!!');
    res.sendFile(__dirname + '/index.html');
    console.log("asd")
});
app.post('/date', function(req, res) {
    console.log("asdasd")
    res.redirect(307, '/login')
})
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

http.listen(port, host, function() {
    console.log("Server started.......");
});

var express = require('express');
var vhost = require('vhost');
var app = express();
var http = require('http').Server(app);

app.use(vhost('nginx.linxnote.club', require('./index.js')));
app.use(vhost('vhost.linxnote.club', require('./test.js')));


const host = '0.0.0.0';
const port = process.env.PORT || 80;

http.listen(port, host, function() {
    console.log("Server started.......");
});
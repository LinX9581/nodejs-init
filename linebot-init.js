let linebot = require('linebot')

bot = linebot({
    channelId: '',
    channelSecret: '',
    channelAccessToken: ''
});

bot.on('message', function(event) {

    console.log(event);
    var msg = event.message.text;

    if (msg == "test") {
        event.reply("tesasdfasfasdfasdft").then(function(data) {
            // success
            console.log(msg);
        }).catch(function(error) {
            // error
            console.log('error');
        });
    } else {
        event.reply(msg).then(function(data) {
            // success
            console.log(msg);
        }).catch(function(error) {
            // error
            console.log('error');
        });
    }
});

const linebotParser = bot.parser(),
    express = require('express');
app = express();
app.post('/webhook', linebotParser);
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

http.listen(port, function() {
    console.log('My Line bot App running on 8080');
});
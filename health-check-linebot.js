let linebot = require('linebot')
let fs = require('fs')
var https = require('https');
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = 0;

bot = linebot({
    channelId: '1582135355',
    channelSecret: 'b298c64c1fcea600bdd60fdd3dfec31a',
    channelAccessToken: 'OxUCCy/7uZzZp47OXVJ+ECS+Epgc95ndFPtaUg7Obu9GuEgK31cLrCmJiRJWqfEyijb/ETmBmQFjNZc3JJsnMrJh4ogdMLL687S8B7gLdaxKsMo7qh/3BN4AjXmUvDfrvHNYJ+toab+GmTG4G7oBLwdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
    let masterId = "C082408192da4c47ae5f54654196dffa2";
    let myId = "Ue4c93d4c9216495aeae09328ebb8aefe";
    console.log(event.message.text)

    schedule.scheduleJob('30 * * * * *', function() {
        console.log("test")
        https.get('https://chinapost.nownews.com/', function(res) {
            console.log("statusCode: ", res.statusCode); // <======= Here's the status code
            // console.log("headers: ", res.headers);
            if (res.statusCode != 200) {
                bot.push(masterId, 'CP炸掉 error code: '+res.statusCode);
                bot.push(myId, 'CP炸掉 error code: '+res.statusCode);
                console.log("chinapost error code: " + res.statusCode)
            } else {
                console.log(res.statusCode)
            }
        }).on('error', function(e) {
            console.error(e);
        });
    })
});

const linebotParser = bot.parser(),
    express = require('express');
app = express();
app.post('/webhook', linebotParser);
var http = require('http').Server(app);
var port = process.env.PORT || 5000;
app.use(express.static('public'));

http.listen(port, function() {
    console.log('My Line bot App running on 5000');
});

let linebot = require('linebot')
let fs = require('fs')
var https = require('https');
var schedule = require('node-schedule');
const fetch = require('node-fetch');

var rule = new schedule.RecurrenceRule();
// rule.minute = [0,5,10,15,20,25,30,35,40,45,50,55]; 
rule.minute = [0, 10, 20, 30, 40, 50];

bot = linebot({
    channelId: '1582135355',
    channelSecret: 'b298c64c1fcea600bdd60fdd3dfec31a',
    channelAccessToken: 'OxUCCy/7uZzZp47OXVJ+ECS+Epgc95ndFPtaUg7Obu9GuEgK31cLrCmJiRJWqfEyijb/ETmBmQFjNZc3JJsnMrJh4ogdMLL687S8B7gLdaxKsMo7qh/3BN4AjXmUvDfrvHNYJ+toab+GmTG4G7oBLwdB04t89/1O/w1cDnyilFU='
});

let masterId = "C082408192da4c47ae5f54654196dffa2";
let myId = "Ue4c93d4c9216495aeae09328ebb8aefe";

let hostname = [
    ['https://chinapost.nownews.com/', 'cn'],
    ['https://babyou.nownews.com/', 'babyou'],
    ['https://game.nownews.com/', 'game'],
    ['https://petsmao.nownews.com/', 'petsmao'],
    ['https://bobee.nownews.com/', 'bobee'],
    ['https://4wayvoice.nownews.com/', '4way']
]

bot.on('message', async function(event) {
    console.log(event.message.text)
});
schedule.scheduleJob(rule, async function() {
    for (var i = 0; i < hostname.length; i++) {
        const res = await fetch(hostname[i][0])
        if (res.status != 200) {
            bot.on('message', async function(event) {
                console.log(event.message.text)
                bot.push(masterId, hostname[i][1] + "炸掉RRRRRR error code: " + res.status);
                bot.push(myId, hostname[i][1] + "炸掉RRRRRR error code: " + res.status);
                console.log(hostname[i][1] + "error code: " + res.status)
            });
        }
    }
    console.log("所有網站都正常")
})

const linebotParser = bot.parser(),
    express = require('express');
app = express();
app.post('/webhook', linebotParser);
var http = require('http').Server(app);
var port = process.env.PORT || 5000;
app.use(express.static('public'));

app.post('/ram', function(req, res) {
    console.log("記憶體標高!")
    bot.push(masterId, "記憶體標高!");
});
app.post('/disk', function(req, res) {
    console.log("硬碟空間不夠!")
    bot.push(masterId, "硬碟空間不夠!");
});
app.post('/cpu', function(req, res) {
    console.log("CPU標高!")
    bot.push(masterId, "CPU標高!");
});


http.listen(port, function() {
    console.log('My Line bot App running on 5000');
});
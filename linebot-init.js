let linebot = require('linebot')
let fs = require('fs')
var schedule = require('node-schedule');

const bot = linebot({
    channelId: '1582135355',
    channelSecret: 'b298c64c1fcea600bdd60fdd3dfec31a',
    channelAccessToken: 'OxUCCy/7uZzZp47OXVJ+ECS+Epgc95ndFPtaUg7Obu9GuEgK31cLrCmJiRJWqfEyijb/ETmBmQFjNZc3JJsnMrJh4ogdMLL687S8B7gLdaxKsMo7qh/3BN4AjXmUvDfrvHNYJ+toab+GmTG4G7oBLwdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
    // console.log(event)
    var msg = event.message.text;
    let groupId = event.source.groupId;
    let userId = event.source.userId;
    let msgType = event.message.type;
    let linebotMsgArray = [];

    bot.getGroupMemberProfile(groupId, userId)
        .then((profile) => {
            let displayName = profile.displayName;
            let reqImage = "no image"
            var imgRandom = Math.random();
            if (msgType == "image") {
                bot.getMessageContent(event.message.id)
                    .then((imageBuffer) => {
                        // console.log(imageBuffer)
                        fs.writeFile('./path/to/' + imgRandom + '.jpg', imageBuffer, function (err) {
                            if (err) { console.log(err) }
                        });
                    }).catch((err) => {
                        console.log(err);
                    });
                reqImage = "https://domain.com/lineimg/" + imgRandom + ".jpg";
            } else if (msgType == "file") {
                console.log('get file');
                bot.getMessageContent(event.message.id)
                    .then((stream) => new Promise((resolve, reject) => {
                        const writable = fs.createWriteStream('/var/www/test/432.txt');
                        stream.pipe(writable);
                        stream.on('end', () => resolve('/var/www/test/432.txt'));
                        stream.on('error', reject);
                    }));
            }

            linebotMsgArray.push("groupId:" + groupId, "userId:" + userId, "msgType: " + msgType, "displayName: " + displayName + ":" + msg, "image:" + reqImage)
            // console.log(linebotMsgArray)
        }).catch((err) => {
            console.log(err);
        });

    if (msg == "test") {
        event.reply("tesasdfasfasdfasdft").then(function (data) {
            // success
            console.log(msg);
        }).catch(function (error) {
            // error
            console.log('error');
        });
    } else {
        event.reply(msg).then(function (data) {
            // success
            console.log(msg);
        }).catch(function (error) {
            // error
            console.log('error');
        });
    }
});

schedule.scheduleJob('0 0 9 * * *', function () {
    bot.push(masterId, message[0] + message[1] + message[2]);
})

const linebotParser = bot.parser(),
    express = require('express');
const app = express();
app.post('/webhook', linebotParser);
var http = require('http').Server(app);
var port = process.env.PORT || 5000;
app.use(express.static('public'));

http.listen(port, function () {
    console.log('My Line bot App running on 5000');
});

// 參考
// https://medium.com/@s1k2y37st/linebot%E7%B3%BB%E5%88%97-%E4%B8%80-%E8%81%8A%E5%A4%A9bot%E7%9A%84helloworld-echo-bot-ec93eb6c734e
// 官方 Gitgub文件
// https://github.com/boybundit/linebot
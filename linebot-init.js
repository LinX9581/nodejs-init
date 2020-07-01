let linebot = require('linebot')

bot = linebot({
    channelId: '',
    channelSecret: '',
    channelAccessToken: ''
});

bot.on('message', function(event) {

    var msg = event.message.text;
    let groupId = event.source.groupId;
    let userId = event.source.userId;
    let msgType = event.message.type;
    let linebotMsgArray = [];
    bot.getGroupMemberProfile(groupId, userId)
        .then((profile) => {
            let displayName = profile.displayName;
            linebotMsgArray.push("groupId:" + groupId, "userId:" + userId, "msgType: " + msgType, "displayName: " + displayName + ":" + msg)
            console.log(linebotMsgArray)
        }).catch((err) => {
            console.log(err);
        });

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

// 參考
// https://medium.com/@s1k2y37st/linebot%E7%B3%BB%E5%88%97-%E4%B8%80-%E8%81%8A%E5%A4%A9bot%E7%9A%84helloworld-echo-bot-ec93eb6c734e
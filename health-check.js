var https = require('https');
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = [0];

let hostname = [
    ['https://chinapost.nownews.com/', 'cn'],
    ['https://babyou.nownews.com/', 'babyou'],
    ['https://game.nownews.com/', 'game'],
    ['https://petsmao.nownews.com/', 'petsmao'],
    ['https://bobee.nownews.com/', 'bobee']
]

// schedule.scheduleJob(rule, function() {
for (var i = 0; i < 2; i++) {
    https.get(hostname[i][0], function(res) {
        console.log("statusCode: ", res.statusCode);
        if (res.statusCode != 200) {
            console.log("error code" + res.statusCode)
        } else {
            console.log(res.statusCode)
        }
    }).on('error', function(e) {
        console.error(e);
    });
}
// })
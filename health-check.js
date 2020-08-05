var https = require('https');
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = [0];

schedule.scheduleJob(rule, function() {
    https.get('https://chinapost.nownews.com/', function(res) {
        console.log("statusCode: ", res.statusCode); // <======= Here's the status code
        // console.log("headers: ", res.headers);
        if (res.statusCode != 200) {
            console.log("error code" + res.statusCode)
        } else {
            console.log(res.statusCode)
        }
    }).on('error', function(e) {
        console.error(e);
    });
})
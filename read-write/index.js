var fs = require('fs');
fs.writeFile('rtTraffic.txt', "rtActiveasdasdUserTmp", function(err) {
    if (err) throw err;
    console.log('write JSON into TEXT');
});
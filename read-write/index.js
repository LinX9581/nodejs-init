var fs = require('fs');
var a = [1, 3, 2, 5, 3, 4]
var rtAuJson = JSON.stringify(a);
fs.writeFile('rtTraffic.txt', rtAuJson, function(err) {
    if (err) throw err;
    console.log('write JSON into TEXT');
});
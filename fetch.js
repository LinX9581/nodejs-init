const fetch = require("node-fetch");
var key = "DLw(B5gMyvwY8sr5#ivKMC"
fetch('https://nowbot2.nownews.com/realtimeByTraffic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gakey: key
        })
    }).then(res => res.json())
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((err) => {
        console.log('Log: ', err);
    })
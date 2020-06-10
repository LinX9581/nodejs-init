const fetch = require("node-fetch");

var test = "123"
fetch('http://127.0.0.1:3000/uploads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gitkey: test
        })
    }).then(res => res.json())
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((err) => {
        console.log('錯誤: Achievement ', err);
    })
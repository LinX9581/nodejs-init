const fetch = require("node-fetch");
fetch('http://34.80.175.248:3000/uploads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "gitkey": "123"
        })
    }).then(res => res.json())
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((err) => {
        console.log('log ', err);
    })
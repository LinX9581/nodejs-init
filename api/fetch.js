const fetch = require("node-fetch");
// fetch('http://34.80.175.248:3000/uploads', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "gitkey": "123"
//     })
// }).then(res => res.json())
//     .then((jsonData) => {
//         console.log(jsonData)
//     })
//     .catch((err) => {
//         console.log('log ', err);
//     })


// fetch('https://nowbot2.nownews.com/gadata/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         "date": "2021-02-01",
//         "site": "babyou",
//     })
// }).then(res => res.json()).then((jsonData) => {
//     // console.log(jsonData)
//     // console.log(jsonData.gaData.page[0][0])
// })

// fetch('https://nowbot2.nownews.com/gadata/www?id=5178022&site=www&date=2021-01-31')
//     .then(res => res.json()).then((jsonData) => {
//         // console.log(jsonData)
//     })
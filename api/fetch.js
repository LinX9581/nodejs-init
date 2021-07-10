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
fetch('https://sit.linxnote.club/reInsert', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "gitkey": "2e9ea6f64122053dd711496d99091219eb15c438a532132f51297c15f75de7bf"
    })
}).then(res => res.json())
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((err) => {
        console.log('log ', err);
    })
// test()
async function test() {
    let postInfo = await fetch('http://uat.nownews.com/nn-client/api/v1/client/getPostAuthorInfo/5195277', {
        method: 'POST',
        headers: { 'Authorization': '980aef50ee3d1a9a09c48bdc8a9a87669250799582564813429c5712bac2eeeb' },
    }).then(res => res.json()).then((jsonData) => { return jsonData })

    console.log(postInfo)
}
// test()
async function test() {
    let postInfo = await fetch('http://uat.nownews.com/nn-client/api/v1/client/getPostAuthorInfo/5195277', {
        method: 'POST',
        headers: { 'Authorization': '980aef50ee3d1a9a09c48bdc8a9a87669250799582564813429c5712bac2eeeb' },
    }).then(res => res.json()).then((jsonData) => { return jsonData })

    console.log(postInfo)
}
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
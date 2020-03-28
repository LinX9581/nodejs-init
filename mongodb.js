var express = require('express');
var app = express();
var http = require('http').Server(app);
var MongoClient = require('mongodb').MongoClient;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});




var MongoClient = require('mongodb').MongoClient;
var DB_URL = 'mongodb://localhost:27017/student';

// Mongodb 第三版的 CRUD
var writeData = function(db, callback) {
    var dbo = db.db('t_sales');
    var data = { 'name': 'zhangsan', 'age': '30' };
    dbo.collection('t_sales').insertOne(data, function(error, result) {
        if (error) {
            //console.log('错误：' + error);
            return;
        };

        callback(result);
    });
}

MongoClient.connect(DB_URL, function(error, db) {
    console.log('连接成功！');
    writeData(db, function(result) {
        //console.log(result);
        db.close();
    });
});

// Mongodb 第二版的 CRUD

// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/mymondb", function(err, db) {

//     if (err) throw err;
//     // Write databse Insert/Update/Query code here..

//     var dbo = db.db('Persons');
//     dbo.collection('Persons', function(err, collection) {
//         collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
//         collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
//         collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

//         collection.count(function(err, count) {
//             if (err) throw err;
//             console.log('Total Rows:' + count);
//         });
//     });
//     db.close(); //關閉連線
// });


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

http.listen(port, host, function() {
    console.log("Server started.......");
});
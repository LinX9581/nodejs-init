var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public')); //靜態檔案放置區

app.get('/', function(req, res) {
    res.send('Hsdfsdfasasdasdasddasde!');
    // res.sendFile(__dirname + '/index.html');
});
app.post('/uploads', function(req, res) {
    console.log("true")
    if(req=="123")
    {
        console.log("Git Pull")
        exec(`git pull`, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
    
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

http.listen(port, host, function() {
    console.log("Server started.......");
});
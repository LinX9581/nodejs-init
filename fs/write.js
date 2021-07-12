import { createReadStream } from 'fs';
import express from 'express';
const app = express();
var readStream = createReadStream('./fs/dump.txt');
// app.get('/', (req, res) => {
//     readStream.on('data', (data) => {
//         res.write(data);
//     });
//     readStream.on('end', (data) => {
//         res.status(200).send();
//     });
// });
app.get('/', (req, res) => {
    readStream.pipe(res);
    setTimeout(() => {
        readStream.unpipe(res);
        res.status(200).send();
    }, 10);
});
app.listen(3000);
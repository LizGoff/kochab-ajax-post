const express = require('express');
const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');
// const listRecords = require('./server/records');


app.use(express.static('server/public'));

app.get('/records');

// app.get('/record-collection', (req, res) => {
//     res.send(recordCollection);
// });

app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');
// const listRecords = require('./server/records');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/records');

app.get('/records', (req, res) => {
    res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
    console.log(req.body);
    recordCollection.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
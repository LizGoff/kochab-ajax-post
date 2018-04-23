const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const recordRouter = require('./routes/record.route');

// const listRecords = require('./server/records');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/record', recordRouter);
// app.get('/records');

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
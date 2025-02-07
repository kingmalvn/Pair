const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/code', code);

// مسیر برای فایل pair.html
app.use('/pair', async (req, res, next) => {
    res.sendFile(__path + '/pair.html');
});

// مسیر برای فایل pair.html
app.use('/qr', async (req, res, next) => {
    res.sendFile(__path + '/qr.html');
});

app.use('/check', async (req, res, next) => {
    res.sendFile(__path + '/checker.html');
});


app.use('/checkk', async (req, res, next) => {
    res.sendFile(__path + '/checkerr.html');
});

// مسیر برای فایل اصلی index.html
app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`⏩ Server running on http://localhost:` + PORT);
});

module.exports = app;
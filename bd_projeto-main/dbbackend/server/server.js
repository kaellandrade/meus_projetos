const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use((req, res, next) => {
    // console.log('Acessou o Middleware!');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "X-Resquested-With, content-type")
    app.use(cors());
    next();
})


// mudar a porta do frontend para 8080
app.use('/', require('./router/Router'));

https.createServer({
    cert: fs.readFileSync('mycertserver.crt'),
    key: fs.readFileSync('meykeyserver.key')
}, app).listen(3000);



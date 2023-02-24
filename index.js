const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

let allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://projeto-camara.vercel.app/");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCors);
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);
app.use('/uploads', cors(), express.static('uploads'));

app.use('/', cors(), router);

app.listen(port);
console.log('API funcionando!');
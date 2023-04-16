const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

app.use(cors({
    origin: ['https://cesistemaslegislativo.com.br'],
    "methods": "GET,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));
app.use(bodyParser.json({ limit: '250mb' }));
app.use(bodyParser.urlencoded({ limit: '250mb', extended: true }));
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);

app.use('/uploads', express.static('uploads'));

app.use('/', router);
//app.use('/', cors(), router);

app.listen(port);
console.log('API funcionando!');
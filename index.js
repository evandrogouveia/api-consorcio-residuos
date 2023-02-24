const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

app.use(cors({
    origin: '*',
    allowedHeaders: [
        'Access-Control-Allow-Origin: https://api-camara.vercel.app',
        'Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE',
        'Access-Control-Allow-Headers: *'
    ]
}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);
app.use('/uploads', cors(), express.static('uploads'));

app.use('/', cors(), router);

app.listen(port);
console.log('API funcionando!');
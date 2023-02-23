const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

app.use(cors({origin: "*"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);
app.use('/uploads', express.static('uploads'));

app.use('/', router);

app.listen(port);
console.log('API funcionando!');
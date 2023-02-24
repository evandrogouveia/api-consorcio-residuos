const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();
const allowedOrigins = [
    'http://localhost:4200',
    'https://api-camara.vercel.app',
    'https://projeto-camara.vercel.app/'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
};
app.options('*', cors(corsOptions));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);
app.use('/uploads', cors(corsOptions), express.static('uploads'));

app.use('/', cors(corsOptions), router);

app.listen(port);
console.log('API funcionando!');
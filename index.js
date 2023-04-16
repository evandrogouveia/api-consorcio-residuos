const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
});
app.use(cors({origin: '*'}));
app.use(bodyParser.json({limit: '250mb'}));
app.use(bodyParser.urlencoded({limit: '250mb', extended: true }));
app.use(cookieParser());

const router = require('./src/routes');
app.use(router);
app.use('/uploads', cors(), express.static('uploads'));

app.use('/api-camara/', cors(), router);
//app.use('/', cors(), router);

app.listen(port);
console.log('API funcionando!');
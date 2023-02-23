const mysql = require('mysql2');

const connection = mysql.createConnection({
    multipleStatements: true,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou');
});

module.exports = connection;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '177.234.150.58',
    port: '3306',
    user: 'ce180037_camara',
    password: 'c@m@ra2088*&99Gw0',
    database: 'ce180037_camara'
});

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('conectou');
    createTable(connection);
});

function createTable(conn) {

     /* CRIAR TABELA DE CARGOS*/
     const sqlRoles = "CREATE TABLE IF NOT EXISTS roles (\n"+
     "ID int NOT NULL AUTO_INCREMENT,\n"+
     "description varchar(150) NOT NULL,\n"+
     "symbology varchar(150),\n"+
     "exerciseSchedule varchar(50),\n"+
     "serviceLocation varchar(50),\n"+
     "jobAttributes varchar(20),\n"+
     "PRIMARY KEY (ID)\n"+
     ");";

    /* CRIAR TABELA DE AGENTE PÚBLICO */
    const sqlAgents = "CREATE TABLE IF NOT EXISTS agents (\n"+
    "ID int NOT NULL AUTO_INCREMENT,\n"+
    "photo varchar(150),\n"+
    "name varchar(150) NOT NULL,\n"+
    "cognam varchar(50) NOT NULL,\n"+
    "birthDate varchar(20),\n"+
    "email varchar(50) NOT NULL,\n"+
    "cpf varchar(50),\n"+
    "role varchar(50) NOT NULL,\n"+
    "phone varchar(20),\n"+
    "identityNumber varchar(50),\n"+
    "identityOrgan varchar(50),\n"+
    "identityUf varchar(50),\n"+
    "issuanceDate varchar(50),\n"+
    "naturalness varchar(50),\n"+
    "biography varchar(50),\n"+
    "address JSON,\n"+
    "bankDetails JSON,\n"+
    "PRIMARY KEY (ID)\n"+
    ");";

    /* CRIAR TABELA DE CATEGORIAS DE NOTÍCIAS*/
    const sqlNewsCategory = "CREATE TABLE IF NOT EXISTS newsCategory (\n"+
    "ID int NOT NULL AUTO_INCREMENT,\n"+
    "name varchar(150) NOT NULL,\n"+
    "description varchar(150),\n"+
    "PRIMARY KEY (ID)\n"+
    ");";

    /* CRIAR TABELA DE NOTÍCIAS*/
    const sqlNews = "CREATE TABLE IF NOT EXISTS news (\n"+
    "ID int NOT NULL AUTO_INCREMENT,\n"+
    "title varchar(150) NOT NULL,\n"+
    "subtitle varchar(150),\n"+
    "highlightedImage varchar(150),\n"+
    "description varchar(150),\n"+
    "categories JSON,\n"+
    "publicationDate varchar(150),\n"+
    "views int,\n"+
    "author varchar(150),\n"+
    "comments JSON,\n"+
    "PRIMARY KEY (ID)\n"+
    ");";


    conn.query(sqlNews, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela');
        connection.end();
    });
    
}
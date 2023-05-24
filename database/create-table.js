const mysql = require('mysql2');

const pool = mysql.createPool({
    multipleStatements: true,
    host: '185.169.99.137',
    port: '3306',
    user: 'ce180037_consorc',
    password: 'c@m@ra2088*&99Gw0',
    database: 'ce180037_consorcio',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
});

pool.getConnection(function (err) {
    if (err) return console.log(err);
    console.log('conectou');
    createTable(pool);
});

function createTable(conn) {
      /* CRIAR TABELA DA HOME (CONSORCIO)*/
      const sqlHome = "CREATE TABLE IF NOT EXISTS home(\n" +
      "ID int NOT NULL AUTO_INCREMENT,\n" +
      "banner1 varchar(200),\n" +
      "banner2 varchar(200),\n" +
      "banner3 varchar(200),\n" +
      "banner4 varchar(200),\n" +
      "banner5 varchar(200),\n" +
      "banner6 varchar(200),\n" +
      "categories JSON,\n" +
      "PRIMARY KEY (ID)\n" +
      ");";
    

    /* CRIAR TABELA DE MUNICIPIOS (CONSORCIO) */
    const sqlMunicipios = "CREATE TABLE IF NOT EXISTS municipios(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "arms varchar(200),\n" +
        "name varchar(150),\n" +
        "foundation varchar(150),\n" +
        "politicalEmancipation varchar(150),\n" +
        "gentile varchar(150),\n" +
        "federativeUnit varchar(150),\n" +
        "mesoregion varchar(150),\n" +
        "microregion varchar(150),\n" +
        "cityHallWebsite varchar(150),\n" +
        "description varchar(30000),\n" +
        "area varchar(150),\n" +
        "estimatedPopulation varchar(150),\n" +
        "density varchar(150),\n" +
        "altitude varchar(150),\n" +
        "climate varchar(150),\n" +
        "timeZone varchar(150),\n" +
        "distanceCapital varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE POLOS (CONSORCIO) */
    const sqlPolos = "CREATE TABLE IF NOT EXISTS polos(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150),\n" +
        "subtitle varchar(350),\n" +
        "institutional JSON,\n" +
        "contacts JSON,\n" +
        "address JSON,\n" +
        "functions varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    /* CRIAR TABELA DA CONSORCIO (CONSORCIO)*/
    const sqlConsorcio = "CREATE TABLE IF NOT EXISTS consorcio (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150),\n" +
        "email varchar(150),\n" +
        "phone varchar(50),\n" +
        "horary varchar(150),\n" +
        "president varchar(150),\n" +
        "address JSON,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    /* CRIAR TABELA DE CATEGORIAS DE NOTÍCIAS (CONSORCIO)*/
    const sqlConsorcioNewsCategory = "CREATE TABLE IF NOT EXISTS newsConsorcioCategory (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150) NOT NULL,\n" +
        "description varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE NOTÍCIAS (CONSORCIO) */
    const sqlConsorcioNews = "CREATE TABLE IF NOT EXISTS newsConsorcio (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(250) NOT NULL,\n" +
        "subtitle varchar(450),\n" +
        "highlightedImage varchar(150),\n" +
        "description varchar(6000),\n" +
        "categories JSON,\n" +
        "publicationDate varchar(150),\n" +
        "views int,\n" +
        "author varchar(150),\n" +
        "comments JSON,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    /* CRIAR TABELA DE PROCESSO SELETIVO (CONSORCIO) */
    const sqlProcessoSeletivo = "CREATE TABLE IF NOT EXISTS processoseletivo(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "typeFile varchar(150),\n" +
        "typeFileID int,\n" +
        "date varchar(50),\n" +
        "exercise varchar(50),\n" +
        "secretary varchar(200),\n" +
        "file varchar(500),\n" +
        "description varchar(6000),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    /* CRIAR TABELA DE CATEGORIAS DE PROCESSO SELETIVO (CONSORCIO)*/
    const sqlPsCategory = "CREATE TABLE IF NOT EXISTS psCategory (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150) NOT NULL,\n" +
        "exercise varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE CONTRATOS DE RATEIO (CONSORCIO) */
    const sqlContratos = "CREATE TABLE IF NOT EXISTS contratosRateio(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150),\n" +
        "date varchar(50),\n" +
        "secretary varchar(200),\n" +
        "file JSON,\n" +
        "description varchar(6000),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE ATAS (CONSORCIO) */
    const sqlAtas = "CREATE TABLE IF NOT EXISTS atas(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150),\n" +
        "date varchar(50),\n" +
        "secretary varchar(200),\n" +
        "file JSON,\n" +
        "description varchar(6000),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DA TRANSPARÊNCIA (CONSORCIO)*/
    const sqlTransparencyConsorcio = "CREATE TABLE IF NOT EXISTS transparencyConsorcio (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150),\n" +
        "subTitle varchar(150),\n" +
        "description varchar(250),\n" +
        "section1 JSON,\n" +
        "section2 JSON,\n" +
        "section3 JSON,\n" +
        "section4 JSON,\n" +
        "section5 JSON,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE LICITAÇÕES (CONSORCIO) */
    const sqlLicitacoes = "CREATE TABLE IF NOT EXISTS licitacoes(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150),\n" +
        "processNumber varchar(150),\n" +
        "type varchar(150),\n" +
        "openingDate varchar(50),\n" +
        "publicationDate varchar(50),\n" +
        "estimatedValue varchar(150),\n" +
        "description varchar(6000),\n" +
        "file JSON,\n" +
        "comissionPresident varchar(200),\n" +
        "responsibleInformin varchar(200),\n" +
        "responsibleTecnicalOpinion varchar(200),\n" +
        "responsibleAward varchar(200),\n" +
        "responsibleHomologation varchar(200),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE ANDAMENTO LICITAÇÃO (CONSORCIO) */
    const sqlProgress = "CREATE TABLE IF NOT EXISTS progress(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "licitacaoID int,\n" +
        "date varchar(50),\n" +
        "hour varchar(50),\n" +
        "phase varchar(150),\n" +
        "situation varchar(150),\n" +
        "responsible varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    /* CRIAR TABELA DE USUÁRIOS (CONSORCIO) */
    const sqlUsersConsorcio = "CREATE TABLE IF NOT EXISTS users_consorcio (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "email varchar(50),\n" +
        "senha varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    /* CRIAR TABELA DE CONFIGURAÇÕES (CONSORCIO) */
    const sqlConfiguracoes = "CREATE TABLE IF NOT EXISTS configuracoes(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "temaGeral JSON,\n" +
        "botoes JSON,\n" +
        "rodape JSON,\n" +
        "rodapeInferior JSON,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";


    conn.query(sqlConfiguracoes, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela');
        pool.end();
    });

}
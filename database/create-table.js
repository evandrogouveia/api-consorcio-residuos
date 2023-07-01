const mysql = require('mysql2');

const pool = mysql.createPool({
    multipleStatements: true,
    host: '185.169.99.137',
    port: '3306',
    user: 'ce180037_consorcio_residuos',
    password: 'T2qK25@ZKUiX',
    database: 'ce180037_consorcio_residuos',
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
    /* CRIAR TABELA DO HEADER*/
    const sqlHeader = "CREATE TABLE IF NOT EXISTS header(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "logo varchar(200),\n" +
        "background varchar(200),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlHeader, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela header');
    });


    /* CRIAR TABELA DA HOME (CONSORCIO)*/
    const sqlHome = "CREATE TABLE IF NOT EXISTS home(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "banners JSON,\n" +
        "categories JSON,\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlHome, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela home');
    });


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

    conn.query(sqlMunicipios, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela municipios');
    });

    /* CRIAR TABELA DE POLOS (CONSORCIO) */
    const sqlPolos = "CREATE TABLE IF NOT EXISTS polos(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "image varchar(250),\n" +
        "title varchar(150),\n" +
        "subtitle varchar(350),\n" +
        "institutional JSON,\n" +
        "contacts JSON,\n" +
        "address JSON,\n" +
        "functions varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlPolos, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela polos');
    });


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

    conn.query(sqlConsorcio, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela consorcio');
    });


    /* CRIAR TABELA DE CATEGORIAS DE NOTÍCIAS (CONSORCIO)*/
    const sqlConsorcioNewsCategory = "CREATE TABLE IF NOT EXISTS newsConsorcioCategory (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150) NOT NULL,\n" +
        "description varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlConsorcioNewsCategory, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela newConsorcioCategory');
    });

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

    conn.query(sqlConsorcioNews, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela newsConsorcio');
    });

    /* CRIAR TABELA DE VÍDEOS*/
    const sqlVideos = "CREATE TABLE IF NOT EXISTS videos (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "title varchar(150) NOT NULL,\n" +
        "link varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlVideos, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela videos');
    });


    /* CRIAR TABELA DE PROCESSO SELETIVO (CONSORCIO) */
    const sqlProcessoSeletivo = "CREATE TABLE IF NOT EXISTS processoseletivo(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "typeFile varchar(150),\n" +
        "typeFileID int,\n" +
        "date varchar(50),\n" +
        "exercise varchar(50),\n" +
        "secretary varchar(200),\n" +
        "file JSON,\n" +
        "description varchar(6000),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlProcessoSeletivo, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela processoseletivo');
    });


    /* CRIAR TABELA DE CATEGORIAS DE PROCESSO SELETIVO (CONSORCIO)*/
    const sqlPsCategory = "CREATE TABLE IF NOT EXISTS psCategory (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "name varchar(150) NOT NULL,\n" +
        "exercise varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlPsCategory, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela psCategory');
    });

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

    conn.query(sqlContratos, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela contratosRateio');
    });

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

    conn.query(sqlAtas, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela atas');
    });

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

    conn.query(sqlTransparencyConsorcio, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela transparencyConsorcio');
    });

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

    conn.query(sqlLicitacoes, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela licitacoes');
    });

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

    conn.query(sqlProgress, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela progress');
    });


    /* CRIAR TABELA DE USUÁRIOS (CONSORCIO) */
    const sqlUsersConsorcio = "CREATE TABLE IF NOT EXISTS users_consorcio (\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "email varchar(50),\n" +
        "senha varchar(150),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlUsersConsorcio, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela users_consorcio');
    });

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
        console.log('criou a tabela configuracoes');
    });

    /* CRIAR TABELA DE LRF*/
    const sqlLrf = "CREATE TABLE IF NOT EXISTS lrf(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "typeFile varchar(150),\n" +
        "date varchar(50),\n" +
        "exercise varchar(50),\n" +
        "secretary varchar(150),\n" +
        "competence varchar(150),\n" +
        "file varchar(200),\n" +
        "description varchar(5000),\n" +
        "acronym varchar(20),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlLrf, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela lrf');
    });

    /* CRIAR TABELA DE LEIS*/
    const sqlLeis = "CREATE TABLE IF NOT EXISTS leis(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "typeFile varchar(150),\n" +
        "date varchar(50),\n" +
        "exercise varchar(50),\n" +
        "number int,\n" +
        "file varchar(200),\n" +
        "description varchar(5000),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlLeis, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela leis');
    });

    /* CRIAR TABELA DE ARQUIVOS DE POLO*/
    const sqlArquivosPolo = "CREATE TABLE IF NOT EXISTS arquivos_polo(\n" +
        "ID int NOT NULL AUTO_INCREMENT,\n" +
        "typeFile varchar(150),\n" +
        "title varchar(250),\n" +
        "date varchar(50),\n" +
        "exercise varchar(50),\n" +
        "secretary varchar(150),\n" +
        "competence varchar(150),\n" +
        "file varchar(200),\n" +
        "description varchar(5000),\n" +
        "acronym varchar(20),\n" +
        "PRIMARY KEY (ID)\n" +
        ");";

    conn.query(sqlArquivosPolo, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela arquivos_polo');
        pool.end();
    });

}
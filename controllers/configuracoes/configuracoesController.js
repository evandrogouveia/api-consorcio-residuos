const connection = require('../../database/connection');

module.exports = {
     novaConfiguracao(req, res) {
        const temaGeral = req.body.temaGeral || '';
        const botoes = req.body.botoes || '';
        const rodape = req.body.rodape || '';
        const rodapeInferior = req.body.rodapeInferior || '';
       
        const novaConfiguracao = `INSERT INTO configuracoes(
            temaGeral,
            botoes,
            rodape, 
            rodapeInferior
            ) VALUES (
                '${JSON.stringify(temaGeral)}',
                '${JSON.stringify(botoes)}', 
                '${JSON.stringify(rodape)}', 
                '${JSON.stringify(rodapeInferior)}'
            )`;

        connection.query(novaConfiguracao, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao cadastrar dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    getConfiguracoes(req, res) {
        const selectConfiguracoes = `SELECT * FROM configuracoes`;

        connection.query(selectConfiguracoes, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    updateConfiguracoes(req, res) {
        const id = parseInt(req.params.id);
        const temaGeral = req.body.temaGeral || '';
        const botoes = req.body.botoes || '';
        const rodape = req.body.rodape || '';
        const rodapeInferior = req.body.rodapeInferior || '';

        const updateConfiguracoes= 'UPDATE `configuracoes` SET `temaGeral`= ?,' +
            '`botoes`= ?,' +
            '`rodape`= ?,' +
            '`rodapeInferior`= ?' +
            'WHERE `configuracoes`.`ID`= ?';

        connection.query(updateConfiguracoes, 
            [
                JSON.stringify(temaGeral), 
                JSON.stringify(botoes),
                JSON.stringify(rodape),
                JSON.stringify(rodapeInferior),
                id
            ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro atualizar dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },
}
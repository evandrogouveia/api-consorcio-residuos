const connection = require('../../database/connection');

module.exports = {
    //cadastra um novo polo
    newPolo(req, res) {
        const title = req.body.title || '';
        const subtitle = req.body.subtitle || '';
        const institutional = req.body.institutional || '';
        const contacts = req.body.contacts || '';
        const address = req.body.address || '';
        const functions = req.body.functions || '';

        const newPolo = `INSERT INTO polos(
            title,
            subtitle, 
            institutional,
            contacts,
            address,
            functions
            ) VALUES (
                '${title}',
                '${subtitle}', 
                '${JSON.stringify(institutional)}', 
                '${JSON.stringify(contacts)}',
                '${JSON.stringify(address)}',
                '${functions}'
            )`;

        connection.query(newPolo, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao inserir polo', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    //retorna todos os polos
    getPolos(req, res) {
        const selectPolos = `SELECT * FROM polos ORDER BY title`;

        connection.query(selectPolos, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter polos', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    //atualiza o polo
    updatePolo(req, res) {
        const id = parseInt(req.params.id);
        const title = req.body.title;
        const subtitle = req.body.subtitle;
        const institutional = req.body.institutional;
        const contacts = req.body.contacts;
        const address = req.body.address;
        const functions = req.body.functions;

        const updatePolo = 'UPDATE `polos` SET `title`= ?,' +
            '`subtitle`= ?,' +
            '`institutional`= ?,' +
            '`contacts`= ?,' +
            '`address`= ?,' +
            '`functions`= ?' +
            'WHERE `polos`.`ID`= ?';

        connection.query(updatePolo, 
            [
                title, 
                subtitle,
                JSON.stringify(institutional),
                JSON.stringify(contacts),
                JSON.stringify(address),
                functions,
                id
            ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro atualizar o polo', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },

    //deleta o polo
    deletePolo(req, res) {
        const id = parseInt(req.params.id);
        const deletePolo = `DELETE FROM polos WHERE ID = ?`;

        connection.query(deletePolo, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir polo', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
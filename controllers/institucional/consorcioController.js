const connection = require('../../database/connection');

module.exports = {
     //cadastra dados da consorcio
     newConsorcio(req, res) {
        const name = req.body.name;
        const email = req.body.email || '';
        const phone = req.body.phone || '';
        const horary = req.body.horary || '';
        const president = req.body.president || '';
        const address = req.body.address || '';
       
        const newConsorcio = `INSERT INTO consorcio(
            name,
            email,
            phone, 
            horary,
            president,
            address
            ) VALUES (
                '${name}',
                '${email}', 
                '${phone}', 
                '${horary}',
                '${president}',
                '${JSON.stringify(address)}'
            )`;

        connection.query(newConsorcio, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao cadastrar dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    //retorna dados da consorcio
    getConsorcio(req, res) {
        const selectConsorcio = `SELECT * FROM consorcio`;

        connection.query(selectConsorcio, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    //atualiza dados do consorcio
    updateConsorcio(req, res) {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const email = req.body.email || '';
        const phone = req.body.phone || '';
        const horary = req.body.horary || '';
        const president = req.body.president || '';
        const address = req.body.address || '';

        const updateConsorcio = 'UPDATE `consorcio` SET `name`= ?,' +
            '`email`= ?,' +
            '`phone`= ?,' +
            '`horary`= ?,' +
            '`president`= ?,' +
            '`address`= ?' +
            'WHERE `consorcio`.`ID`= ?';

        connection.query(updateConsorcio, 
            [
                name, 
                email,
                phone,
                horary,
                president,
                JSON.stringify(address),
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
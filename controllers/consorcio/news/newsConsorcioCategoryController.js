const connection = require('../../../database/connection');

module.exports = {
     //cadastra uma nova categoria
     newConsorcioCategory(req, res) {
        const name = req.body.name;
        const description = req.body.description || '';

        const newCategory = `INSERT INTO newsConsorcioCategory(
            name,
            description
            ) VALUES (
                '${name}',
                '${description}'
            )`;

        connection.query(newCategory, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao inserir categoria', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    //retorna todos as categorias
    getConsorcioCategories(req, res) {
        const selectCategories = `SELECT * FROM newsConsorcioCategory ORDER BY ID DESC`;

        connection.query(selectCategories, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter categorias', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    //atualiza a categoria
    updateConsorcioCategory(req, res) {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const description = req.body.description || '';

        const updateCategory = 'UPDATE `newsConsorcioCategory` SET `name`= ?,' +
            '`description`= ?' +
            'WHERE `newsConsorcioCategory`.`ID`= ?';

        connection.query(updateCategory, 
            [
                name,
                description, 
                id
            ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro atualizar categoria', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },

    //delete uma categoria
    deleteConsorcioCategory(req, res) {
        const id = parseInt(req.params.id);
        const deleteCategory = `DELETE FROM newsConsorcioCategory WHERE ID = ?`;

        connection.query(deleteCategory, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir categoria', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
const connection = require('../../../database/connection');

module.exports = {
     //cadastra uma nova categoria
     newPsCategory(req, res) {
        const name = req.body.name;
        const exercise = req.body.exercise || '';

        const newCategory = `INSERT INTO psCategory(
            name,
            exercise
            ) VALUES (
                '${name}',
                '${exercise}'
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
    getPsCategories(req, res) {
        const selectCategories = `SELECT * FROM psCategory ORDER BY ID DESC`;

        connection.query(selectCategories, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter categorias', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    //atualiza a categoria
    updatePsCategory(req, res) {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const exercise = req.body.exercise || '';

        const updateCategory = 'UPDATE `psCategory` SET `name`= ?,' +
            '`exercise`= ?' +
            'WHERE `psCategory`.`ID`= ?';

        connection.query(updateCategory, 
            [
                name,
                exercise, 
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
    deletePsCategory(req, res) {
        const id = parseInt(req.params.id);
        const deleteCategory = `DELETE FROM psCategory WHERE ID = ?`;

        connection.query(deleteCategory, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir categoria', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
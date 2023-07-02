const connection = require('../../database/connection');
const multer = require('multer');
let fs = require('fs-extra');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            let path = `./uploads/estatuto`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path); //gera o diretório automaticamente
            }
            cb(null, path);
        },
        filename: function (req, files, cb) {
            cb(null, `${Date.now()}-${files.originalname}`);
        }
    }),


    newEstatuto(req, res) {
        let dataForm = JSON.parse(req.body.formEstatuto);
        
        const title = dataForm.title;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const file = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio-residuos/uploads/estatuto/${req.files[0]?.filename}` : '';
        const description = dataForm.description || '';

        const newEstatuto = `INSERT INTO estatuto(
            title,
            date, 
            exercise,
            file,
            description
            ) VALUES (
                '${title}',
                '${date}', 
                '${exercise}',
                '${file}',
                '${description}'
            )`;

        connection.query(newEstatuto, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao inserir estatuto', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    getAllEstatuto(req, res) {
        const selectEstatuto = `SELECT * FROM estatuto ORDER BY date DESC`;

        connection.query(selectEstatuto, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter estatutos', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },
    
    updateEstatuto(req, res) {
        const id = parseInt(req.params.id);
        let dataForm = JSON.parse(req.body.formEstatuto);
        
        const title = dataForm.title;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const file = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio-residuos/uploads/estatuto/${req.files[0]?.filename}` : dataForm.file;
        const description = dataForm.description || '';

        const updateEstatuto = 'UPDATE `estatuto` SET `title`= ?,' +
            '`date`= ?,' +
            '`exercise`= ?,' +
            '`file`= ?,' +
            '`description`= ?' +
            'WHERE `estatuto`.`ID`= ?';

        connection.query(updateEstatuto, [
            title,
            date,
            exercise,
            file,
            description,
            id
        ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ message: 'Erro ao atualizar estatuto', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'Lrf atualizada!' });
            }
        });
    },

    deleteEstatuto(req, res) {
        const id = parseInt(req.params.id);
        const deleteEstatuto = `DELETE FROM estatuto WHERE ID = ?`;

        connection.query(deleteEstatuto, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir estatuto', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
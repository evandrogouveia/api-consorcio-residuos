const connection = require('../../database/connection');
const multer = require('multer');
let fs = require('fs-extra');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            let path = `./uploads/protocolo_intencoes`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path); //gera o diretório automaticamente
            }
            cb(null, path);
        },
        filename: function (req, files, cb) {
            cb(null, `${Date.now()}-${files.originalname}`);
        }
    }),


    newProtocoloIntencoes(req, res) {
        let dataForm = JSON.parse(req.body.formProtocoloIntencoes);
        
        const title = dataForm.title;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const file = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio-residuos/uploads/protocolo_intencoes/${req.files[0]?.filename}` : '';
        const description = dataForm.description || '';

        const newProtocoloIntencoes = `INSERT INTO protocolo_intencoes(
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

        connection.query(newProtocoloIntencoes, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao inserir protocolo', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    getAllProtocoloIntencoes(req, res) {
        const selectProtocoloIntencoes = `SELECT * FROM protocolo_intencoes ORDER BY date DESC`;

        connection.query(selectProtocoloIntencoes, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter protocolo', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },
    
    updateProtocoloIntencoes(req, res) {
        const id = parseInt(req.params.id);
        let dataForm = JSON.parse(req.body.formProtocoloIntencoes);
        
        const title = dataForm.title;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const file = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio-residuos/uploads/protocolo_intencoes/${req.files[0]?.filename}` : dataForm.file;
        const description = dataForm.description || '';

        const updateProtocoloIntencoes = 'UPDATE `protocolo_intencoes` SET `title`= ?,' +
            '`date`= ?,' +
            '`exercise`= ?,' +
            '`file`= ?,' +
            '`description`= ?' +
            'WHERE `protocolo_intencoes`.`ID`= ?';

        connection.query(updateProtocoloIntencoes, [
            title,
            date,
            exercise,
            file,
            description,
            id
        ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ message: 'Erro ao atualizar protocolo_intencoes', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'Protocolo atualizado!' });
            }
        });
    },

    deleteProtocoloIntencoes(req, res) {
        const id = parseInt(req.params.id);
        const deleteProtocoloIntencoes = `DELETE FROM protocolo_intencoes WHERE ID = ?`;

        connection.query(deleteProtocoloIntencoes, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir protocolo', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
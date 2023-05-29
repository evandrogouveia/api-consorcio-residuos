const connection = require('../../database/connection');
const multer = require('multer');
let fs = require('fs-extra');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            let path = `./uploads/processo_seletivo`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path); //gera o diretório automaticamente
            }
            cb(null, path);
        },
        filename: function (req, files, cb) {
            cb(null, `${Date.now()}-${files.originalname}`);
        }
    }),


    newProcessoSeletivo(req, res) {
        let dataForm = JSON.parse(req.body.formProcessoSeletivo);

        const arrayFile = [];
        for(const file of req.files) {
            arrayFile.push(`${process.env.BASE_URL}/api-consorcio/uploads/processo_seletivo/${file?.filename}`)
        }

        const typeFile = dataForm.typeFile;
        const typeFileID = dataForm.typeFileID;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const secretary = dataForm.secretary || '';
        const file = arrayFile;
        const description = dataForm.description || '';

        const newProcessoSeletivo = `INSERT INTO processoseletivo(
            typeFile,
            typeFileID,
            date, 
            exercise,
            secretary,
            file,
            description
            ) VALUES (
                '${typeFile}',
                '${typeFileID}',
                '${date}', 
                '${exercise}', 
                '${secretary}',
                '${JSON.stringify(file)}',
                '${description}'
            )`;

        connection.query(newProcessoSeletivo, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao inserir dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

    getAllProcessoSeletivo(req, res) {
        const selectProcessoSeletivo = `SELECT * FROM processoseletivo ORDER BY ID DESC`;

        connection.query(selectProcessoSeletivo, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },
    
    updateProcessoSeletivo(req, res) {
        const id = parseInt(req.params.id);
        let dataForm = JSON.parse(req.body.formLrf);

        const arrayFile = [];
        for(const file of req.files) {
            arrayFile.push(`${process.env.BASE_URL}/api-consorcio/uploads/processo_seletivo/${file?.filename}`)
        }
        
        const typeFile = dataForm.typeFile;
        const typeFileID = dataForm.typeFileID;
        const date = dataForm.date || '';
        const exercise = dataForm.exercise || '';
        const secretary = dataForm.secretary || '';
        const file = arrayFile.length > 0 ? arrayFile : dataForm.file;
        const description = dataForm.description || '';

        const updateProcessoSeletivo = 'UPDATE `processoseletivo` SET `typeFile`= ?,' +
            '`typeFileID`= ?,' +
            '`date`= ?,' +
            '`exercise`= ?,' +
            '`secretary`= ?,' +
            '`file`= ?,' +
            '`description`= ?' +
            'WHERE `processoseletivo`.`ID`= ?';

        connection.query(updateProcessoSeletivo, [
            typeFile,
            typeFileID,
            date,
            exercise,
            secretary,
            JSON.stringify(file),
            description,
            id
        ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ message: 'Erro ao atualizar dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'Dados atualizado!' });
            }
        });
    },

    deleteProcessoSeletivo(req, res) {
        const id = parseInt(req.params.id);
        const deleteProcessoSeletivo = `DELETE FROM processoseletivo WHERE ID = ?`;

        connection.query(deleteProcessoSeletivo, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
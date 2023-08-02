const connection = require('../../database/connection');
const multer = require('multer');
let fs = require('fs-extra');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            let path = `./uploads/footer`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path); //gera o diretório automaticamente
            }
            cb(null, path);
        },
        filename: function (req, files, cb) {
            cb(null, `${Date.now()}-${files.originalname}`);
        }
    }),

    registerFooter(req, res) {
        let dataForm = JSON.parse(req.body.formFooter);

        let logo;
        const endereco = dataForm.endereco;
        const telefone = dataForm.telefone;
        const email = dataForm.email;
        const funcionamento = dataForm.funcionamento;
        const link1 = dataForm.link1;
        const link2 = dataForm.link2;
        const link3 = dataForm.link3;
        const link4 = dataForm.link4;
        const copyright = dataForm.copyright;

        if (req.files.logo) { logo = `${process.env.BASE_URL}/uploads/footer/${req.files.logo[0]?.filename}`; }

        const newFooter = `INSERT INTO footer(
            logo,
            endereco,
            telefone,
            email,
            funcionamento,
            link1,
            link2,
            link3,
            link4,
            copyright
            ) VALUES (
                '${logo}',
                '${endereco}',
                '${telefone}',
                '${email}',
                '${funcionamento}',
                '${link1}',
                '${link2}',
                '${link3}',
                '${link4}',
                '${copyright}'
            )`;

        connection.query(newFooter, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao cadastrar dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'dados cadastrado!' });
            }
        });

    },

    getFooter(req, res) {
        const selectFooter = `SELECT * FROM footer`;

        connection.query(selectFooter, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    updateFooter(req, res) {
        const id = parseInt(req.params.id);
        let dataForm = JSON.parse(req.body.formFooter);

        let logo;
        const endereco = dataForm.endereco;
        const telefone = dataForm.telefone;
        const email = dataForm.email;
        const funcionamento = dataForm.funcionamento;
        const link1 = dataForm.link1;
        const link2 = dataForm.link2;
        const link3 = dataForm.link3;
        const link4 = dataForm.link4;
        const copyright = dataForm.copyright;

        req.files.logo ? logo = `${process.env.BASE_URL}/uploads/footer/${req.files.logo[0]?.filename}` : logo = dataForm.logo;


        const updateHome = 'UPDATE `footer` SET `logo`= ?,' +
            '`endereco`= ?,' +
            '`telefone`= ?,' +
            '`email`= ?,' +
            '`funcionamento`= ?,' +
            '`link1`= ?,' +
            '`link2`= ?,' +
            '`link3`= ?,' +
            '`link4`= ?,' +
            '`copyright`= ?' +
            'WHERE `footer`.`ID`= ?';

        connection.query(updateHome, [
            logo,
            endereco,
            telefone,
            email,
            funcionamento,
            link1,
            link2,
            link3,
            link4,
            copyright,
            id
        ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao atualizar dados', error: error });
            } else {
                res.status(200).json({ status: 0, message: 'Dados atualizado!' });
            }
        });
    }

}
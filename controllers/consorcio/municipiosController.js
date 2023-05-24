const connection = require('../../database/connection');
const multer = require('multer');
let fs = require('fs-extra');

module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            let path = `./uploads/brasoes`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path); //gera o diretório automaticamente
            }
            cb(null, path);
        },
        filename: function (req, files, cb) {
            cb(null, `${Date.now()}-${files.originalname}`);
        }
    }),

    newCounty(req, res) {
        let dataForm = JSON.parse(req.body.formMunicipio);
        const arms = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio/uploads/brasoes/${req.files[0]?.filename}` : '';
        const name = dataForm.name || '';
        const foundation = dataForm.foundation || '';
        const politicalEmancipation = dataForm.politicalEmancipation || '';
        const gentile = dataForm.gentile || '';
        const federativeUnit = dataForm.federativeUnit || '';
        const mesoregion = dataForm.mesoregion || '';
        const microregion = dataForm.microregion || '';
        const cityHallWebsite = dataForm.cityHallWebsite || '';
        const description = dataForm.description || '';
        const area = dataForm.area || '';
        const estimatedPopulation = dataForm.estimatedPopulation || '';
        const density = dataForm.density || '';
        const altitude = dataForm.altitude || '';
        const climate = dataForm.climate || '';
        const timeZone = dataForm.timeZone || '';
        const distanceCapital = dataForm.distanceCapital || '';

        const newCounty = `INSERT INTO municipios(
                    arms,
                    name, 
                    foundation,
                    politicalEmancipation,
                    gentile,
                    federativeUnit,
                    mesoregion,
                    microregion,
                    cityHallWebsite,
                    description,
                    area,
                    estimatedPopulation,
                    density,
                    altitude,
                    climate,
                    timeZone,
                    distanceCapital
                    ) VALUES (
                        '${arms}',
                        '${name}', 
                        '${foundation}', 
                        '${politicalEmancipation}', 
                        '${gentile}', 
                        '${federativeUnit}', 
                        '${mesoregion}', 
                        '${microregion}', 
                        '${cityHallWebsite}', 
                        '${description}',
                        '${area}',
                        '${estimatedPopulation}',
                        '${density}',
                        '${altitude}',
                        '${climate}',
                        '${timeZone}',
                        '${distanceCapital}'
                    )`;

        connection.query(newCounty, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao cadastrar Municipio', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'Municipio cadastrado!' });
            }
        });

    },

    updateCounty(req, res) {
        const id = parseInt(req.params.id);
        let dataForm = JSON.parse(req.body.formMunicipio);
       
        const arms = req.files[0]?.filename ? `${process.env.BASE_URL}/api-consorcio/uploads/brasoes/${req.files[0]?.filename}` : dataForm.arms;
        const name = dataForm.name;
        const foundation = dataForm.foundation || '';
        const politicalEmancipation = dataForm.politicalEmancipation || '';
        const gentile = dataForm.gentile || '';
        const federativeUnit = dataForm.federativeUnit || '';
        const mesoregion = dataForm.mesoregion || '';
        const microregion = dataForm.microregion || '';
        const cityHallWebsite = dataForm.cityHallWebsite || '';
        const description = dataForm.description || '';
        const area = dataForm.area || '';
        const estimatedPopulation = dataForm.estimatedPopulation || '';
        const density = dataForm.density || '';
        const altitude = dataForm.altitude || '';
        const climate = dataForm.climate || '';
        const timeZone = dataForm.timeZone || '';
        const distanceCapital = dataForm.distanceCapital || '';

        const updateCounty = 'UPDATE `municipios` SET `arms`= ?,' +
            '`name`= ?,' +
            '`foundation`= ?,' +
            '`politicalEmancipation`= ?,' +
            '`gentile`= ?,' +
            '`federativeUnit`= ?,' +
            '`mesoregion`= ?,' +
            '`microregion`= ?,' +
            '`cityHallWebsite`= ?,' +
            '`description`= ?,' +
            '`area`= ?,' +
            '`estimatedPopulation`= ?,' +
            '`density`= ?,' +
            '`altitude`= ?,' +
            '`climate`= ?,' +
            '`timeZone`= ?,' +
            '`distanceCapital`= ?' +
            'WHERE `municipios`.`ID`= ?';

            connection.query(updateCounty, [
                arms,
                name,
                foundation,
                politicalEmancipation,
                gentile,
                federativeUnit,
                mesoregion,
                microregion,
                cityHallWebsite,
                description,
                area,
                estimatedPopulation,
                density,
                altitude,
                climate,
                timeZone,
                distanceCapital,
                id
            ], function (error, results, fields) {
                if (error) {
                    res.status(400).json({ message: 'Erro ao atualizar municipio', error: error });
                } else {
                    res.status(200).json({ status: 1, message: 'Municipio atualizado!' });
                }
            });
    },

    getCounty(req, res) {
        const selectCounty = `SELECT * FROM municipios ORDER BY name`;

        connection.query(selectCounty, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter municipios', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },

    deleteCounty(req, res) {
        const id = parseInt(req.params.id);
        const deleteCounty = `DELETE FROM municipios WHERE ID = ?`;

        connection.query(deleteCounty, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir municipio', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }
}
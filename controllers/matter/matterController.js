const connection = require('../../database/connection');

module.exports = {
    //cadastra nova matéria
    newMatter(req, res) {
        const matterDate = req.body.matterDate || '';
        const matterNumber = req.body.matterNumber || '';
        const matterExercise = req.body.matterExercise || '';
        const matterType = req.body.matterType || '';
        const originType = req.body.originType || '';
        const showOnSite = req.body.showOnSite || '';
        const votationType = req.body.votationType || '';
        const matterDescription = req.body.matterDescription || '';
        const matterBody = req.body.matterBody || '';
        const matterJustification = req.body.matterJustification || '';
        const matterCompleteText = req.body.matterCompleteText || '';
        const origin = req.body.origin || '';

        const newMatter = `INSERT INTO matter(
             matterDate,
             matterNumber,
             matterExercise,
             matterType,
             originType,
             showOnSite,
             votationType,
             matterDescription,
             matterBody,
             matterJustification,
             matterCompleteText,
             origin
            ) VALUES (
                '${matterDate}',
                '${matterNumber}', 
                '${matterExercise}', 
                '${matterType}',
                '${originType}',
                '${showOnSite}',
                '${votationType}',
                '${matterDescription}',
                '${matterBody}',
                '${matterJustification}',
                '${matterCompleteText}',
                '${origin}'
            )`;

        connection.query(newMatter, [], function (error, resultsRegister, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao cadastrar dados', error: error });
            } else {
                res.status(200).json({ status: 1, message: 'sucesso!' });
            }
        });
    },

     //retorna todos as materias
     getAllMatter(req, res) {
        const selectMatter = `SELECT * FROM matter ORDER BY ID`;

        connection.query(selectMatter, [], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao obter dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    },

    //atualiza a matéria
    updateMatter(req, res) {
        const id = parseInt(req.params.id);
        const matterDate = req.body.matterDate || '';
        const matterNumber = req.body.matterNumber || '';
        const matterExercise = req.body.matterExercise || '';
        const matterType = req.body.matterType || '';
        const originType = req.body.originType || '';
        const showOnSite = req.body.showOnSite || '';
        const votationType = req.body.votationType || '';
        const matterDescription = req.body.matterDescription || '';
        const matterBody = req.body.matterBody || '';
        const matterJustification = req.body.matterJustification || '';
        const matterCompleteText = req.body.matterCompleteText || '';
        const origin = req.body.origin || '';

        const updateMatter = 'UPDATE `matter` SET `matterDate`= ?,' +
        '`matterNumber`= ?,' +
        '`matterExercise`= ?,' +
        '`matterType`= ?,' +
        '`originType`= ?,' +
        '`showOnSite`= ?,' +
        '`votationType`= ?,' +
        '`matterDescription`= ?,' +
        '`matterBody`= ?,' +
        '`matterJustification`= ?,' +
        '`matterCompleteText`= ?,' +
        '`origin`= ?' +
        'WHERE `matter`.`ID`= ?';

        connection.query(updateMatter, 
            [
                matterDate,
                matterNumber,
                matterExercise,
                matterType,
                originType,
                showOnSite,
                votationType,
                matterDescription,
                matterBody,
                matterJustification,
                matterCompleteText,
                origin,
                id
            ], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro atualizar dados', error: error });
            } else {
                res.status(200).json(results);
            }
        });

    },

    //delete uma matéria
    deleteMatter(req, res) {
        const id = parseInt(req.params.id);
        const deleteMatter = `DELETE FROM matter WHERE ID = ?`;

        connection.query(deleteMatter, [id], function (error, results, fields) {
            if (error) {
                res.status(400).json({ status: 0, message: 'Erro ao excluir matéria', error: error });
            } else {
                res.status(200).json(results);
            }
        });
    }

}
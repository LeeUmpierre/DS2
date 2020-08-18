const cidadeRepository = require('../repository/cidade.repository');

module.exports = {

    //Retorna TODOS
    find: (req, res) => {
        cidadeRepository.find()
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },

    //Retorna pelo ID
    findOne: (req, res) => {
        const id = req.params.id;

        cidadeRepository.findOne(id)
            .then((result) => {

                if (result.rows.length > 0) {
                    res.send(result.rows[0]);
                } else {
                    res.status(404).send({ msg: 'Registro não encontrado' });
                }

            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },

    //Adiciona um registro
    create: (req, res) => {
        const cidade = req.body;

        cidadeRepository.create(cidade)
            .then((result) => {
                res.status(201).send(result.rows[0]);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },

    //Altera registro
    update: (req, res) => {
        const cidade = req.body;

        //Atribui o ID do item baseado no param da URL
        cidade.id = req.params.id;

        cidadeRepository.update(cidade)
            .then((result) => {

                if (result.rows.length > 0) {
                    res.send(result.rows[0]);
                } else {
                    res.status(404).send({ msg: 'Registro não encontrado' });
                }

            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },

    //Remove registro
    delete: (req, res) => {

        //ID a ser excluido da URL
        var id = req.params.id;

        cidadeRepository.delete( id )
            .then((result) => {

                if (result.rows.length > 0) {
                    res.status(204).send;
                } else {
                    res.status(404).send({ msg: 'Registro não encontrado' });
                }

            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    }
}
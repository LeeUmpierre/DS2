const express = require('express');
const routes = express.Router();
const cidadeController = require('../controller/cidade.controller');

//Listar todos os registros
routes.get('/cidade', cidadeController.find);

//Adicionar um item aos registros
routes.post('/cidade', cidadeController.create);

//Retorna apenas o item com o ID passado por parametro na URI
routes.get('/cidade/:id', cidadeController.findOne);

//Altera o item com o ID passado por parametro na URI pelo objeto anexado
routes.put('/cidade/:id', cidadeController.update);

//Remove item com id de param
routes.delete('/cidade/:id',cidadeController.delete);

module.exports = routes;
//Importa os modulos externos
const express = require('express');
const bodyParser = require('body-parser');

//Instanciando a aplicação
const app = express();

//Adiciona o body-parser à aplicação (Permite receber elementos no corpo da requisição)
app.use(bodyParser.text());

//Porta da aplicação
const porta = 3000;

//Adicionando uma requisição para a rota raíz ('/') da aplicação
app.get('/', (req, res) => {
    res.send('<h1>Utilizando o Método POST com envio de string</h1>');
});

//Cria uma lista de compras (vetor)
var listaCompras = [];

//Alimentei a minha lista de compra
listaCompras.push('Pão');
listaCompras.push('Leite');
listaCompras.push('Café');
listaCompras.push('Chá');

//Rota que devolve a lista de compras
app.get('/listaDeCompra', (req, res) => {

    res.send(listaCompras);

});

//Enviar um item de compra
app.post('/listaDeCompra', (req,res) => {
    var item = req.body;

    listaCompras.push(item);
    //201 = requisicao enviada com sucesso
    res.status(201).send('created');
});


//Iniciando a aplicação na porta 3000
app.listen(porta, () => {
    console.log('Rodando na porta '+ porta);
});
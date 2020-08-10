const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const porta = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Utilizando GET e POST com JSON </h1>');
});

var listaCompras = [];

listaCompras.push({nome: 'Pão'});
listaCompras.push({nome: 'Leite'});
listaCompras.push({nome:'Café'});
listaCompras.push({nome:'Chá'});

//Rota que devolve a lista de compras
app.get('/listaDeCompra', (req, res) => {

    res.send(listaCompras);

});

//Retorna um item da lista
app.get('/listaDeCompra/:item', (req, res) => {
    
    const param = req.params.item;

    //Verificar se existe esta posicao
    if(listaCompras[param-1]){
        res.send(listaCompras[param-1]);
    }else{
        res.status(404).send({msg : 'Resource not found'});
    }

    res.send(listaCompras[param-1]);
});

app.post('/listaDeCompra', (req,res) => {
    var item = req.body;

    listaCompras.push(item);
    
    res.status(201).send('created');
});

app.listen(porta, () => {
    console.log('Rodando na porta '+ porta);
});
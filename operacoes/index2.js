const express = require('express');
const bodyParser = require('body-parser');
const operacaoRoutes = require('./routes/operacoes.routes');

const app = express();

app.use(bodyParser.json());
app.use(operacaoRoutes);

const porta = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Operações</h1>');
});


app.listen(porta, () => {
    console.log('Rodando na porta '+ porta);
});
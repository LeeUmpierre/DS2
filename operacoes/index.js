const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const porta = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Operações</h1>');
});

//Ad
app.get('/adicao',(req,res) => {
    const valor = req.body;
    const resultado = valor.a + valor.b;

    res.send({resultado: resultado});
})
//Sub
app.get('/subtracao',(req,res)=>{
    const valor = req.body;
    const resultado = valor.a - valor.b;

    res.send({resultado: resultado});

})
//Div
app.get('/divisao',(req,res)=>{
    const valor = req.body;
    const resultado = valor.a / valor.b;

    res.send({resultado: resultado});
})
//Mult
app.get('/multiplicacao',(req,res)=>{
    const valor = req.body;
    const resultado = valor.a * valor.b;

    res.send({resultado: resultado});
})

app.listen(porta, () => {
    console.log('Rodando na porta '+ porta);
});
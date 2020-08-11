const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./pg-connection');
const pessoaRoutes = require('./routes/pessoa.route');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('<h1>Projeto de exemplo de conexão com Banco de Dados</h1>');
});

//Adiciona rota para tabela "pessoa"
app.use(pessoaRoutes);

//Estabelece uma conexao com o banco de dados
connection.connect()
    //Se deu certo levanta o servico na porta 3000
    .then(() => {
        app.listen(port, ()=> {
            console.log('Rodando na porta: %s', port);
        });
    })
    //Senao
    .catch((error) => {
        console.log('Nao foi possivel conectar ao banco de dados: %s', error.message);
    });
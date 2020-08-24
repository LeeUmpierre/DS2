/*SQL
select pessoa.*, cidade.nome, cidade.uf from pessoa
join cidade on cidade.id = pessoa.cidade_id

create table usuario(
	id serial primary key,
	username varchar(30) not null,
	password varchar(30) not null
);

alter table usuario add constraint unq_username unique(username);
alter table pessoa add column usuario_id integer;
alter table pessoa add constraint fk_usuario foreign key (usuario_id) references usuario (id);
*/

//npm start => Ctrl +c parar
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./pg-connection');
const routes = require('./routes');

//Instanciar aplicação
const app = express();

//Porta da aplicação
const port = 3000;

//Adicionar o body-parser à aplicação
app.use(bodyParser.json());

//Rota para raíz
app.get('/', (req,res) => {
    res.send('<h1>Projeto de exemplo de conexão com Banco de Dados</h1>');
});

//Adiciona todas as rotas
app.use(routes);

//Estabelece uma conexão com o banco de dados
connection.connect()
    //Se deu certo, então...
    .then(() => {
        //Levanta o serviço na porta 3000
        app.listen(port, ()=> {
            console.log('Executando na porta: %s', port);
        });
    })
    //...senão, deu pau!
    .catch((error) => {
        console.log('Não foi possível conectar ao banco de dados: %s', error.message);
    });
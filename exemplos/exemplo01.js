//node exemplos/exemplo01.js roda no terminal
//npm install express

//Ctrl + C derruba o servico

/* http       :// site01.com/ exemploR/ exemploRE
   <protocolo>:// <endereco>/ <rota>/ <recurso> 
*/

/*
    Tipos de requisicoes:
    GET(select no sql): Receber algo/Solicitando recurso
    POST(insert no sql): Enviar um novo elemento para o recurso
    PUT(update no sql): troca um recurso existente por outro enviado
    DELETE(delete no sql): remove recurso
    PATH: parecido com put, mas envia apenas o atributo alterado do recurso/Quando o atributo eh muito grande
*/

//importa express
const express = require('express');

//instanciando a aplicacao
const app = express();
//app agora eh uma aplicacao web parada

// "/" raiz
//req = require, res = response
app.get('/', function(req,res) {
    res.send('<h1>Exemplo01 lista com retorno</h1>');
});

//Nova rota 
//OBS '=>' arrowfunction
app.get('/listaDeCompra', (req,res) =>{
    var lista = '<ol>'
    lista +='<li>Pao</li>';
    lista +='<li>Leite</li>';
    lista +='<li>Cafe</li>';
    lista += '</ol>';

    res.send(lista);
});

//Rota com parametro
app.get('/listaDeCompras/:item',(req,res) => {

    res.send('Voce esta solicitando o item: '+ req.params.item);

});

//iniciando a aplicacao na porta 3000
app.listen(3000, function(){
    console.log('Rodando na porta 3000')
});

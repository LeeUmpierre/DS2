//Client uma conecao/ Pool
//{} retorna varios
const { Client } = require('pg');

module.exports = new Client({
    host: '127.0.0.1',//ou localhost
    database: 'ds2db',
    user: 'postgres',
    password: 'b4ncod4dos12'//senha do banco de dados
});
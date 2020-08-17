//Camada de modelo
//IMPLEMENTCAO DO BANCO -> MODEL -> CONTROLLER -> ROUTE
const conn = require('../pg-connection')

module.exports = {

    find: () => { //retorna tudo
        return conn.query('select * from pessoa order by id');
    },

    findOne: (id) => { // retorna apenas 1
        return conn.query('select * from pessoa where id = $1', [id]);
    },

    create: (pessoa) => { // criar na tabela
        return conn.query('insert into pessoa(nome, email, fone, endereco) values ($1,$2,$3,$4) returning *',
            [pessoa.nome, pessoa.email, pessoa.fone, pessoa.endereco]);
    },

    update: (pessoa) => { // criar na tabela
        return conn.query('update pessoa set nome = $1, email = $2, fone = $3, endereco = $4, status = $5 where id = $6 returning *',
            [pessoa.nome, pessoa.email, pessoa.fone, pessoa.endereco, pessoa.status, pessoa.id]);
    },

    delete: (id) => { // criar na tabela
        return conn.query('delete from pessoa where id = $1 ',[id]);
    }

}
const conn = require('../pg-connection')

module.exports = {

    find: () => { //retorna tudo
        return conn.query('select * from cidade order by id');
    },

    findOne: (id) => { // retorna apenas 1
        return conn.query('select * from cidade where id = $1', [id]);
    },

    create: (cidade) => { // criar na tabela
        return conn.query('insert into cidade(nome, uf) values ($1,$2) returning *',
            [cidade.nome, cidade.uf]);
    },

    update: (cidade) => { // criar na tabela
        return conn.query('update cidade set nome = $1, uf = $2 where id = $3  returning *',
            [cidade.nome, cidade.uf, cidade.id]);
    },

    delete: (id) => { // criar na tabela
        return conn.query('delete from cidade where id = $1 ',[id]);
    }

}
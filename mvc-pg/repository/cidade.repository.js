  
const conn = require('../pg-connection');

module.exports = {
    find: () => {
        return conn.query('select * from cidade order by id');
    },
    findOne: (id) => {
        return conn.query('select * from cidade where id = $1', [id]);
    },
    create: (cidade) => {
        return conn.query('insert into cidade(nome, uf) values($1,$2) returning *', 
                [cidade.nome, cidade.uf]);
    },
    update: (cidade) => {
        return conn.query('update cidade set nome = $1, uf = $2 where id = $3 returning *', 
                [cidade.nome, cidade.uf, cidade.id]);
    },
    delete: (id) => {
        return conn.query('delete from cidade where id = $1', [id]);
    }
};const conn = require('../pg-connection');

//Consulta padrão, utilizada em todas os SELECT
const queryDefault = 'select * from cidade';

module.exports = {
    find: async () => {
        const cidadeResult = await conn.query(queryDefault +' order by id');
        return cidadeResult.rows;
    },
    findOne: async (id) => {
        const cidadeResult = await conn.query(queryDefault +' where id = $1', [id]);
        return cidadeResult.rows[0];
    },
    create: async (cidade) => {
        const cidadeResult = await conn.query('insert into cidade(nome, uf) values($1,$2) returning *', 
                                [cidade.nome, cidade.uf]);
        return cidadeResult.rows[0];
    },
    update: async (cidade) => {
        const cidadeResult = await conn.query('update cidade set nome = $1, uf = $2 where id = $3 returning *', 
                [cidade.nome, cidade.uf, cidade.id]);
        return cidadeResult.rows[0];
    },
    delete: async (id) => {
        const cidadeResult = await conn.query('delete from cidade where id = $1', [id]);
        return cidadeResult.rowCount > 0;
    }
};
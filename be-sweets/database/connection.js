const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        password : 'password',
        database : 'sweetshop'
    }
});


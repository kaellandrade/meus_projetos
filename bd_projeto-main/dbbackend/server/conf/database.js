const pg = require('pg-promise')();
const db = pg ({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    database: 'dbnetprime'
})

module.exports = db;
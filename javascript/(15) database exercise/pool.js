const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'sqldb',
    password: 'password',
    database: 'sqldb'
});

module.exports = pool;
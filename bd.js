var mysql = require('mysql');

const pool  = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'node_js'
});


module.exports = pool;
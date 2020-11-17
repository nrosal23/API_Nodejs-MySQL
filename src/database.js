const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Blackout_23',
    database: 'personaldb'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB conectada');
    }
});

module.exports = mysqlConnection
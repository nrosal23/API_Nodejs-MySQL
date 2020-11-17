const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '#######',
    port: '',
    user: '#####',
    password: '#######',
    database: '#####'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB Connected Succesfuly');
    }
});

module.exports = mysqlConnection
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'WO.Test',
    password: 'DB.Learning',
    database: 'testingdb'
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
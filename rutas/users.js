const express = require('express');
const router = express.Router();
const mysqlConnection = require('../src/database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });

});

router.post('/', (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const userdata = {
        name: req.body.name,
        lastname: req.body.lastname,
        country: req.body.country
    }
    mysqlConnection.query(sql, userdata, (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Usuario Creado'});
        } else {
            console.log(err)
        }
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname } = req.body;
    const sql = `UPDATE users SET name = '${name}', lastname = '${lastname}' WHERE id = ${id}`
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Usuario Actualizado'});
        } else {
            console.log(err)
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ${id}`
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Eliminado'});
        } else {
            console.log(err)
        }
    });
});
   

module.exports = router;
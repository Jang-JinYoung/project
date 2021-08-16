const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

// connection.connect();
router.get('/', (req, res) => {


    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.json(results);
    });
    // connection.end();
});

module.exports = router;


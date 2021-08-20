const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');
const bodyParser = require('body-parser');

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

router.post('/auth', async (req, res) => {

    let body = req;
    console.log(body);

});

module.exports = router;


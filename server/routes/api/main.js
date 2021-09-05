const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/country',  (req, res) => {

    const rand = Math.floor(Math.random() * 197) + 1;

    const query = "select * from countryInfo where id = " + rand;

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});


module.exports = router;


const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/countries',  (req, res) => {

    const query = "select * from countryInfo where continent = '유럽'";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

module.exports = router;
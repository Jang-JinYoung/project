const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/',  (req, res) => {

    const country = req.query.country;
    const query = (country === undefined) ? "select * from board" : "select * from board where country = '" + country + "'";


    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

router.get('/select',  (req, res) => {

    const query = "select id, country_kr from countryInfo where continent ='유럽' order by country_kr asc";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});


module.exports = router;


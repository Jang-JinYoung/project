const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/',  (req, res) => {

    const country = req.query.country;
    let query = (country === undefined || country === "전체") ? "select * from board" : "select * from board where country = '" + country + "'";
    query = query + " order by writeDate desc"
    
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

router.post('/write', (req, res) => {

    const query = "insert into board(title, writer, country, text) values (?, ?, ?, ?)";
    const values = [req.body.title, req.body.writer, req.body.country, req.bdoy.text];

    connection.query(query, values, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

module.exports = router;


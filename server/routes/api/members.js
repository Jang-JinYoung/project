const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');
const bodyParser = require('body-parser');


router.get('/',  (req, res) => {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
//     // connection.end();

});



router.post('/auth', async (req, res) => {

    let body = req.body;
    const id = body.id;
    const pw = body.pw;

    let query = "select * from user where id='"+id+"' and pw='"+pw+"'";
    console.log(query);

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.send(results);
    });


    req.session.id = 'Anoymous';
    console.log(req.session.id);



});

router.post('/signup',  (req, res) => {
    let body = req.body;
    const id = body.id;
    const pw = body.pw;

    let query = "insert into user (id, pw) values ('"+id+"','"+pw+"')";
    console.log(query);

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.send(results);
    });

});

module.exports = router;


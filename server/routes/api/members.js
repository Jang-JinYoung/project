const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');
const bodyParser = require('body-parser');

 function sql(query) {
     //  new Promise(function (resolve, reject) {
     //     connection.query(query, function (error, results, fields) {
     //         if (error) {
     //             console.log(error);
     //         }
     //         // console.log(results);
     //     });
     // });
     connection.query(query, function (error, results, fields) {
         if (error) {
             console.log(error);
         }
         console.log(results);
         return results;
     });
}


router.get('/', async (req, res) => {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        return new Promise(function (resolve, reject) {
            resolve(results);
        });
    });
    // connection.end();
});



router.post('/auth', async (req, res) => {

    let body = req.body;
    const id = body.id;
    const pw = body.pw;

    let query = "select * from user where id='"+id+"' and pw='"+pw+"'";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.send(results);
    });


});



module.exports = router;


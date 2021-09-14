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
});

//로그인
router.post('/auth',  (req, res) => {

    let body = req.body;
    const id = body.id;
    const pw = body.pw;

    let query = "select count(*) as cnt, a.* from user a where id='"+id+"' and pw='"+pw+"'";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

//회원가입
router.post('/signup',  (req, res) => {
    let body = req.body;
    const id = body.id;
    const pw = body.pw;
    const nickname = body.nickname;

    let values = [id, pw, nickname];
    let query = "insert into user (id, pw, nickname) values (?, ?, ?)";
    connection.query(query, values, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        query = "select * from user where id = ? and pw = ?";
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
        }
        
    });

});

//중복확인
router.get('/checkDuplicate',  (req, res) => {

    console.log(req.query);
    const id = req.query.id;

    let query = "select count(*) as cnt from user where id = '"+id+"'";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

module.exports = router;



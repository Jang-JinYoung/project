const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/',  async (req, res) => {

    let result = {};
    const country = req.query.country;
    const page = req.query.page;

    let begin = ((page-1)*10);
    let end = (page*10);

    let values = [begin, end];
    let query =
        (country === undefined || country === "전체") ?
            "select @ROWNUM:=@ROWNUM+1 as rownum, a.* from board a, (select @ROWNUM:=0) R " :
            "select @ROWNUM:=@ROWNUM+1 as rownum, a.* from board a, (select @ROWNUM:=0) R where country = '" + country + "'";

    query = query + " order by writeDate desc limit ?, ?";
    
    //보드
    const board = await (new Promise(function(resolve) {
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
            // res.send(results);
        });
    }));

    result['board'] = board;

    query =
        (country === undefined || country === "전체") ?
            "select count(*)/10 as count from board" :
            "select count(*)/10 as count from board where country = '" + country + "'";

    const paging = await (new Promise(function(resolve) {
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
            // res.send(results);
        });
    }));

    result['paging'] = paging;
    res.send(result);
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


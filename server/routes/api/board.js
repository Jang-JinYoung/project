const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

router.get('/boardList',  async (req, res) => {

    let result = {};
    const country = req.query.country;
    const page = req.query.page;

    let begin = ((page-1)*10);
    let end = (page*10);

    let values = [begin, end];
    let query =
        (country === undefined || country === "전체") ?
            "select * from board " :
            "select * from board where country = '" + country + "'";
    
    query = query + " order by writeDate desc limit ?, ?";
    console.log(query);

    //게시글
    const board = await (new Promise(function(resolve) {
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
            // res.send(results);
        });
    }));

    for(let i=0; i<board.length; i++) {
        let writeDate = JSON.stringify(board[i].writeDate);
        let date = writeDate.split('T');

        date[0] = date[0].substring(3);
        date[0] = date[0].replace(/-/gi, '.');

        date[1] = date[1].substring(0, 5);
        console.log(date[0] + " " + date[1]);

        board[i].writeDate = date[0] + " " + date[1];

    }
    result['board'] = board;

    query =
        (country === undefined || country === "전체") ?
            "select count(*)/10 as count from board" :
            "select count(*)/10 as count from board where country = '" + country + "'";

    //페이징
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

    const country = req.query.country;
    const query = "select id, country_kr from countryInfo where continent ='유럽' and country_kr != ? order by country_kr asc";

    const values = [country];

    connection.query(query, values, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });

});

router.get('/boardDetail', (req, res) => {

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


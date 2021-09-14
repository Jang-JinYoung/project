const express = require('express');
const router = express.Router();
const connection = require('../../config/dbconfig.js');

//작성시간수정함수
function editWriteTime(board) {
    for(let i=0; i<board.length; i++) {
        let writeDate = JSON.stringify(board[i].writeDate);
        let date = writeDate.split('T');

        date[0] = date[0].substring(3);
        date[0] = date[0].replace(/-/gi, '.');

        date[1] = date[1].substring(0, 5);

        board[i].writeDate = date[0] + " " + date[1];
    }
}

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

    //게시글
    let board = await (new Promise(function(resolve) {
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
            // res.send(results);
        });
    }));

    board = editWriteTime(board);
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

    const query = "select id, country_kr from countryInfo where continent ='유럽' order by country_kr asc";

    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        let data = new Object();
        data.id = 0;
        data.country_kr = '전체';
        results.unshift(data);
        res.send(results);
    });

});

router.get('/boardDetail', async (req, res) => {

    let result = {};
    const id = req.query.id;
    const query = "select * from board where id = " + id;


    let board = await (new Promise(function(resolve) {
        connection.query(query, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
        });
    }));

    board = editWriteTime(board);
    result['board'] = board;


});

router.post('/write', async (req, res) => {


    const query = "insert into board(title, writer, country, text) values (?, ?, ?, ?)";
    const values = [req.body.title, req.body.writer, req.body.country, req.bdoy.text];

    const board = await (new Promise(function(resolve) {
        connection.query(query, values, function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            resolve(results);
        });
    }));




});

module.exports = router;


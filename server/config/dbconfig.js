var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});

var test

module.exports = connection;
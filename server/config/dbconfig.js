var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'uws7-214.cafe24.com',
    user     : 'jinyoung4892',
    password : 'aa75287528!',
    database : 'jinyoung4892'
});

module.exports = connection;
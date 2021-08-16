var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wlsdud3301!',
    database : 'nodejs'
});

module.exports = connection;
// export.module = connection;
// connection.connect();
//
// connection.query('SELECT * FROM user', function (error, results, fields) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(results);
// });
//
// connection.end();
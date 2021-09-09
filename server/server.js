const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const credentials = require('./.credentials.development');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const port = process.env.PORT || 3001;


//cookie
app.use(cookieParser(credentials.cookieSecret));

//session
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}));


//cors
app.use(cors());

//router
app.use(bodyParser.json());
app.use('/api/member', require('./routes/api/members'));
app.use('/api/main', require('./routes/api/main'));
app.use('/api/plan', require('./routes/api/plan'));
app.use('/api/board', require('./routes/api/board'));


app.listen(port, () => {
    console.log(`express is running on ${port}`);
});


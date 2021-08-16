const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;


app.use(cors());

app.use(bodyParser.json());
app.use('/api/member', require('./routes/api/members'));

app.use('/', (req, res) => {
    res.json({username: 'bryan'})
});

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})
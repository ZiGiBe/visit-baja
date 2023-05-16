require('dotenv').config();
let express = require('express');
const path = require('path');
let app = express(),
    cors = require('cors');

app.use('/uploads',  express.static(path.join(__dirname, './upload')))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/file', require('./files'));
app.use('/api', require('./db'));

app.listen(process.env.PORT);
require('dotenv').config();
let express = require('express');
const path = require('path');
let app = express(),
    cors = require('cors');

app.use('/uploads',  express.static(path.join(__dirname, './upload')))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/editor', require('./editorJSLoad'));
app.use('/admin', require('./users'));
app.use('/file', require('./files'));
app.use('/api', require('./db'));
app.use('/media', express.static(path.join(__dirname, '/uploads')))

app.listen(process.env.PORT);
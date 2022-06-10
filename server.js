
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// mongoose.connect('')

// small test
app.get('/', (req, res) => {
    res.send('hello world');
})

app.use(express.static('src'));


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
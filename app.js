
const express = require('express');
const bodyParser = require('body-parser');
//const math = require(__dirname + '/math.js');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

// urlencoded to pass data from html form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// mongoose.connect('')
let savedSolutions = [];

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/calculate', (req, res) => {
    // data shows correctly, how to make it appear on page?
    console.log(savedSolutions);
    //var result = 'This is a test';

    res.render('calculate', {
        //resultText: result,
        C1: savedSolutions[0].C1,
        C2: savedSolutions[0].C2,
        V2: savedSolutions[0].V2,
        V1: savedSolutions[0].V1,
        remainder: savedSolutions[0].remainderVol
    });

});

app.post('/', (req, res) => {

    const solutions = {
        C1: req.body.sourceConcentration,
        C2: req.body.solutionConcentration,
        V2: req.body.solutionVolume,
        V1: req.body.solutionConcentration * req.body.solutionVolume / req.body.sourceConcentration,
        remainderVol: req.body.solutionVolume - (req.body.solutionConcentration * req.body.solutionVolume / req.body.sourceConcentration)
    };

    // determine if the C2 is a fractino or decimal. Not finished
    if (req.body.solutionConcentration == null) {
        let C2 = req.body.numerator / req.body.denominator;
    }

    savedSolutions.push(solutions);
    res.redirect('/calculate');

    console.log('calculate button pressed')

});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

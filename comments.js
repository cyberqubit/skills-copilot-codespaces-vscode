// Create web server
// http://expressjs.com/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the server
var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
});

// Define the path for the server
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/comments', function (req, res) {
    fs.readFile(__dirname + '/comments.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred');
            return;
        }

        res.send(data);
    });
});

app.post('/api/comments', function (req, res) {
    fs.readFile(__dirname + '/comments.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred');
            return;
        }

        var comments = JSON.parse(data);

        var newComment = {
            id: Date.now(),





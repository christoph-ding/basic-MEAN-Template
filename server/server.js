// NPM Dependencies
var express = require('express');
var path = require('path');

// Define Server
var app = express();
var port = 8000;

// Pages and Files
var staticFiles = '/../client';
var homePage = '/../client/pages/index.html';

// Serve Static Files
app.use(express.static(path.join(__dirname + staticFiles)));

app.get('/', function(req, res) {
  console.log('serving static files... ' + path.join(__dirname + homePage))
  res.sendFile(path.join(__dirname + homePage));
})

// Connect to server
app.listen(port, function() {
  console.log('Connected to server.  Listening in on port ', port, ' on ', new Date,'!');
});

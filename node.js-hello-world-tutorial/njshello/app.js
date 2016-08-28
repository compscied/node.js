//declaring our dependency is express framework
var express = require('express');
var app = express();

//respond with “Hello World!” for requests to the root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//start a server and listens on port 8080 for connections and write to the console basic info
app.listen(8080, function () {
  console.log('Hello world app listening on port 8080! Open browser and navigate to http://localhost:8080');
});
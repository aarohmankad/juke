// This file creates a simple server for us to use
// Not important to understand
var
  express = require('express'),
  app = express();

app.use(express.static(__dirname + '/', {}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(9000);
console.log('Magic happens on port 9000');
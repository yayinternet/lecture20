const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Main page');
});

app.get('/hello', function (req, res) {
  res.send('GET hello!');
});

app.post('/hello', function (req, res) {
  res.send('POST hello!');
});

app.listen(3000, function () {
  console.log('Routed app listening on port 3000!');
});

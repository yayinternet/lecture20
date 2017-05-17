const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Main page!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

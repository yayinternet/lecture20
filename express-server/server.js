const express = require('express');
const app = express();

// This value resets every time we restart our server.
let count = 0;

app.get('/', function (req, res) {
  count++;
  console.log('Request ' + count);

  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

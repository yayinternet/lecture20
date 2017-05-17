const express = require('express');

const app = express();

app.use(express.static('public'));

app.post('/hello', function (req, res) {
  res.send('POST hello!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

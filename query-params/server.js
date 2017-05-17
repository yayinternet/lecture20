const express = require('express');

const app = express();

app.use(express.static('public'));

// This accesses the name query parameter from a GET request.
app.get('/hello', function (req, res) {
  const queryParams = req.query;
  const name = queryParams.name;
  res.send('GET: Hello, ' + name);
});

// This accesses the name query parameter from a POST request.
// NOTE: POST requests generally don't use query parameters.
app.post('/hello', function (req, res) {
  const queryParams = req.query;
  const name = queryParams.name;
  res.send('POST: Hello, ' + name);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

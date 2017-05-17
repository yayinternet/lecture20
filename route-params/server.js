const express = require('express');

const app = express();

app.use(express.static('public'));

// This defines the name as a route parameter for a GET request.
app.get('/hello/:name', function (req, res) {
  const routeParams = req.params;
  const name = routeParams.name;
  res.send('GET: Hello, ' + name);
});

app.get('/flights/:from-:to', function (req, res) {
  const routeParams = req.params;
  const from = routeParams.from;
  const to = routeParams.to;
  res.send('GET: Flights from ' + from + ' to ' + to);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Main page!');
});

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

// This accesses the name and email parameters from the message body, without
// using the body-parser library.
app.post('/helloemail', function (req, res) {
  let data = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
     data += chunk;
  });

  req.on('end', function() {
    const body = JSON.parse(data);
    const name = body.name;
    const email = body.email;
    res.send('POST: Name: ' + name + ', email: ' + email);
  });
});

app.post('/helloparsed', jsonParser, function (req, res) {
  const body = req.body;
  const name = body.name;
  const email = body.email;
  res.send('POST: Name: ' + name + ', email: ' + email);
});


app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

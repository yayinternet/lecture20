const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

// This accesses the name and email parameters from the message body
// using the body-parser library.
app.post('/helloparsed', jsonParser, function (req, res) {
  const body = req.body;
  const name = body.name;
  const email = body.email;
  res.send('POST: Name: ' + name + ', email: ' + email);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

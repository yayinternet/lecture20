const express = require('express');

const app = express();

app.use(express.static('public'));

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

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

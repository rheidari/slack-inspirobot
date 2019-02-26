var request = require('request');
var express = require('express');
var app = express();

function handleRequest (req, res) {
  request('https://inspirobot.me/api?generate=true', function (err, response, body) {
    res.send({
      response_type: 'in_channel',
      as_user: true,
      attachments: [{
        image_url: body
      }]
    });
  });
}

app.get('/', handleRequest);
app.post('/', handleRequest);

app.listen(process.env.PORT || 80);

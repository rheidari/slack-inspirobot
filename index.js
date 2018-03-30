var request = require('request');
var express = require('express');
var app = express();

function handleRequest (req, res) {
  request('http://inspirobot.me/api?generate=true', function (err, response, body) {
    res.send({
      attachments: [
        {
          image_url: body
        }
      ]
    });
  });
}

app.get('/', handleRequest);
app.post('/', handleRequest);

app.listen(process.env.PORT || 80);

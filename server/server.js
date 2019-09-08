const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

const users = [];

app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});

app.ws('/:username', function(ws, req) {
  console.log(req.params);
  ws.on('message', function(msg) {
    console.log(msg);
    ws.send('hey');
  });
  console.log('socket', req.testing);
});
 
app.listen(3000);
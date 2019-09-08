const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
    ws.send('hey');
  });
  console.log('socket', req.testing);

});
 
app.listen(3000);
const PORT=4444; 

var express = require('express');
var app = express();

app.use(express.static('./'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


server = app.listen(PORT);

var host = server.address().address
var port = server.address().port

console.log("kappisan server listening on port %s", port);

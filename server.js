const PORT=4444; 

var express = require('express');
var app = express();

app.use(express.static('./static/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


server = app.listen(PORT);

var host = server.address().address
var port = server.address().port

console.log("");
console.log(" /$$                                     /$$                              ");
console.log("| $$                                    |__/                              ");
console.log("| $$   /$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$  /$$$$$$$  /$$$$$$  /$$$$$$$ ");
console.log("| $$  /$$/ |____  $$ /$$__  $$ /$$__  $$| $$ /$$_____/ |____  $$| $$__  $$");
console.log("| $$$$$$/   /$$$$$$$| $$  \\ $$| $$  \\ $$| $$|  $$$$$$   /$$$$$$$| $$  \\ $$");
console.log("| $$_  $$  /$$__  $$| $$  | $$| $$  | $$| $$ \\\____  $$ /$$__  $$| $$  | $$");
console.log("| $$ \\  $$|  $$$$$$$| $$$$$$$/| $$$$$$$/| $$ /$$$$$$$/|  $$$$$$$| $$  | $$");
console.log("|__/  \\\__/ \\\_______/| $$____/ | $$____/ |__/|_______/  \\\_______/|__/  |__/");
console.log("                    | $$      | $$                                        ");
console.log("                    | $$      | $$                                        ");
console.log("                    |__/      |__/                                        ");
console.log("");

console.log("kappisan server listening on port %s", port);

var fs = require('fs');
var express = require('express');
var app = express();

var fileContents = fs.readFileSync('data.txt');

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
});

var server = app.listen(3587, function() {
	console.log('Express server listening on port ' + server.address().port);
});

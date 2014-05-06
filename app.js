var fs = require('fs');
var express = require('express');
var app = express();

//------------- Part 2
// var fileContents = fs.readFileSync('data3.txt');

// app.get('/', function(req, res) {
// 	res.header('Content-Type', 'text/html');
// 	res.send(fileContents);
// });

// var server = app.listen(3587, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });


//-------------- Part 3
// app.get('/', function(req, res) {
// 	fs.readFile('data.txt', function(err, data){
// 		res.header('Content-Type', 'text/html');
// 		res.send(data);
// 	});	
// });

// var server = app.listen(3587, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });


//---------------- Bonus
app.get('/:filename', function(req, res) {
	fs.readFile('./public/' + req.params.filename, function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	});	
});

var server = app.listen(3587, function() {
	console.log('Express server listening on port ' + server.address().port);
});
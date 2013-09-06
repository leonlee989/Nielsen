
var express = require('express');
// Create a new Express application
var app = express();

console.log("Starting server 2");
// Add a basic route – index page
app.get('/', function (req, res) {
	console.log('Hello from server 2');
	res.send('Hello from server 2');
});

	// Bind to a port
app.listen(8081);
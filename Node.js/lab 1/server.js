var http = require("http");

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write("Hello World");
	
	// Test for function:
	execute(function(word) {
		response.write(word);
		console.log("Server has printed " + word + " in the browser");
	}, "hello World");
	
	response.end();
}

function execute(somefunction, value) {
	somefunction(value);
}

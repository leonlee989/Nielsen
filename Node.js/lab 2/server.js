var http = require("http");
var url = require("url");

function startserver(route, handle) {
	function onRequest(request, response) {
		console.log("Request received");
		
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		
		route(handle, pathname,response);
	}

	http.createServer(onRequest).listen(3000);

	console.log("Server has started");
}

exports.start = startserver;
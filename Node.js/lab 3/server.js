var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		
		request.setEncoding("utf8");
		
		request.addListener("data", function(postDataChunk) {
			// Called when a chunk of data was received
			postData += postDataChunk;
			console.log("Received POST data chunk '" +
			postDataChunk + "'.");
		});
		
		request.addListener("end", function() {
			// Called when all chunk of data have been received
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(3000);

	console.log("Server has started");
}

exports.start = start;
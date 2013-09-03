var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called");
	//var content = "empty";
	
	 exec(sleep(10000), { timeout: 20000, maxBuffer: 20000*1024 },
	function (error, stdout, stdderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	 });
	 //return content;	
}

function upload(response) {
	console.log("Request handler 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime+milliSeconds);
}
	
exports.start = start;
exports.upload = upload;
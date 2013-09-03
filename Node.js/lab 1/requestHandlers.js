var exec = require("child_process").exec;

function start() {
	console.log("Request handler 'start' was called");
	var content = "empty";
	
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime+milliSeconds);
	}
	
	 exec(sleep(10000), function (error, stdout, stdderr) {
		content = stdout;
	 });
	 
	 return content;	
}

function upload() {
	console.log("Request handler 'upload' was called");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
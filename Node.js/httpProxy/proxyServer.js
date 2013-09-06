var proxyServer = require('http-proxy');
var port = parseInt(process.argv[2]);
var servers = [
  {
    host: "localhost",
    port: 8081
  },
  {
    host: "localhost",
    port: 8080
  }
];

console.log("test");

proxyServer.createServer(function (req, res, proxy) {
  var target = servers.shift();

  console.log("Starting proxy server");

  proxy.proxyRequest(req, res, target);
  servers.push(target);
}).listen(8000);
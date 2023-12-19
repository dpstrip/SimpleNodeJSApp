var http = require('http');
var ip = require("ip");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let msg = '<h1>Hello World</h1><p> the ip address is: ' + ip.address();
    res.end(msg);
}).listen(3080);
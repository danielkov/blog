var http = require('http'),
	fs = require('fs')

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	var index = fs.readFileSync('./index.html');
	res.write(index);
	res.end()
})

server.listen(2345);

console.log('Server is listening!')

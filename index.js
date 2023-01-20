var http = require('http')

var server = http.createServer(function (req, res) {
    console.log('Recieved' + req.method + ' request for: ' + req.url);
    res.writeHead(200, {'Content-Type': "text/plain"});
    // const contentType = request.getHeader('Content-Type');
    res.end('Hello World');
});

server.listen(8080, 'localhost', null, function (){
console.log('Server is listening on localhost:8080');
});


var http = require('http');

var server = http.createServer();

var port = process.env.PORT || 8000 

function mensaje(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
}

server.on('request', mensaje);

server.listen(port, function() { 
    console.log("App is running on port " + port); 
});
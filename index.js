const express = require('express');
const app = express();

var port = process.env.PORT || 8000 

function mensaje(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
}

app.get('/spa1', (request, response)=>{
    let valor_random = Math.random();
    response.sendFile(path.resolve(__dirname,'spa1.html',{valor_random:valor_random}));
});

app.on('request', mensaje);

app.listen(port, function() { 
    console.log("App is running on port " + port); 
});
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var port = process.env.PORT || 8000 

app.use('/static', express.static(__dirname + '/public'));

router.get('/spa1',function(req,res){

    var dato = Math.floor(Math.random() * 10); 
   
    res.sendFile(path.join(__dirname+'/spa'+(dato)+'.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || port);

console.log('Running at Port 3000');
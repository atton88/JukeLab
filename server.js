var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname ));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/temp-images'));
console.log('Listening on 8888');
app.listen(8888);
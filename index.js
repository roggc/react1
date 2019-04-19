var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '/build')));

var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('listening on http://'+host+':'+port+'/');
});

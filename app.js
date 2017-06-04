var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.use('/static', express.static('dist'))

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    io.clients((error, clients) => {
        console.log(clients);
        // if other people, get state, and emit it back
        // else return null (or something)
    });
});

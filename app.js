const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(80)

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    io.clients((error, clients) => {
        if (clients.length === 1) {
            socket.emit('new-game');
        } else {
            // TODO: figure out how to get another person's state back to the
            // newly connected socket (not working right now bc socket.io does
            // not allow "acknowledgement" functions on broadcasts).
            socket.to(clients[0]).emit('request-game', (gameState) => {
                socket.emit('existing-game', gameState);
            });
        }
    })
    socket.on('game-action', (action) => {
        socket.broadcast.emit('game-action', action);
    });
})

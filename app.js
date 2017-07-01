const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(80)

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html')
})

const connectionListener = (socket) => {
    io.clients((error, clients) => {
        if (clients.length === 1) {
            socket.emit('new-game');
        } else {
            const leaderSocketId = clients[0]
            socket.to(leaderSocketId).emit('request-game');
        }
    })

    socket.on('game-action', (action) => {
        const taggedAction = Object.assign({}, action, {from: socket.id}); 
        socket.broadcast.emit('game-action', taggedAction);
    });

    socket.on('game-state', (gameState) => {
        socket.broadcast.emit('game-state', gameState);
    });
}

io.on('connection', connectionListener)

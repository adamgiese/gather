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
        console.log(clients)
        // if other people, get state, and emit it back
        // else return null (or something)
    })
})

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const portNo = 3001

server.listen(portNo, () => {
    console.log('server is running at 3001')
})

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
    res.redirect(302, '/public')
})

const socketio = require('socket.io')
const io = socketio.listen(server)
io.on('connection', (socket) => {
    console.log('사용자 접속: ', socket.client.id)

    socket.on('chat-msg', (msg) => {
        console.log('message: ' + msg)
        io.emit('chat-msg', msg)
    })
})
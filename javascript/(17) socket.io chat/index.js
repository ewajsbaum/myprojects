const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');

const app = express();

const server = http.createServer(app);
const socketIo = io(server);

app.use(express.static(path.join(__dirname, 'public')));

socketIo.on('connection', socket => {
    socket.on('sentText', text => {
        socketIo.emit('broadcastText', text);
    });
});

server.listen(80);
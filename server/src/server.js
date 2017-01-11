'use strict';

import http from 'http';
import express from 'express';
import path from 'path';
import SocketIO from 'socket.io';
import _ from 'lodash';

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 8090;

app.use(express.static('./public'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

io.on('connection', (socket) => {
  
  socket.on('REMOTE_ACTION', (action) => {
    socket.broadcast.emit('REMOTE_ACTION', action);
  });

  socket.on('disconnect', () => {
    console.log("bye")
  });
});


server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port);
});


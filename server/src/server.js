'use strict';

import http from 'http';
import express from 'express';
import path from 'path';
import SocketIO from 'socket.io';
import _ from 'lodash';
import mongoose from 'mongoose';
import Todo from './todo';


let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 8090;

mongoose.connect('mongodb://localhost/todos');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connected");
})

app.use(express.static('./public'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

io.on('connection', (socket) => {
  
  socket.on('REMOTE_ACTION', (action) => {
    socket.broadcast.emit('REMOTE_ACTION', action);
    syncWithDatabase(action)
  });

  socket.on('INITIAL_LOAD_ACTION', () => {
    getAllTodo(socket)
  });

  socket.on('disconnect', () => {
    console.log("bye")
  });
});


server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});


function syncWithDatabase(action) {
  switch(action.type) {
    case 'ADD_TODO':
      addTodo(action)
      break
    case 'UPDATE_TODO':
      updateTodo(action)
      break
    case 'TOGGLE_TODO':
      toggleTodo(action)
      break
    case 'DELETE_TODO':
      deleteTodo(action);
  }
}

function getAllTodo(socket) {
  Todo.find({}, function(err, todos){
    socket.emit('ADD_TODOS', todos)
  });
}

function addTodo(action) {
  var newTodo = new Todo({task: action.task, id: action.id, completed: false})
  newTodo.save()
}

function updateTodo(action) {
  Todo.findOneAndUpdate({id:action.id}, action, {upsert: true}, function(err) {
    if(err) console.log(err)
  })
}

function toggleTodo(action) {
  Todo.findOne({id:action.id}, function(err, todo) {
    todo['completed'] = !todo['completed']
    todo.save()
  })
}

function deleteTodo(action) {
  Todo.find({id:action.id}).remove().exec(function(err) {
    if(err) console.log(err)
  })
}


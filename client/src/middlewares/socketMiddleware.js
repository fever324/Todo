import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS} from '../actions/actionTypes'
import * as actions from '../actions'
import io from 'socket.io-client'

export var socket = null;

export function socketMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (socket && !action.isRemote && action.type !== SET_VISIBILITY_FILTERS) {
        socket.emit('REMOTE_ACTION', action)
    }
    return result;
  };
}

export function connectToServer (store) {
  socket = io.connect(`${location.protocol}//${location.hostname}:8090`);

  socket.on('REMOTE_ACTION', action => {
    switch(action.type){
      case ADD_TODO:
        return store.dispatch(actions.addTodo(action.task, true));
      case DELETE_TODO:
        return store.dispatch(actions.deleteTodo(action.id, true));
      case UPDATE_TODO:
        return store.dispatch(actions.updateTodo(action.id, action.task, true));
      case TOGGLE_TODO:
        return store.dispatch(actions.toggleTodo(action.id, true));
    }
  });
}

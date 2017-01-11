import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/actionTypes'
import _ from 'lodash';

const todo = function(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        task: action.task,
        completed: false
      }

    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed})

    case UPDATE_TODO:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {task: action.task})

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]

    case TOGGLE_TODO:
      return state.map(t => todo(t, action))

    case DELETE_TODO:
      return _.filter(state, t => t.id !== action.id)

    case UPDATE_TODO:
      return state.map(t => todo(t, action))

    default:
      return state
  }
}

export default todos
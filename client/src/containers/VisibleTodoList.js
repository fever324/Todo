import { connect } from 'react-redux'
import { toggleTodo, updateTodo, deleteTodo } from '../actions'
import { VisibilityFilters } from '../actions/actionTypes'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL: 
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },

    onUpdateTodo: (id, task) => {
      dispatch(updateTodo(id, task))
    },

    onDeleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
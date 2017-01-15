import { connect } from 'react-redux'
import { toggleTodo, updateTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'all': 
      return todos
    case 'active':
      return todos.filter(t => t.completed)
    case 'completed':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
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
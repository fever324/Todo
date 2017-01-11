import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoHeader from '../components/TodoHeader'

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (task) => {
      dispatch(addTodo(task))
    }
  }
}

const Header = connect(undefined, mapDispatchToProps)(TodoHeader)

export default Header
import React, { Component } from 'react'
import '../style/style.css'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from '../containers/TodoHeader'
import TodoFilters from './TodoFilters'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoFilters />
        <VisibleTodoList filter={this.props.params.filter || 'all'} />
      </div>
    )
  }
}

export default App

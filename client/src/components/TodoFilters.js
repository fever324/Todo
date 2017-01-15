import React, { Component } from 'react'
import FilterLink from './FilterLink'

class TodoFilters extends Component {
  render() {
   return( 
    <p> 
      <FilterLink filter="all">All</FilterLink>
      {" | "}
      <FilterLink filter="completed">Completed</FilterLink>
      {" | "}
      <FilterLink filter="active">Active</FilterLink>
    </p>
    )
  }
}

export default TodoFilters
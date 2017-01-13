import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actionTypes'

class TodoFilters extends Component {
  render() {
   return( 
    <p> 
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {" | "}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      {" | "}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    </p>
    )
  }
}

export default TodoFilters
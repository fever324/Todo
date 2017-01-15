import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '/' : filter}
    className="filterLink"
    activeClassName="filterLink-active">
    {children}
  </Link>
)

export default FilterLink
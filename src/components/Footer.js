import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <FilterLink filter="SHOW_ALL">
      <p>All</p>
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      <p>Active</p>
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      <p>Completed</p>
    </FilterLink>
  </div>
)

export default Footer

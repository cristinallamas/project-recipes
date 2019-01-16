import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <React.Fragment>
    <ul>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/recipes'}>Recipes</NavLink>
      </li>
      <li>
        <NavLink to={'/shopping-list'}>Shopping List</NavLink>
      </li>
    </ul>
  </React.Fragment>
)

export default Navigation

import React from 'react'
import Card from '../organisms/Card'
import { Link } from 'react-router-dom'

const Listing = props => (
  <React.Fragment>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      {props.list.map((item, key) => (
        <li key={key} style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to={`/recipe/${item.id}`}>
            <Card item={item}/>
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
)

export default Listing

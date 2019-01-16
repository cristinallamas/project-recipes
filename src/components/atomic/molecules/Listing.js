import React from 'react'
import Card from '../organisms/Card'

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
          <Card item={item}/>
        </li>
      ))}
    </ul>
  </React.Fragment>
)

export default Listing

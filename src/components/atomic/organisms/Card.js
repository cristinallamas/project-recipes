import React from 'react'

const Card = props => (
  <React.Fragment>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      <li style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={props.item.image} alt='food' />
        <h2>{props.item.title}</h2>
      </li>
    </ul>
  </React.Fragment>
)

export default Card

import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '../atoms/Checkbox'

const Card = props => (
  <React.Fragment>
  {/* {console.log(props)} */}
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      <li style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={`/recipe/${props.item.id}`}>
          <img src={props.item.image} alt='food' />
          <h2>{props.item.title}</h2>
        </Link>
        <Checkbox itemID={props.item.id}/>
        Saved

      </li>
    </ul>
  </React.Fragment>
)

export default Card

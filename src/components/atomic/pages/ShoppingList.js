import React from 'react'
// import Listing from '../molecules/Listing'
import ShoppingCart from '../organisms/ShoppingCart'

const ShoppingList = props => (
  <React.Fragment>
    <h1>ShoppingList</h1>
    <ShoppingCart shoppingList={props.shoppingList} estado={props}/>
  </React.Fragment>
)

export default ShoppingList

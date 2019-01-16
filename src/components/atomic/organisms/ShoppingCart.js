import React, { Component } from 'react'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
  }
  getShoppingCartState () {
    console.log(this)
    return this.props.shoppingList
  }
  componentDidMount () {
    // this.shoppingState = this.getShoppingCartState()
  }

  componentDidUpdate () {}
  render () {
    return (
      <React.Fragment>
        <div>Cart</div>

        <ul>
          {this.shoppingList.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default ShoppingCart

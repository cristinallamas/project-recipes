import React from 'react'

const Recipe = props => (
  <React.Fragment>
    <h1>{props.recipe.title}</h1>
    <img src={props.recipe.image} alt='food' height="200" width="300" />
  </React.Fragment>
)

export default Recipe

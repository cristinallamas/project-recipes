import React from 'react'
import Listing from '../molecules/Listing'

const RecipesList = props => (
  <React.Fragment>
    <h1>Recipes</h1>

    <Listing list={props.recipes} />

  </React.Fragment>
)

export default RecipesList

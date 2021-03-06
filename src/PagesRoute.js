import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RecipesList from './components/atomic/pages/RecipesList'
import Recipe from './components/atomic/atoms/Recipe'
import Homepage from './components/atomic/pages/Homepage'
import NoMatch from './components/atomic/pages/NoMatch'

const PagesRoute = props => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route
      path='/recipes'
      render={() => <RecipesList recipes={props.recipes} />}
    />

    {props.recipes.map((recipe, key) => (
      <Route key={key}
        path='/recipe/:recipeId'
        render={() => <Recipe recipe={recipe} />}
      />
    ))}
    <Route component={NoMatch} />
  </Switch>
)

export default PagesRoute

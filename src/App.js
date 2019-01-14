import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recipes: [],
      selectedRecipe: null,
      shoppingList: [],
      thisWeekPlan: []
    }
  }

  componentDidMount () {
    this.getRecipes()
  }

  getRecipes () {
    this.setState({
      recipes: [
        {
          title: 'Cristi Special',
          path: '/cristi-special',
          image: 'http://via.placeholder.com/300x200',
          ingredients: [
            '1 Tiger bread bun',
            'Marmite',
            'Extra virgin olive oil',
            'Hummus',
            'Avocado',
            'Nutritional yeast flakes',
            'Hemp Seeds (dehulled)',
            'Salt'
          ],
          steps: [
            'Spread on marmite',
            'Add olive oil on bread',
            'Spread Hummus on bread',
            'Add sliced or smashed avocado on top',
            'Sprinkle nutritional yeast and hemp seeds',
            'Fix salt to taste',
            'Enjoy!'
          ],
          id: '1'
        },
        {
          title: 'Pizza',
          path: '/pizza',
          image: 'http://via.placeholder.com/300x200',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Vegan Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle vegan cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: '2'
        }
      ]
    })
  }
  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <Layout {...this.state} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App

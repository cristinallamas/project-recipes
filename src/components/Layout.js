import React, { Component } from 'react'
import PagesRoute from '../PagesRoute'
import Navigation from '../components/atomic/atoms/Navigation'
import Listing from '../components/atomic/molecules/Listing'

class Layout extends Component {
  render () {
    return (
      <div
        className='site-wrapper'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Navigation />
        <h2>Selected recipes</h2>
        <Listing list={this.props.thisWeekPlan} />
        <PagesRoute {...this.props} />
      </div>
    )
  }
}

export default Layout

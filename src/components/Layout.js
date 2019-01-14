import React, { Component } from 'react'
import PagesRoute from '../PagesRoute'
import Navigation from '../components/atomic/atoms/Navigation'

class Layout extends Component {
  render () {
    return (
      <div
        className='site-wrapper'
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Navigation />
        <PagesRoute {...this.props} />
      </div>
    )
  }
}

export default Layout

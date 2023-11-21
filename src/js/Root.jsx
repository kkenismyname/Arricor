import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import Favicon from 'react-favicon'
import ScrollUpButton from 'react-scroll-up-button'

import ScrollToTop from '~components/ScrollToTop'
import FavIcon from '../assets/icons/favicon.ico'

WebFont.load({
  google: {
    families: [
      'IBM Plex Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
    ],
  },
})

export default class Root extends Component {
  get content() {
    const { routes } = this.props

    return (
      <Fragment>
        <Favicon url={FavIcon} />
        <ScrollUpButton ContainerClassName="scroll-up-container" />
        <Router>
          <ScrollToTop>
            {routes}
          </ScrollToTop>
        </Router>
      </Fragment>
    )
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        {this.content}
      </Provider>
    )
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

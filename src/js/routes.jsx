import React, { Fragment } from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from '~views/Home'
import Process from '~views/Process'
import Past from '~views/Past'
import Future from '~views/Future'
import Contact from '~views/Contact'
import Privacy from '~views/Privacy'
import Blog from '~views/Blog'
import Header from '~layout/Header'
import Footer from '~layout/Footer'

import '../style/index.scss'

const menuItems = [
  {
    title: 'our Process',
    link: '/process',
  },
  {
    title: 'past',
    link: '/past',
  },
  {
    title: 'future',
    link: '/future',
  },
  {
    title: 'contact Us',
    link: '/contact',
  },
  {
    title: 'blog',
    link: '/blog',
  },
]

module.exports = (
  <Fragment>
    <Header menuItems={menuItems} />
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/process" component={Process} />
        <Route path="/past" component={Past} />
        <Route path="/future" component={Future} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </div>
  </Fragment>
)

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

export default ({ items }) => {
  return (
    <div className="nav-bar">
      {
        items.map((item) => (
          <div key={item.id} className="nav-item">
            <Link smooth to={`#${item.id}`}>{item.title}</Link>
          </div>
        ))
      }
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default ({ menuItems }) => (
  <div className="menu-container">
    {
      menuItems.map((menuItem) => (
        <Link to={menuItem.link} className="menu-text" key={menuItem.link}>
          {menuItem.title}
        </Link>
      ))
    }
  </div>
)

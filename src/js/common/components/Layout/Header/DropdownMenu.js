import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default ({ show, onMenuClick, menuItems }) => (
  <div
    className={classNames('header-dropdown', { show })}
    onClick={() => onMenuClick()}
    role="button"
    onKeyPress={() => {}}
    tabIndex="0"
  >
    {menuItems.map((menuItem) => {
      return (
        <div className="menu-item" key={menuItem.link}>
          <Link to={menuItem.link}>
            {menuItem.title}
          </Link>
        </div>
      )
    })}
  </div>
)

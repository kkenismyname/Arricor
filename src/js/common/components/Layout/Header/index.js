import React, { useState } from 'react'
import classNames from 'classnames'
import Logo from './Logo'
import Menu from './Menu'
import DropdownMenu from './DropdownMenu'

import 'hamburgers/_sass/hamburgers/hamburgers.scss'
import './style.scss'

export default ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const showMenu = () => {
    setMenuOpen(true)
    document.body.style.background = 'unset'
  }

  const hideMenu = () => {
    setMenuOpen(false)
    document.body.style.background = 'radial-gradient(100% 30% at 0% 0%, rgba(14, 100, 177, 0.32) 0%, rgba(42, 116, 133, 0) 100%)'
  }

  const onMenuClick = () => {
    hideMenu();
  }

  return (
    <div className="header-container">
      <Logo onClick={hideMenu} />
      <Menu menuItems={menuItems} />
      <div className="mobile-menu">
        <button
          className={classNames('hamburger', 'hamburger--squeeze', {
            'is-active': menuOpen,
          })}
          type="button"
          onClick={menuOpen ? hideMenu : showMenu}
          aria-label="hamburger button to open navigation menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <DropdownMenu
          show={menuOpen}
          menuItems={menuItems}
          onMenuClick={onMenuClick}
        />
      </div>
    </div>
  )
}

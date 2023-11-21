import React from 'react'
import { Link } from 'react-router-dom'

export default ({ onClick }) => (
  <div className="logo-container" onClick={onClick} role="button" onKeyPress={() => {}} tabIndex="0">
    <Link to="/" className="logo-text">
      Arricor.
    </Link>
  </div>
)

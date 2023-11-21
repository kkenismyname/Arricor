import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-flexbox-grid'

import Newsletter from '~layout/Newsletter'

export default ({
  title, content, isContent, isNewsLetter,
}) => (
  <Col xs={12} sm={isNewsLetter ? 5 : 3} className="footer-box">
    <h5 className="title">{title}</h5>
    <div className="content">
      {content}
      &nbsp;
      {isContent && <Link to="/contact" className="contact-link">Contact Us.</Link>}
      {
        isNewsLetter && <Newsletter />
      }
    </div>
  </Col>
)

import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Input from '~layout/Input'

import './style.scss'

export default ({
  value,
  onChange,
}) => {
  return (
    <Row className="prefered-contact">
      <Col xs={12} sm={6} className="prefered-contact-title">Preffered contact?</Col>
      <Col xs={12} sm={6}>
        <Row between="xs">
          <Col xs>
            <Input type="radio" value="email" label="Email" checked={value === 'email'} onChange={onChange} />
          </Col>
          <Col xs>
            <Input type="radio" value="phone" label="Phone" checked={value === 'phone'} onChange={onChange} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

export default ({ id, title, content }) => (
  <div id={id}>
    <Row>
      <Col xs={12} lg={12} xl={5} className="past-title">{title}</Col>
      <Col xs={12} lg={12} xl={6} className="past-content">{content}</Col>
    </Row>
  </div>
)

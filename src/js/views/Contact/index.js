import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Section from '~layout/Section'

import './layout/style.scss'

const title = 'We\'d love to talk about your project and see where we can help.'
const previous = {
  label: 'Our Future',
  link: '/future',
}
const next = {
  label: 'Blog',
  link: '/blog',
}

export default () => (
  <Section title={title} next={next} previous={previous} className="contact-page">
    <Row className="contact-container" between="xl">
      <Col xs={12} xl={5} className="contact-form-description">
        Give us a call, send an email or use the
        chat feature below to tell us about your next project.
      </Col>
      <Col xs={12} xl={5} className="contact-form">
        Phone:&nbsp;
        <a href="tel:+1 (213) ARRICOR">+1 (213) ARRICOR</a>
        <br />
        <br />
        Email:&nbsp;
        <a href="mailto: hello@arricor.com">hello@arricor.com</a>
        <br />
        <br />
        Seattle, WA
      </Col>
    </Row>
  </Section>
)

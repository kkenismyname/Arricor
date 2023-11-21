import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ReactMarkdown from 'react-markdown'

import Section from '~layout/Section'
import PrivacyMarkDown from '~assets/privacy.md'

import './layout/style.scss'

const title = 'Privacy Notice'

const previous = {
  label: 'Contact Us',
  link: '/contact',
}

export default () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(PrivacyMarkDown)
      .then((res) => res.text())
      .then((post) => setMarkdown(post))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Section title={title} previous={previous} className="privacy-page">
      <Row className="privacy-description">
        <Col>
          <ReactMarkdown source={markdown} />
        </Col>
      </Row>
    </Section>
  )
}

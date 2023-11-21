import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Section from '~layout/Section'
import Divider from '~layout/Divider'
import BrandContent from './layout/brandContent'
import WorkedWith from './layout/workedWith'

import './layout/style.scss'

const title = 'We help enterprise-sized companies solve data science problems.'
const next = {
  label: 'Our Process',
  link: '/process',
}

export default () => (
  <Section title={title} next={next} className="home-page" isHome>
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={12} xl={9} className="brand-container">
            <BrandContent />
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="divider-container">
        <Divider />
      </Col>
      <Col xs={12} className="worked-with-container">
        <WorkedWith />
      </Col>
    </Row>
  </Section>
)

import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ScrollAnimation from 'react-animate-on-scroll'

import Section from '~layout/Section'
import Divider from '~layout/Divider'
import Description from './layout/description'
import Step from './layout/step'

import './layout/style.scss'

const title = 'Designed to guide discovery.'
const next = {
  label: 'Our Past',
  link: '/past',
}
const previous = {
  label: 'Overview',
  link: '/',
}
const steps = [
  {
    title: 'discovery',
    content: 'We first discuss goals and data. We want to know what your major pain points are and find out what data you have around that problem set. If the data isn’t there, we can help you plan for data collection and design a path to a machine learning prototype.',
  },
  {
    title: 'prototype',
    content: 'Once we have data and goals are outlined we build a prototype with your team. We want to get within striking distance on the prototype via goals we’ll establish ahead of time.',
  },
  {
    title: 'production',
    content: 'At this stage, we want to build a production quality model and plan to fit the model into your systems. Most companies struggle at this part, we don’t want to hand you a model and walk away. We have deep software experience that allows us to make a perfect fit.',
  },
  {
    title: 'Training',
    content: 'We are great at what we do and we don’t think it’s rocket science. We think that it’s critical for development teams to understand the process, knowing how to debug and iterate as well as achieve new goals using these skills. We want to leave your team with a strong understanding of how everything works.',
  },
]

export default () => (
  <Section title={title} next={next} previous={previous} className="process-page">
    <Row>
      <Col xs={12} xl={9} className="description-part">
        <Description />
      </Col>
    </Row>
    <Row>
      <Col xs={12} className="divider-container">
        <Divider />
      </Col>
    </Row>
    <Row className="step-part" center="xs">
      <Col xs={12} sm={12} xl={10}>
        {
          steps.map((step, index) => (
            <Row end={index % 2 === 1 ? 'xs' : false} key={`${step.title}`}>
              <Col xs={12} sm={6} xl={5}>
                <ScrollAnimation animateIn="fadeIn">
                  <Step step={index + 1} title={step.title} content={step.content} />
                </ScrollAnimation>
              </Col>
            </Row>
          ))
        }
      </Col>
    </Row>
  </Section>
)

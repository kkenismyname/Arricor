import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import ScrollAnimation from 'react-animate-on-scroll'

import Future from './layout/Future'
import Newsletter from '~layout/Newsletter'
import Section from '~layout/Section'

import './layout/style.scss'

const title = 'In a continually evolving industry we evolve with it.'
const previous = {
  label: 'Our Past',
  link: '/past',
}
const next = {
  label: 'Contact Us',
  link: '/contact',
}
const futures = [
  {
    title: 'Industry',
    content: 'The internet is one of the fastest evolving industries in history, but artificial intelligence is moving even faster. Nearly every part of AI has had a major step improvement in the last 3 months. From natural language processing to generative adversarial networks, we are seeing a bright but uncertain future. We are excited to be a part of it.\n\nWe stay up-to-date on solid research and applicable gains for our clients.\n\nNew research on neural networks are astounding and we are seeing evolutions in our industry on a nearly monthly basis. It\'s our job to stay caught up with the latest research and distill those findings so your team can reap the rewards.',
  },
  {
    title: 'Neural networks are not rocket science',
    content: 'It\'s our belief that neural networks and any descendants of this technology will become a skill like javascript which most developers come to learn and understand. Teaching future developers this skillset is a pivotal aspect of our business. We want to grow with the industry and we want your development team to grow with us.\n\nYour team can learn how to work with neural networks and we want to make sure that we plan for knowledge transfer during and after our project so your team can iterate on future ideas with or without us.\n\nAs these tools become easier to use, we focus more on the fundamentals of whats going on underneath the covers. We encourage you to ask our team questions on how it works and how it can be improved.',
  },
  {
    title: 'Research',
    content: 'We\'ve been developing neural networks for sound analysis. The majority of our research work revolves around understanding context in conversation, speaker recognition and being able to pull insight out of our conversations and communications.',
  },
];

export default () => (
  <Section title={title} next={next} previous={previous} className="future-page">
    <Row className="future-container" between="xl">
      <Col xs={12} xl={5}>
        {
          futures.map((future) => <ScrollAnimation animateIn="fadeIn"><Future {...future} key={future.title} /></ScrollAnimation>)
        }
      </Col>
      <Col xs={12} xl={5} className="newsletter-container">
        <div className="newsletter-title">Newsletter</div>
        <div className="newsletter-description">Stay up to speed with us.</div>
        <Newsletter />
      </Col>
    </Row>
  </Section>
)

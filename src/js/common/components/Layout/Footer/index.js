import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Box from './Box'

import './style.scss'

const items = [
  {
    title: 'where',
    content: 'Arricor is based in Seattle, WA and serves clients nationwide.',
  },
  {
    title: 'connect',
    content: 'Have a project or some questions? Don’t hesitate to',
    isContent: true,
  },
  {
    title: 'newsletter',
    content: 'Stay up to speed with us.',
    isNewsLetter: true,
  },
]

export default () => (
  <Row className="footer-container">
    <Col xs={12}>
      <Row between="xs">
        {
          items.map((item) => <Box {...item} key={item.title} />)
        }
      </Row>
    </Col>
    <Col xs={12} className="copy-right">
      <h5>&copy;2019 Arricor</h5>
    </Col>
    <Col xs={12}>
      <noscript>
        <a href="https://www.livechatinc.com/chat-with/11374007/" rel="nofollow">Chat with us</a>
        ,powered by&nbsp;
        <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow noreferrer" target="_blank">LiveChat</a>
      </noscript>
    </Col>
  </Row>
)

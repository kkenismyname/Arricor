import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import ScrollAnimation from 'react-animate-on-scroll'
import ArrowNext from '~assets/icons/arrow-next.svg'
import ArrowPrev from '~assets/icons/arrow-prev.svg'

import './style.scss'

export default ({
  children,
  title,
  next,
  previous,
  className,
  isHome,
}) => (
  <div className={classNames('section', className)}>
    <Row between="xl">
      <Col xl={isHome ? 5 : 8} xs={12} className="title">
        <ScrollAnimation animateIn="fadeIn">
          {title}
        </ScrollAnimation>
      </Col>
      {
        isHome && (
          <Col xl={5} xs={12} className="player">
            <YouTubePlayer
              url="https://www.youtube.com/watch?v=AFHET4G00UI"
              playing
              controls
              width="100%"
              style={{
                maxHeight: '100%',
              }}
              playsinline
            />
          </Col>
        )
      }
    </Row>
    <Row>
      <Col xs={12}>{children}</Col>
    </Row>
    <Row className="link-container">
      <Col xs className={classNames('link', 'prev')}>
        {previous && (
          <Link to={previous.link}>
            <div>{previous.label}</div>
            <div>
              <img src={ArrowPrev} alt="previous" />
            </div>
          </Link>
        )}
      </Col>
      <Col xs className={classNames('link', 'next')}>
        {next && (
          <Link to={next.link}>
            <div>{next.label}</div>
            <div>
              <img src={ArrowNext} alt="next" />
            </div>
          </Link>
        )}
      </Col>
    </Row>
  </div>
);

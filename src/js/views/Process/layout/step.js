import React from 'react'

export default ({ step, title, content }) => (
  <div className="step-container">
    <div className="step-title-container">
      <div className="step-index">{`0${step}`}</div>
      <div className="step-title">{title}</div>
    </div>
    <div className="step-content-container">
      {content}
    </div>
  </div>
)

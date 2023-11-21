import React, { useState } from 'react'

import './style.scss'

export default () => {
  const [email, setEmail] = useState('')
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <form action="https://arricor.us20.list-manage.com/subscribe/post?u=4c1e3dd122485034fd6aac379&amp;id=e10fbb8605" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="newsletter-form">
      <label htmlFor="EMAIL">
        <input type="email" placeholder="Email Address" className="email-input" name="EMAIL" value={email} onChange={onChangeEmail} required />
      </label>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_4c1e3dd122485034fd6aac379_e10fbb8605" tabIndex="-1" value="" readOnly /></div>
      <button type="submit">Submit</button>
    </form>
  )
}

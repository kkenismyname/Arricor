import React, { useEffect } from 'react'

import Section from '~layout/Section'

const title = ''
const previous = {
  label: 'Contact Us',
  link: '/contact',
}

export default ({ location }) => {
  useEffect(() => {
    if (!location.hash || location.hash === '#/') {
      const script1 = document.createElement('script')
      script1.type = 'text/javascript'
      script1.innerHTML = 'var dib_id = \'8EVZ8V0034Z4H798R93P\';'
      document.body.appendChild(script1)

      const script2 = document.createElement('script')
      script2.src = 'https://dropinblog.com/js/embed.js'
      script2.async = true
      document.body.appendChild(script2)
    }
  }, [location.hash])

  return (
    <Section title={title} previous={previous} className="contact-page">
      <div id="dib-posts" />
    </Section>
  )
}

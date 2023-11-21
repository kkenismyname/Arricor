import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Section from '~layout/Section'
import Past from './layout/Past'
import Navbar from './layout/Navbar'

import './layout/style.scss'

const title = 'We have expertise across a spectrum of verticals with an emphasis on creating predictive systems.'
const next = {
  label: 'Our Future',
  link: '/future',
}
const previous = {
  label: 'Our Process',
  link: '/process',
}
const pasts = [
  {
    id: 'logistics',
    title: 'Logistics',
    content: 'The world’s largest shipper wanted to find a better way to reduce the costly process of coding import and export packages for tariffs. The existing process involved time consuming human coding. They reached out to us to asking what deep learning could do for them. We developed an R&D path for them involving exploration of cloud AI providers such as AWS and Azure, Ultimately their problem required specific models unavailable out of the box so we developed a neural network that classified descriptions of packages into harmonized tax codes with 96% accuracy. This allowed them to significantly reduce their operating expenses and allowed a faster, more accurate process that was scalable.',
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    content: 'In entertainment, we were contracted by the top talent agency in Los Angeles to do predictions on the first 8-weeks of box office revenue on a given motion picture. Their existing models were good but were unable to account for anomalous movies, such as the massive blockbusters. We built a custom machine learning algorithm for them that predicted with 95% accuracy and allowed them to include blockbuster films in their analysis without it throwing off the predictions.',
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics & Fashion',
    content: 'A well known cosmetics company frequently experienced e-commerce outages that impacted their online sales velocity. They identified that their alerting requirements were not able to keep pace with all the possibilities of that could impact their customer experience. We consulted with them and decided that we could reduce their outage times by quickly escalating errors as they appeared on the site. We did this by profiling statistical order demands and when a product’s order velocity was too high or too low we would alert their e-commerce operations team to fix the issue. This significantly improved their customer experience and as a consequently allowed them to accurately predict demand on products.',
  },
  {
    id: 'politics',
    title: 'Politics & Policy',
    content: 'We developed algorithms for emotional analysis of social media comments for a congressional office that allowed them to better poll constituents and create better policies around issues that mattered.',
  },
  {
    id: 'medical',
    title: 'Medical Devices',
    content: 'A major medical device manufacturer relied on dated statistical models to predict device failure. However, it wasn’t as accurate or as reliable as they wanted so they asked us what could be done. We used neural networks to develop a much improved model that allowed their sales team to develop an improved approach that can target customers for upgrades and service packages.',
  },
  {
    id: 'legal',
    title: 'Legal',
    content: 'The largest provider of legal software contracted with us to develop deep data analysis tools for litigators. These tools allowed litigators to develop advanced strategies based off of their opponents predicted strategies, the presiding judge and the associated industry and case presidents. This allowed them to open up a new sales channel to offer products the legal industry had not seen before.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce / Startup',
    content: 'We helped a startup develop custom machine learning algorithms that gave e-commerce stores the abilities to dynamically price their products based on demand. We built the algorithm to price both unlimited and limited inventory products. The startup used these algorithms to reprice hundreds of millions of dollars in product orders, these stores saw a 30% increase in profit on average.',
  },
];

export default () => (
  <Section title={title} next={next} previous={previous} className="past-page">
    <div className="nav-container" id="nav-container">
      <Navbar items={pasts} />
    </div>
    <div className="pasts-container">
      {
        pasts.map((past) => <ScrollAnimation animateIn="fadeIn"><div className="past-section" key={past.title}><Past {...past} /></div></ScrollAnimation>)
      }
    </div>
  </Section>
)

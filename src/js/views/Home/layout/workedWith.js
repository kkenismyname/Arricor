import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Globe from '~assets/icons/globe.png'
import Samsung from '~assets/icons/samsung.svg'
import Ups from '~assets/icons/ups.svg'
import Reuters from '~assets/icons/reuters.svg'
import Fox from '~assets/icons/fox.png'
import Gs from '~assets/icons/gs.svg'
import Stryker from '~assets/icons/stryker.png'
import Sephora from '~assets/icons/sephora.svg'

import Elastic from '~assets/icons/elastic.svg'
import Aws from '~assets/icons/aws.png'
import Azure from '~assets/icons/azure.svg'
import Pytorch from '~assets/icons/pytorch.svg'
import Tensorflow from '~assets/icons/tensorflow.svg'
import Python from '~assets/icons/python.svg'
import Spark from '~assets/icons/spark.svg'
import Hadoop from '~assets/icons/hadoop.svg'
import Postgres from '~assets/icons/postgres.png'
import Getty from '~assets/icons/getty.png'
import CAA from '~assets/icons/caa.png'

export default () => (
  <div>
    <ScrollAnimation animateIn="fadeIn">
      <div className="worked-with-title">
        Our Clients
      </div>
      <div className="worked-with-logos-container">
        <div className="worked-with-logos">
          <img src={Globe} alt="globe" width="100" />
          <img src={Samsung} alt="samsung" width="131" />
          <img src={Ups} alt="ups" />
          <img src={Reuters} alt="reuters" />
          <img src={Fox} alt="fox" width="80" />
          <img src={Gs} alt="gs" />
        </div>
        <div className="worked-with-logos">
          <img src={Stryker} alt="stryker" width="100" />
          <img src={Sephora} alt="sephora" />
          <img src={Getty} alt="getty" width="150" />
          <img src={CAA} alt="caa" width="100" />
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <div className="worked-with-problems-container">
        <div className="worked-with-problems-text">
          We solve problems across Computer Vision
          Artificial Intelligence (AI),
          Machine Learning, Neural Networks, and Natural Language Processing (NLP).
        </div>
        <div className="worked-with-problems-logo-container">
          <div className="worked-with-problems-logo">
            <img src={Elastic} alt="elastic" />
            <img src={Aws} alt="aws" />
            <img src={Azure} alt="azure" />
          </div>
          <div className="worked-with-problems-logo">
            <img src={Pytorch} alt="pytorch" />
            <img src={Tensorflow} alt="tensorflow" />
            <img src={Python} alt="python" />
          </div>
          <div className="worked-with-problems-logo">
            <img src={Spark} alt="spark" />
            <img src={Hadoop} alt="hadoop" />
            <img src={Postgres} alt="postgres" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { host } from '../../api'
import Hero from '../../components/Hero/Hero'
import { green, orange } from '../../scss/partials/_variables.scss'
import style from './About.scss'

type Props = {}

class AboutPage extends React.Component<Props> {
  render () {
    return (
      <div className={`row ${style.AboutPage}`}>
        <Link to="/our-founder">
          <div
            className={`col1 col2-tablet ${style.heroWrapper} ${
              style.heroLeft
            }`}
          >
            <Hero
              title={'Our Founder'}
              copy={'Luis Quispe Kuntur'}
              imgSrc={`${host}/wp-content/uploads/2018/05/DSC_0194-1024x683.jpg`}
              overlay={green}
            />
          </div>
        </Link>

        <Link to="/our-story">
          <div
            className={`col1 col2-tablet ${style.heroWrapper} ${
              style.heroRight
            }`}
          >
            <Hero
              title={'Our Story'}
              copy={'Progress'}
              imgSrc={`${host}/wp-content/uploads/2018/05/30602238_1778785328826315_4105638377313796096_n.jpg`}
              overlay={orange}
            />
          </div>
        </Link>
      </div>
    )
  }
}

export default AboutPage

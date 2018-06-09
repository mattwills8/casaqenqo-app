// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import PageSection from '../../components/PageSection/PageSection'
import {
  green,
  lightgray,
  white,
  silver
} from '../../scss/partials/_variables.scss'
import Posts from '../../components/Posts/Posts'
import Services from '../../components/Services/Services'
import Underline from '../../components/Underline/Underline'
import style from './Home.scss'

type Props = {}

class Home extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Hero
          title={"Casa Q'enqo"}
          copy={'Some caption here'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/30602238_1778785328826315_4105638377313796096_n.jpg'
          }
          overlay={green}
        />
        <PageSection
          alignment={'left'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/31729856_371738433309886_3474435251755810816_n-e1527308033517.jpg'
          }
          overlay={lightgray}
          contentWidth={'2'}
          renderContent={() => {
            return (
              <div className={style.section1}>
                <h2>The Project</h2>
                <Underline style={{ width: '65%' }} align={'left'} />
                <div>{'Some explanation of the project Lorem Ipsum Dolor'}</div>
              </div>
            )
          }}
        />
        <PageSection
          alignment={'right'}
          overlay={lightgray}
          contentWidth={'2'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/DSC_0721-2-1024x683.jpg'
          }
          renderContent={() => {
            return (
              <div className={style.section1}>
                <h2>The Casa</h2>
                <Underline style={{ width: '65%' }} align={'left'} />
                <div>{'Some explanation of the airbnb with link to book'}</div>
              </div>
            )
          }}
        />
        <PageSection
          overlay={lightgray}
          contentWidth={'1'}
          renderContent={() => {
            return (
              <div className={style.section2}>
                <h2>Services</h2>
                <Underline style={{ width: '50%' }} />
                <div>
                  {'Some caption about the services available at casa qenqo'}
                </div>
                <Services numberToShow={3} style={'1'} />
                <div className={`col1 ${style.showMoreWrapper}`}>
                  <Link to="/services">
                    <button>{'See More'}</button>
                  </Link>
                </div>
              </div>
            )
          }}
        />
        <PageSection
          alignment={'left'}
          overlay={silver}
          contentWidth={'1'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/DSC_0194-1024x683.jpg'
          }
          renderContent={() => {
            return (
              <div className={style.section2}>
                <h2>Learn More</h2>
                <Underline style={{ width: '65%' }} />
                <div>
                  {'Will be an extra video here to explain the project'}
                </div>
              </div>
            )
          }}
        />
        <PageSection
          overlay={white}
          contentWidth={'1'}
          renderContent={() => {
            return (
              <div className={style.section2}>
                <h2>Latest News</h2>
                <Underline style={{ width: '50%' }} />
                <Posts numberToShow={3} />
                <div className={`col1 ${style.showMoreWrapper}`}>
                  <Link to="/news">
                    <button>{'See More'}</button>
                  </Link>
                </div>
              </div>
            )
          }}
        />
      </React.Fragment>
    )
  }
}

export default Home

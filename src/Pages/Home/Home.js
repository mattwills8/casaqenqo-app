// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { host } from '../../api'
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
import TitleArea from '../../components/TitleArea/TitleArea'
import style from './Home.scss'

type Props = {}

class Home extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Hero
          title={"Casa Q'enqo"}
          copy={'Securing a brighter future for homeless children in Cusco'}
          imgSrc={`${host}/wp-content/uploads/2018/05/30602238_1778785328826315_4105638377313796096_n.jpg`}
          overlay={green}
        />
        <PageSection
          alignment={'left'}
          imgSrc={`${host}/wp-content/uploads/2018/05/31729856_371738433309886_3474435251755810816_n-e1527308033517.jpg`}
          overlay={lightgray}
          contentWidth={'2'}
          renderContent={() => {
            return (
              <div className={style.section1}>
                <TitleArea title={'Our Mission'} align={'left'} />
                <div>
                  <p>
                    {
                      'Last year, 300 children in Cusco didnt have a place to sleep'
                    }
                  </p>
                </div>
              </div>
            )
          }}
        />
        <PageSection
          alignment={'right'}
          overlay={lightgray}
          contentWidth={'2'}
          imgSrc={`${host}/wp-content/uploads/2018/08/b346941d-b3c3-4c7c-8234-bfabe8f0554d.jpg`}
          renderContent={() => {
            return (
              <div className={style.section1}>
                <TitleArea title={'The Casa'} align={'left'} />
                <div>
                  <p>{'Some explanation of the airbnb with link to book'}</p>
                </div>
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
                <TitleArea
                  title={'Fundraisers'}
                  align={'center'}
                  tagline={
                    'Explore Peru whilst helping us raise the funds to support homeless children in Cusco'
                  }
                />
                <Services numberToShow={3} style={'1'} />
                <div className={`col1 ${style.showMoreWrapper}`}>
                  <Link to="/fundraisers">
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
          imgSrc={`${host}/wp-content/uploads/2018/05/DSC_0194-1024x683.jpg`}
          renderContent={() => {
            return (
              <div className={style.section2}>
                <TitleArea title={'Learn More'} align={'center'} />
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
                <TitleArea title={'Latest News'} align={'center'} />
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

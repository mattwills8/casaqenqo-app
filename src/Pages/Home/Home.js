// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { host } from '../../api'
import Hero from '../../components/Hero/Hero'
import PageSection from '../../components/PageSection/PageSection'
import { green, lightgray, white } from '../../scss/partials/_variables.scss'
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
          copy={
            'Helping homeless children climb towards a better future in Cusco'
          }
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
              <div className={`${style.section1} ${style.paddingTop}`}>
                <TitleArea title={'Our Mission'} align={'left'} />
                <div>
                  <p>
                    {
                      'Due to extreme poverty and, in some cases, domestic and sexual abuse, hundreds of children in Cusco are forced to flee their homes and live on the streets every year.'
                    }
                  </p>
                  <p>{'Our mission is to change this.'}</p>
                  <p>
                    {
                      'How? Through climbing! As a community of climbers, we believe that the sport can not only help the mental and physical wellbeing of homeless children in Cusco, but we also think it has the potential to equip them with the right skills to be self-sustainable in the future.'
                    }
                  </p>
                </div>
              </div>
            )
          }}
          withGradient
          gradientLeft
        />
        <PageSection
          alignment={'right'}
          overlay={lightgray}
          contentWidth={'2'}
          imgSrc={`${host}/wp-content/uploads/2018/08/b346941d-b3c3-4c7c-8234-bfabe8f0554d.jpg`}
          renderContent={() => {
            return (
              <div className={`${style.section1} ${style.paddingTop}`}>
                <TitleArea title={'The Casa'} align={'left'} />
                <div>
                  <p>
                    {
                      'The Casa - a family home turned Airbnb in the heart of Cusco - is the engine of the Casa Q’enqo project.'
                    }
                  </p>
                  <p>
                    {
                      'Set up to help fund our  community climbing initiative, we invite travellers to stay with us in our home, take part in adventure and cultural activities, and get stuck in with our social projects - all whilst being just a stone throw’s away from Cusco’s most popular tourist sites.'
                    }
                  </p>
                </div>
              </div>
            )
          }}
          withGradient
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
        {/*
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
        */}
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

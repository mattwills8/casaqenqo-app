// @flow
import * as React from 'react'
import Hero from '../../components/Hero/Hero'
import PageSection from '../../components/PageSection/PageSection'
import { green, lightgray, white } from '../../scss/partials/_variables.scss'
import style from './Home.scss'

type Props = {}

class Home extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Hero
          title={"Casa Q'enqo"}
          copy={'Help us help homeless children in Cusco'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/IMG_1316.jpg'
          }
          overlay={green}
        />
        <PageSection
          alignment={'left'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/IMG_1316.jpg'
          }
          overlay={lightgray}
          contentWidth={'2'}
          renderContent={() => {
            return (
              <div className={style.section1}>
                <h2>The Project</h2>
                <div>
                  {'Some explanation hre of whats happening Lorem Ipsum Dolor'}
                </div>
              </div>
            )
          }}
        />
        <PageSection
          alignment={'right'}
          overlay={white}
          contentWidth={'1'}
          renderContent={() => {
            return (
              <div className={style.section2}>
                <h2>Services</h2>
                <div>
                  {'Some explanation hre of whats happening Lorem Ipsum Dolor'}
                </div>
              </div>
            )
          }}
        />
        <PageSection
          alignment={'right'}
          overlay={lightgray}
          contentWidth={'2'}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/IMG_1316.jpg'
          }
          renderContent={() => {
            return (
              <div className={style.section1}>
                <h2>The Casa</h2>
                <div>
                  {'Some explanation hre of whats happening Lorem Ipsum Dolor'}
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

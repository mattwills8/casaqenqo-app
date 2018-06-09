// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { text } from '../../lib/cq_language'
import PageSection from '../PageSection/PageSection'
import Underline from '../Underline/Underline'
import { green } from '../../scss/partials/_variables.scss'
import style from './Footer.scss'

type Props = {}

class Footer extends React.Component<Props> {
  renderFooterMenuItems () {
    return (
      <div className={style.menuItems}>
        <div className={style.menuItem}>
          <Link to="/news">
            <h5>{text('News')}</h5>
          </Link>
        </div>
        <div className={style.menuItem}>
          <Link to="/casa">
            <h5>{text('Casa')}</h5>
          </Link>
        </div>
        <div className={style.menuItem}>
          <Link to="/fundraisers">
            <h5>{text('Fundraisers')}</h5>
          </Link>
        </div>
        <div className={style.menuItem}>
          <Link to="/project">
            <h5>{text('Project')}</h5>
          </Link>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={style.footerArea}>
        <PageSection
          alignment={'left'}
          overlay={green}
          contentWidth={'1'}
          renderContent={() => {
            return (
              <div className={style.donate}>
                <h1 className={style.white}>{'Donate'}</h1>
                <Underline style={{ width: '35%' }} />
                <h4 className={`${style.white} ${style.copy}`}>
                  {
                    'Your donation will help to keep children off the streets of Cusco and further their development as guides'
                  }
                </h4>
                <div className={`row ${style.donateBoxes}`}>
                  <div className={`col1 col2-tablet ${style.donateBox}`}>
                    <div className={style.donateBoxInner}>
                      <h3>{'One Time'}</h3>
                    </div>
                  </div>
                  <div className={`col1 col2-tablet ${style.donateBox}`}>
                    <div className={style.donateBoxInner}>
                      <h3>{'Monthly Recurring'}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          }}
        />
        <footer className={`row ${style.footer}`}>
          {this.renderFooterMenuItems()}
        </footer>
      </div>
    )
  }
}

export default Footer

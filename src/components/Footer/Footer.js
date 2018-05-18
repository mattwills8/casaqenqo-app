// @flow
import * as React from 'react'
import { text } from '../../lib/cq_language'
import style from './Footer.scss'

type Props = {}

class Footer extends React.Component<Props> {
  renderFooterMenuItems () {
    return (
      <div className={style.menuItems}>
        <div className={style.menuItem}>
          <h5>{text('News')}</h5>
        </div>
        <div className={style.menuItem}>
          <h5>{text('Casa')}</h5>
        </div>
        <div className={style.menuItem}>
          <h5>{text('Services')}</h5>
        </div>
        <div className={style.menuItem}>
          <h5>{text('Project')}</h5>
        </div>
      </div>
    )
  }

  render () {
    return (
      <footer className={style.footer}>{this.renderFooterMenuItems()}</footer>
    )
  }
}

export default Footer

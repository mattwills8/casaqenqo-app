// @flow
import * as React from 'react'
import { text } from '../../lib/cq_language'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import style from './Header.scss'

type Props = {}

class Header extends React.Component<Props> {
  renderMenuItems () {
    return (
      <div className={`col2 col4x3-desktop ${style.menuItems}`}>
        {this.renderDonate()}
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

  renderDonate () {
    return (
      <div className={style.buttonWrapper}>
        <button className={style.button}>{'Donate'}</button>
      </div>
    )
  }

  render () {
    return (
      <header className={`row ${style.header}`}>
        <div className={`col2 col4-desktop ${style.logo}`}>
          <h1>{"Casa Q'enqo"}</h1>
        </div>
        {this.renderMenuItems()}
      </header>
    )
  }
}

export default Header

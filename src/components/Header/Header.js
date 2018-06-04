// @flow
import * as React from 'react'
import type { ScreenSize } from '../../lib/contexts/screenSize_context'
import { Link } from 'react-router-dom'
import { withScreenSize } from '../../lib/contexts/screenSize_context'
import { text } from '../../lib/cq_language'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import style from './Header.scss'

type Props = {
  screenSize: ScreenSize,
  delayHeader?: boolean
}

type State = {
  showMenuMobile: boolean
}

class Header extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { showMenuMobile: false }
  }

  burgerOnActive () {
    this.setState({ showMenuMobile: true })
  }

  burgerOnInactive () {
    this.setState({ showMenuMobile: false })
  }

  renderMenuItems () {
    return (
      <React.Fragment>
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
          <Link to="/services">
            <h5>{text('Services')}</h5>
          </Link>
        </div>
        <div className={style.menuItem}>
          <Link to="/project">
            <h5>{text('Project')}</h5>
          </Link>
        </div>
      </React.Fragment>
    )
  }

  renderMenuItemsMobile () {
    return <div className={style.menuItemsMobile}>{this.renderMenuItems()}</div>
  }

  renderBurgerMenu () {
    return (
      <div className={style.burgerMenuWrapper}>
        <BurgerMenu
          onActive={this.burgerOnActive.bind(this)}
          onInactive={this.burgerOnInactive.bind(this)}
        />
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
      <header
        style={{
          animationDelay: this.props.delayHeader ? '4s' : '1s'
        }}
        className={`row ${style.header}`}>
        <div className={`col3-tablet col4-desktop ${style.logo}`}>
          <Link to="/">
            <h1>{"Casa Q'enqo"}</h1>
          </Link>
        </div>
        <div className={`col1 ${style.menuItems}`}>
          {this.renderDonate()}
          {this.props.screenSize === 'mobile'
            ? this.renderBurgerMenu()
            : this.renderMenuItems()}
        </div>
        {this.props.screenSize === 'mobile' &&
          this.state.showMenuMobile &&
          this.renderMenuItemsMobile()}
      </header>
    )
  }
}

export default withScreenSize(Header)

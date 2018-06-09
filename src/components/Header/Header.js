// @flow
import * as React from 'react'
import type { ScreenSize } from '../../lib/contexts/screenSize_context'
import type { Match } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withScreenSize } from '../../lib/contexts/screenSize_context'
import { text } from '../../lib/cq_language'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import style from './Header.scss'

type Props = {
  screenSize: ScreenSize,
  delayHeader?: boolean,
  // react router
  match: Match
}

type State = {
  showMenuMobile: boolean
}

class Header extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { showMenuMobile: false }
  }

  static getDerivedStateFromProps () {
    return { showMenuMobile: false }
  }

  toggleActiveMobileMenu () {
    return this.setState({ showMenuMobile: !this.state.showMenuMobile })
  }

  renderMenuItems () {
    return (
      <React.Fragment>
        <div className={`${style.menuItem} ${this.isMatched('news')}`}>
          <Link to="/news">
            <h5>{text('News')}</h5>
          </Link>
        </div>
        <div className={`${style.menuItem} ${this.isMatched('casa')}`}>
          <Link to="/casa">
            <h5>{text('Casa')}</h5>
          </Link>
        </div>
        <div className={`${style.menuItem} ${this.isMatched('services')}`}>
          <Link to="/fundraisers">
            <h5>{text('Fundraisers')}</h5>
          </Link>
        </div>
        <div className={`${style.menuItem} ${this.isMatched('project')}`}>
          <Link to="/about">
            <h5>{text('About')}</h5>
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
      <div
        onClick={this.toggleActiveMobileMenu.bind(this)}
        className={style.burgerMenuWrapper}>
        <BurgerMenu active={this.state.showMenuMobile} />
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

  isMatched (route: string): string {
    const { match } = this.props
    if (
      (match.path === '/news' && route === 'news') ||
      (match.path === '/post/:slug' && route === 'news') ||
      (match.path === '/services' && route === 'services') ||
      (match.params.slug && match.params.slug === route)
    ) {
      return style.match
    }
    return ''
  }
}

export default withScreenSize(Header)

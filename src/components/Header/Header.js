// @flow
import * as React from 'react'
import type { ScreenSize } from '../../lib/contexts/screenSize_context'
import { withScreenSize } from '../../lib/contexts/screenSize_context'
import { text } from '../../lib/cq_language'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import style from './Header.scss'

type Props = {
  screenSize: ScreenSize
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
      <header className={`row ${style.header}`}>
        <div className={`col3-tablet col4-desktop ${style.logo}`}>
          <h1>{"Casa Q'enqo"}</h1>
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

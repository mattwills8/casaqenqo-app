// @flow
import React, { Component } from 'react'

type Props = {
  onActive: () => void,
  onInactive: () => void
}

type State = {
  isActive: boolean
}

/**
 * Renders the Hamburger Squeeze icon from:
 *
 * @see https://jonsuh.com/hamburgers
 */
class BurgerMenu extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  handleClick () {
    if (this.state.isActive) {
      this.props.onInactive()
    } else {
      this.props.onActive()
    }

    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    const active = this.state.isActive ? 'is-active' : ''

    return (
      <div
        className={`noSelectBackground hamburger hamburger--squeeze ${active}`}
        onClick={this.handleClick.bind(this)}>
        <span className={'hamburger-box'}>
          <span className={'hamburger-inner'} />
        </span>
      </div>
    )
  }
}

export default BurgerMenu

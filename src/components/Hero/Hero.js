// @flow
import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Underline from '../Underline/Underline'
import Background from '../../components/Background/Background'
import style from './Hero.scss'

type Props = {
  title?: string,
  copy?: string,
  imgSrc: string,
  overlay?: string
}

type State = {
  showTitle: boolean,
  showCopy: boolean
}

class Hero extends React.Component<Props, State> {
  defaultState: State
  titleTimer: TimeoutID = setTimeout(() => {}, 1000)
  copyTimer: TimeoutID = setTimeout(() => {}, 2000)
  heroNode: ?HTMLDivElement

  constructor (props: Props) {
    super(props)

    this.defaultState = {
      showTitle: false,
      showCopy: false
    }
    this.state = this.defaultState
  }

  componentDidMount () {
    this.fadeTextIn()
  }

  componentDidUpdate (prevProps: Props) {
    if (
      prevProps.title !== this.props.title ||
      prevProps.copy !== this.props.copy
    ) {
      this.resetText()
      this.fadeTextIn()
    }
  }

  resetText () {
    clearTimeout(this.titleTimer)
    clearTimeout(this.copyTimer)
    this.setState(this.defaultState)
  }

  fadeTextIn () {
    this.titleTimer = setTimeout(this.showTitle.bind(this), 1000)
    this.copyTimer = setTimeout(this.showCopy.bind(this), 2000)
  }

  showTitle () {
    this.setState({ showTitle: true })
  }

  showCopy () {
    this.setState({ showCopy: true })
  }

  renderTitle (shouldRender: boolean) {
    if (!shouldRender || !this.props.title) {
      return
    }

    return (
      <div
        style={{
          opacity: this.state.showTitle ? 1 : 0
        }}
        className={`col1 hero-headline ${style.title}`}>
        {this.props.title}
      </div>
    )
  }

  renderCopy (shouldRender: boolean) {
    if (!shouldRender || !this.props.copy) {
      return
    }

    return (
      <div
        style={{
          opacity: this.state.showCopy ? 1 : 0
        }}
        className={`col1 hero-copy ${style.copy}`}>
        {ReactHtmlParser(this.props.copy)}
      </div>
    )
  }

  renderHeroBackgroundImage () {
    return (
      <Background
        imageSrc={this.getHeroBackgroundImageSrc()}
        customOverlayColor={this.props.overlay}
        imageOpacity={0.33}
      />
    )
  }

  getHeroBackgroundImageSrc () {
    return this.props.imgSrc
  }

  render () {
    const shouldRender = this.heroShouldRender()

    if (!shouldRender.title && !shouldRender.copy) {
      return null
    }

    return (
      <div
        ref={node => {
          this.heroNode = node
        }}
        className={style.heroWrapper}>
        {this.renderHeroBackgroundImage()}

        <div className={`row ${style.hero}`}>
          {this.renderTitle(shouldRender.title)}
          <Underline
            style={{
              opacity: this.state.showTitle ? 1 : 0
            }}
          />
          {this.renderCopy(shouldRender.copy)}
        </div>
      </div>
    )
  }

  heroShouldRender (): { title: boolean, copy: boolean } {
    const { title, copy } = this.props

    const shouldRender = {
      title: !!title,
      copy: !!copy
    }

    return shouldRender
  }
}

export default Hero

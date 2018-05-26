// @flow
import * as React from 'react'
import type { ScreenSize } from '../../../lib/contexts/screenSize_context'
import { withScreenSize } from '../../../lib/contexts/screenSize_context'
import FixedAspectRatioBox from '../FixedAspectRatioBox'
import style from './ImageFrame.scss'

type Props = {
  /**
   * Src of an image to contain in the frame
   */
  src: string,
  /**
   * Aspect ratio for mobile screen size
   */
  aspectRatio: number,
  /**
   * Aspect ratio for tablet screen size (defaults to mobile)
   */
  aspectRatioTablet?: number,
  /**
   * Aspect ratio for desktop screen size (defaults to mobile)
   */
  aspectRatioDesktop?: number,
  /**
   * How should the image fit inside the frame
   */
  sizing?: 'cover' | 'contain',
  // from withScreenSize HOC
  screenSize: ScreenSize
}

/**
 * Wrapper for FixedAspectRatioBox which takes
 * an image src and allows you to specify a different aspect ratio for each screen size
 */
class ImageFrame extends React.Component<Props> {
  sizing: 'cover' | 'contain'
  node: ?HTMLElement

  constructor (props: Props) {
    super(props)

    this.sizing = 'cover'
  }
  getAspectRatioTablet () {
    if (!this.props.aspectRatioTablet) {
      return this.props.aspectRatio
    }

    return this.props.aspectRatioTablet
  }

  getAspectRatioDesktop () {
    if (!this.props.aspectRatioDesktop) {
      return this.props.aspectRatio
    }

    return this.props.aspectRatioDesktop
  }

  renderFrameMobile () {
    return (
      <FixedAspectRatioBox aspectRatio={this.props.aspectRatio}>
        <div
          style={{
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: this.props.sizing
          }}
          className={style.image}
        />
      </FixedAspectRatioBox>
    )
  }

  renderFrameTablet () {
    return (
      <FixedAspectRatioBox aspectRatio={this.getAspectRatioTablet()}>
        <div
          style={{
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: this.props.sizing
          }}
          className={style.image}
        />
      </FixedAspectRatioBox>
    )
  }

  renderFrameDesktop () {
    return (
      <FixedAspectRatioBox aspectRatio={this.getAspectRatioDesktop()}>
        <div
          style={{
            backgroundImage: `url(${this.props.src})`,
            backgroundSize: this.props.sizing
          }}
          className={style.image}
        />
      </FixedAspectRatioBox>
    )
  }

  render () {
    if (this.props.screenSize === 'mobile') {
      return this.renderFrameMobile()
    } else if (this.props.screenSize === 'tablet') {
      return this.renderFrameTablet()
    } else {
      return this.renderFrameDesktop()
    }
  }
}

export default withScreenSize(ImageFrame)

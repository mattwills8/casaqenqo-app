// @flow
import * as React from 'react'
import type {ScreenSize} from '../../lib/contexts/screenSize_context'
import {withScreenSize} from '../../lib/contexts/screenSize_context'
import style from './Background.scss'

type Props = {
  /**
   * The whole image src as a string
   */
  imageSrc?: string,
  /**
   * The name of the colour to use, as named in the styleguide. Colour must exists in the styleguide
   */
  customOverlayColor?: string,
  /**
   * Opacity for the image between 0 and 1.
   * Note: The image is on top of the overlay, so 0.2 here would equate to 80% opacity for the overlay.
   */
  imageOpacity: number,
  withGradient: boolean,
  gradientLeft: boolean,
  // from withScreenSize HOC
  screenSize: ScreenSize
}

/**
 * Adds a background to a parent div with some logic for combining images, overlays, and skin
 *
 *
 * If src and overlay are passed, we return an image with a coloured overlay.
 *
 * If just src is passed, or overlay is an empty string, we get the image with opacity 1.
 *
 * If just the overlay is passed with no image, we get a solid coloured background.
 *
 * If neither are passed, we get the background colour from the skin.
 *
 *
 * NOTE: the parent div should extend the %bcorpBackgroundParent SCSS class.
 */
const Background = (props: Props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: getOverlay(props)
        }}
        className={style.overlay}
      />

      <div
        style={getBackgroundStyle(props)}
        className={`${style.image} bcorp-background-image`}
      />
    </div>
  )
}

function getBackgroundStyle (props: Props) {
  const backgroundStyle = {}

  backgroundStyle.backgroundImage = props.imageSrc
    ? `url(${props.imageSrc})`
    : undefined
  backgroundStyle.opacity = props.customOverlayColor ? props.imageOpacity : 1

  return backgroundStyle
}

function getOverlay (props: Props) {
  const color = props.customOverlayColor ? props.customOverlayColor : '#fff'

  if (props.screenSize === 'mobile') {
    return `linear-gradient(to right, ${color} , ${color})`
  } else {
    if (props.withGradient) {
      return props.gradientLeft ? `linear-gradient(to right, ${color} , black)` : `linear-gradient(to right, black , ${color})`
    } else {
      return `linear-gradient(to right, ${color} , ${color})`
    }
  }
}

export default withScreenSize(Background)

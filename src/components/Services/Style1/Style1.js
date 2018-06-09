// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'
import { Link } from 'react-router-dom'
import { getExcerpt } from '../../../lib/cq_Post'
import ImageFrame from '../../FixedAspectRatioBox/ImageFrame/ImageFrame'
import ContentTransformer from '../../ContentTransformer/ContentTransformer'
import style from './Style1.scss'

type Props = {
  service: Post
}

class ServiceStyle1 extends React.PureComponent<Props> {
  renderFeaturedImage () {
    if (!this.props.service.featured_image) {
      return
    }

    return (
      <div className={style.featuredImageWrapper}>
        <div className={style.featuredImage}>
          <ImageFrame
            src={this.props.service.featured_image}
            aspectRatio={100 / 200}
            aspectRatioTablet={100 / 180}
            aspectRatioDesktop={100 / 150}
          />
        </div>
      </div>
    )
  }

  renderTitle () {
    return (
      <div className={style.title}>
        <h4>{this.props.service.title.rendered}</h4>
      </div>
    )
  }

  renderMeta () {
    const servicePrice =
      this.props.service.post_meta_fields.service_price || false
    const serviceDuration =
      this.props.service.post_meta_fields.service_duration || false

    if (!servicePrice && !serviceDuration) {
      return
    }

    return (
      <div className={`row ${style.meta}`}>
        {serviceDuration && (
          <div className={`col1 ${style.duration} ${style.metaField}`}>
            <div className={style.metaWrapper}>
              <img
                src={require('../../../images/clock/clock.png')}
                className={style.icon}
              />
              <h6>{serviceDuration}</h6>
            </div>
          </div>
        )}
        {servicePrice && (
          <div className={`col1 ${style.price} ${style.metaField}`}>
            <div className={style.metaWrapper}>
              <img
                src={require('../../../images/price-tag/price-tag.png')}
                className={style.icon}
              />
              <h6>{`$${servicePrice}`}</h6>
            </div>
          </div>
        )}
      </div>
    )
  }

  renderContent () {
    return (
      <div className={style.content}>
        <ContentTransformer
          content={getExcerpt(
            this.props.service.content.rendered,
            this.props.service.excerpt.rendered,
            'short'
          )}
        />
      </div>
    )
  }

  render () {
    return (
      <div className={`col1 col3-tablet ${style.serviceStyle1}`}>
        {this.renderFeaturedImage()}
        {this.renderTitle()}
        {this.renderMeta()}
        {this.renderContent()}
        <Link to={`/service/${this.props.service.slug}`}>
          <button>{'Learn More'}</button>
        </Link>
      </div>
    )
  }
}

export default ServiceStyle1

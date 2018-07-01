// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'
import type { ScreenSize } from '../../../lib/contexts/screenSize_context'
import { withScreenSize } from '../../../lib/contexts/screenSize_context'
import ContentTransformer from '../../ContentTransformer/ContentTransformer'
import ContactButton from '../../ContactButton/ContactButton'
import ServicesStyle1 from '../Style1/Style1'
import style from './Style2.scss'

type Props = {
  service: Post,
  // from withScreenSize HOC
  screenSize: ScreenSize
}

class ServiceStyle2 extends React.PureComponent<Props> {
  renderFeaturedImage () {
    if (!this.props.service.featured_image) {
      return
    }

    return (
      <div
        className={style.featuredImage}
        style={{
          backgroundImage: `url("${this.props.service.featured_image}")`
        }}
      />
    )
  }

  renderTitle () {
    return (
      <div className={style.title}>
        <h3>{this.props.service.title.rendered}</h3>
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
        <ContactButton />
      </div>
    )
  }

  renderContent () {
    return (
      <div className={style.content}>
        <ContentTransformer content={this.props.service.content.rendered} />
      </div>
    )
  }

  render () {
    return this.props.screenSize === 'mobile' ? (
      <ServicesStyle1 service={this.props.service} />
    ) : (
      <div className={`col1 ${style.serviceStyle2}`}>
        <div className={`col1 col3-tablet ${style.featuredImageWrapper}`}>
          {this.renderFeaturedImage()}
        </div>
        <div className={`col1 col3x2-tablet ${style.contentWrapper}`}>
          {this.renderTitle()}
          {this.renderMeta()}
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default withScreenSize(ServiceStyle2)

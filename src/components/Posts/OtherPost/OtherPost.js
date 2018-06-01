// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'
import { Link } from 'react-router-dom'
import { getExcerpt } from '../../../lib/cq_Post'
import ImageFrame from '../../FixedAspectRatioBox/ImageFrame/ImageFrame'
import ContentTransformer from '../../ContentTransformer/ContentTransformer'
import style from './OtherPost.scss'

type Props = {
  post: Post
}

class OtherPost extends React.Component<Props> {
  renderImage () {
    if (!this.props.post.featured_image) {
      return
    }

    return (
      <div className={style.featuredImage}>
        <ImageFrame
          src={this.props.post.featured_image}
          aspectRatio={60 / 100}
          aspectRatioTablet={50 / 100}
          aspectRatioDesktop={40 / 100}
        />
      </div>
    )
  }

  renderTitle () {
    if (!this.props.post.title.rendered) {
      return
    }

    return <h3 className={style.title}>{this.props.post.title.rendered}</h3>
  }

  renderExcerpt () {
    return (
      <div className={style.excerpt}>
        <ContentTransformer
          content={getExcerpt(
            this.props.post.excerpt.rendered,
            this.props.post.content.rendered || '',
            'long'
          )}
        />
      </div>
    )
  }

  render () {
    return (
      <div className={`col1 col2-tablet ${style.otherPostWrapper}`}>
        <div className={`${style.otherPost}`}>
          <Link to={`/post/${this.props.post.slug}`}>
            {this.renderImage()}
            {this.renderTitle()}
          </Link>
          {this.renderExcerpt()}
          <Link to={`/post/${this.props.post.slug}`}>
            <button>{'READ MORE'}</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default OtherPost

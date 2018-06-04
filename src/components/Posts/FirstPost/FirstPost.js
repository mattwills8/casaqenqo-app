// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'
import type { ScreenSize } from '../../../lib/contexts/screenSize_context'
import { withScreenSize } from '../../../lib/contexts/screenSize_context'
import { Link } from 'react-router-dom'
import { getExcerpt } from '../../../lib/cq_Post'
import ContentTransformer from '../../ContentTransformer/ContentTransformer'
import OtherPost from '../OtherPost/OtherPost'
import style from './FirstPost.scss'

type Props = {
  post: Post,
  // from withScreenSize HOC
  screenSize: ScreenSize
}

class FirstPost extends React.Component<Props> {
  renderImage () {
    if (!this.props.post.featured_image) {
      return
    }

    return (
      <div
        style={{
          backgroundImage: `url('${this.props.post.featured_image}')` || ''
        }}
        className={`col2 ${style.featuredImage}`}
      />
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
    return this.props.screenSize === 'mobile' ? (
      <OtherPost post={this.props.post} />
    ) : (
      <div className={`col1 ${style.firstPost}`}>
        <Link to={`/post/${this.props.post.slug}`}>{this.renderImage()}</Link>

        <div className={`col1 col2-tablet ${style.contentContainer}`}>
          <Link to={`/post/${this.props.post.slug}`}>{this.renderTitle()}</Link>

          {this.renderExcerpt()}
          <Link to={`/post/${this.props.post.slug}`}>
            <button>{'READ MORE'}</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withScreenSize(FirstPost)

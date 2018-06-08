// @flow
import * as React from 'react'
import type { Match } from 'react-router-dom'
import type { Post } from '../../lib/flow-typed/post_types'
import moment from 'moment'
import ContentTransformer from '../../components/ContentTransformer/ContentTransformer'
import PostApiClient from '../../api/post_client'
import ImageFrame from '../../components/FixedAspectRatioBox/ImageFrame/ImageFrame'
import Loading from '../../components/Loading/Loading'
import style from './BlogPost.scss'

type Props = {
  match: Match
}

type State = {
  post: Post,
  loading: boolean
}

class BlogPost extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { post: {}, loading: true }
  }

  componentDidMount () {
    this.getPost()
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      this.getPost()
    }
  }

  renderFeaturedImage () {
    if (!this.state.post.featured_image) {
      return
    }

    return (
      <div className={style.featuredImage}>
        <ImageFrame
          src={this.state.post.featured_image}
          aspectRatio={100 / 200}
          aspectRatioTablet={100 / 250}
          aspectRatioDesktop={100 / 270}
        />
      </div>
    )
  }

  renderTitle () {
    return (
      <div className={style.title}>
        <h1>{this.state.post.title.rendered}</h1>
        {this.renderPostMeta()}
      </div>
    )
  }

  renderPostMeta () {
    const date = moment(this.state.post.date).format('MMM D YY')
    return <h6 className={style.postMeta}>{date}</h6>
  }

  render () {
    console.log(this.state)

    if (this.state.loading || !this.state.post) {
      return <Loading />
    }
    return (
      <div className={style.BlogPost}>
        {this.renderFeaturedImage()}
        {this.renderTitle()}
        <div className={style.content}>
          <ContentTransformer
            content={this.state.post.content.rendered || ''}
          />
        </div>
      </div>
    )
  }

  async getPost () {
    if (!this.props.match.params.slug) {
      return
    }

    this.setState({ loading: true })

    try {
      const slug = this.props.match.params.slug || ''
      const response = await PostApiClient.getBySlug(slug)

      console.log(response)

      this.setState({ post: response.data[0], loading: false })
    } catch (error) {
      console.log(error)
    }
  }
}

export default BlogPost

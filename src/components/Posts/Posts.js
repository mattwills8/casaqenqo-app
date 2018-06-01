// @flow
import * as React from 'react'
import type { Post } from '../../lib/flow-typed/post_types'
import PostApiClient from '../../api/post_client'
import Loading from '../../components/Loading/Loading'
import FirstPost from './FirstPost/FirstPost.js'
import OtherPost from './OtherPost/OtherPost.js'
import style from './Posts.scss'

type Props = {
  numberToShow: number
}

type State = {
  posts: Array<Post>,
  loading: boolean
}

class Posts extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { posts: [], loading: true }
  }

  componentDidMount () {
    this.getPosts()
  }

  renderPosts () {
    if (!this.state.posts.length) {
      return
    }

    // const posts = [...this.state.posts]
    // const firstPost = posts.shift()

    return this.state.posts.map((post, index) => {
      if (index === 0) {
        return <FirstPost key={index} post={post} />
      } else {
        return <OtherPost key={index} post={post} />
      }
    })
  }

  render () {
    console.log(this.state)

    if (this.state.loading) {
      return <Loading />
    }
    return <div className={`row ${style.posts}`}>{this.renderPosts()}</div>
  }

  async getPosts () {
    this.setState({ loading: true })

    try {
      const response = await PostApiClient.getLatest(1, this.props.numberToShow)

      console.log(response)

      this.setState({ posts: response.data, loading: false })
    } catch (error) {
      console.log(error)
      this.setState({ posts: [], loading: false })
    }
  }
}

export default Posts

// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'

type Props = {
  post: Post
}

class OtherPost extends React.Component<Props> {
  render () {
    return <div />
  }
}

export default OtherPost

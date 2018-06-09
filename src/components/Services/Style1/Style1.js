// @flow
import * as React from 'react'
import type { Post } from '../../../lib/flow-typed/post_types'
import style from './Style1.scss'

type Props = {
  service: Post
}

class ServiceStyle1 extends React.PureComponent<Props> {
  render () {
    return (
      <div className={`col1 col3-tablet ${style.serviceStyle1}`}>
        {this.props.service.title.rendered}
      </div>
    )
  }
}

export default ServiceStyle1

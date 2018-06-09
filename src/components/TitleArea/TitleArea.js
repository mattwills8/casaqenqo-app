// @flow
import * as React from 'react'
import Underline from '../Underline/Underline'
import style from './TitleArea.scss'

type Props = {
  title: string,
  tagline?: string,
  align: 'left' | 'right' | 'center',
  marginBottom?: boolean
}

class TitleArea extends React.PureComponent<Props> {
  render () {
    return (
      <div
        className={`${style.titleArea} ${
          this.props.marginBottom ? style.marginBottom : ''
        }`}
        style={{ textAlign: this.props.align }}>
        <h2>{this.props.title}</h2>
        <Underline
          style={{ width: '50%' }}
          align={this.props.align === 'center' ? 'center' : 'left'}
        />
        {this.props.tagline && <h5>{this.props.tagline}</h5>}
      </div>
    )
  }
}

export default TitleArea

// @flow
import * as React from 'react'
import Underline from '../Underline/Underline'
import style from './TitleArea.scss'

type Props = {
  title: string,
  tagline?: string,
  align: 'left' | 'right' | 'center'
}

class TitleArea extends React.PureComponent<Props> {
  render () {
    return (
      <div className={style.titleArea} style={{ textAlign: this.props.align }}>
        <h2>{this.props.title}</h2>
        <Underline
          style={{ width: '50%' }}
          align={this.props.align === 'center' ? 'center' : 'left'}
        />
        {this.props.tagline && <div>{this.props.tagline}</div>}
      </div>
    )
  }
}

export default TitleArea

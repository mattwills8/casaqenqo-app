// @flow
import * as React from 'react'
import style from './Loading.scss'

type Props = {}

class Loading extends React.Component<Props> {
  render () {
    return (
      <div style={{ height: '100vh', paddingTop: '40vh', textAlign: 'center' }}>
        <div className={style.spinner} />
      </div>
    )
  }
}

export default Loading

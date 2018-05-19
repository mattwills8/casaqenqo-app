// @flow
import * as React from 'react'
import { orange } from '../../scss/partials/_variables.scss'

type Props = {
  style?: {},
  align?: 'center' | 'right' | 'left'
}

const Underline = (props: Props) => {
  return (
    <div
      style={{ width: '100%', textAlign: props.align || 'center' }}
      className={'row'}>
      <div
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          borderRadius: '2px',
          height: '4px',
          backgroundColor: orange,
          width: '100%',
          ...props.style
        }}
        className={`underline`}
      />
    </div>
  )
}

export default Underline

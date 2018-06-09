// @flow
import * as React from 'react'
import { email } from '../../api'
import { green } from '../../scss/partials/_variables.scss'

type Props = {}

class ContactButton extends React.PureComponent<Props> {
  render () {
    return (
      <a href={`mailto:${email}`}>
        <button style={{ backgroundColor: green }}>{'Contact'}</button>
      </a>
    )
  }
}

export default ContactButton

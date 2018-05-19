// @flow
import * as React from 'react'
import type { Match } from 'react-router-dom'
import type { Page } from '../../lib/flow-typed/post_types'
import Hero from '../../components/Hero/Hero'
import PageSection from '../../components/PageSection/PageSection'
import { green, lightgray, white } from '../../scss/partials/_variables.scss'
import Underline from '../../components/Underline/Underline'
import style from './CustomPage.scss'

type Props = {
  match: Match
}

type State = {
  page: Page,
  loading: boolean
}

class Home extends React.Component<Props, State> {
  render () {
    if (this.state.loading || !this.state.page) {
      return null
    }

    return (
      <React.Fragment>
        <Hero
          title={this.state.page.title && this.state.page.title.rendered}
          imgSrc={
            'http://localhost/casaqenqo/wp-content/uploads/2018/05/IMG_1316.jpg'
          }
          overlay={green}
        />
      </React.Fragment>
    )
  }
}

export default Home
